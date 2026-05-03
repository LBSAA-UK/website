-- LBSAA UK Chapter: Database Schema Initialization

-- 1. Create the `profiles` table (The Alumni Directory)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  graduation_year INT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow logged-in members to read the directory
CREATE POLICY "Logged in users can view all profiles."
  ON public.profiles FOR SELECT
  USING ( auth.role() = 'authenticated' );

-- Allow users to update their own profile
CREATE POLICY "Users can update their own profile."
  ON public.profiles FOR UPDATE
  USING ( auth.uid() = id );


-- 2. Create the `documents` table (Governance & Minutes)
CREATE TABLE public.documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security for documents
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- Allow logged-in members to read documents
CREATE POLICY "Logged in users can view documents."
  ON public.documents FOR SELECT
  USING ( auth.role() = 'authenticated' );


-- 3. Create an automated trigger to generate a profile when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- 4. Insert some sample Governance documents so the table isn't empty!
INSERT INTO public.documents (title, description, file_url) 
VALUES 
  ('LBSAA UK Constitution 2026', 'The official constitution bounding the UK Chapter.', 'https://example.com/constitution.pdf'),
  ('Exco Meeting Minutes - March 2026', 'Minutes covering the Spring Gala planning and treasury update.', 'https://example.com/minutes_mar.pdf');
