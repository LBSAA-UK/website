import fs from 'fs';
import path from 'path';

const files = [
  'about.html', 'contact.html', 'cookies.html', 
  'events.html', 'membership.html', 'news.html', 'privacy.html'
];

for (const file of files) {
  const filePath = path.join('site', file);
  if (!fs.existsSync(filePath)) continue;
  
  let html = fs.readFileSync(filePath, 'utf-8');
  
  // Extract content between <main id="main"> and </main>
  const match = html.match(/<main id="main">([\s\S]*?)<\/main>/);
  if (!match) continue;
  
  let mainContent = match[1];
  
  // Basic React replacements
  mainContent = mainContent.replace(/class=/g, 'className=');
  mainContent = mainContent.replace(/for=/g, 'htmlFor=');
  
  // Close img, br, input
  mainContent = mainContent.replace(/<img([^>]+[^\/])>/g, '<img$1 />');
  mainContent = mainContent.replace(/<br>/g, '<br />');
  mainContent = mainContent.replace(/<input([^>]+[^\/])>/g, '<input$1 />');
  
  // Replace inline styles (very basic, we should check if there are any)
  mainContent = mainContent.replace(/style="([^"]+)"/g, (match, styleVal) => {
    const styleObjStr = styleVal.split(';').filter(Boolean).map(s => {
      const parts = s.split(':');
      if (parts.length < 2) return '';
      const key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      const val = parts[1].trim();
      return `"${key}": "${val}"`;
    }).join(', ');
    return `style={{ ${styleObjStr} }}`;
  });
  
  // Replace hrefs
  mainContent = mainContent.replace(/href="([^"]+?)\.html(#?[^"]*)"/g, 'href="/$1$2"');
  mainContent = mainContent.replace(/href="index\.html"/g, 'href="/"');

  const componentName = file.charAt(0).toUpperCase() + file.slice(1, -5);
  
  const pageCode = `import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LBSAA United Kingdom Chapter | ${componentName}',
};

export default function ${componentName}() {
  return (
    <>
${mainContent}
    </>
  );
}
`;

  const routeName = file.replace('.html', '');
  fs.mkdirSync(path.join('app', routeName), { recursive: true });
  fs.writeFileSync(path.join('app', routeName, 'page.tsx'), pageCode);
  console.log(`Created app/${routeName}/page.tsx`);
}
