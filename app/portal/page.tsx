import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { logout } from '../auth/actions';

export const metadata: Metadata = {
  title: 'Portal Dashboard | LBSAA UK',
};

export default async function PortalPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Pull data from our custom Supabase SQL tables
  const { data: profiles } = await supabase.from('profiles').select('*').limit(10);
  const { data: documents } = await supabase.from('documents').select('*').order('created_at', { ascending: false });

  return (
    <div className="section container">
      <div style={{ paddingBottom: '32px', borderBottom: '1px solid var(--rule-soft)', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span className="eyebrow">Members Area</span>
          <h1>Welcome, Member</h1>
        </div>
        <form action={logout}>
          <button type="submit" className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '0.75rem' }}>
            Sign Out
          </button>
        </form>
      </div>

      <div className="lede" style={{ marginBottom: '40px' }}>
        <p>This is the secure chapter dashboard. Your authenticated email is: <strong>{user.email}</strong></p>
      </div>

      <div className="field-row" style={{ marginTop: '24px', alignItems: 'start' }}>
        
        {/* DIRECTORY SECTION */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '8px' }}>UK Alumni Directory</h3>
          {profiles && profiles.length > 0 ? (
            profiles.map((profile: any) => (
              <div key={profile.id} style={{ padding: '16px', background: 'var(--paper)', border: '1px solid var(--rule-soft)' }}>
                <div style={{ fontWeight: 600, color: 'var(--navy)' }}>
                  {profile.first_name || 'Member'} {profile.last_name || ''}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
                  {profile.email} {profile.graduation_year ? `• Class of ${profile.graduation_year}` : ''}
                </div>
              </div>
            ))
          ) : (
             <p className="muted">No member profiles found. Be the first to configure your profile!</p>
          )}
        </div>

        {/* GOVERNANCE SECTION */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '8px' }}>Governance Vault</h3>
          {documents && documents.length > 0 ? (
            documents.map((doc: any) => (
              <div key={doc.id} style={{ padding: '16px', background: 'var(--paper)', border: '1px solid var(--rule-soft)' }}>
                <div style={{ fontWeight: 600, color: 'var(--navy)' }}>
                  {doc.title}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', margin: '8px 0' }}>
                  {doc.description}
                </div>
                <a href={doc.file_url} target="_blank" rel="noopener noreferrer" className="eyebrow" style={{ marginBottom: 0, fontSize: '0.65rem' }}>
                  Download Document &rarr;
                </a>
              </div>
            ))
          ) : (
            <p className="muted">No governance documents have been uploaded yet.</p>
          )}
        </div>

      </div>
    </div>
  );
}
