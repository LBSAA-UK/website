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

      <div className="lead">
        <p>This is the secure chapter dashboard. Your authenticated email is: <strong>{user.email}</strong></p>
        <p>Future features including the Directory, Custom Events, and Document Vault will be launched here.</p>
      </div>

      <div className="field-row" style={{ marginTop: '48px' }}>
        <div className="card">
          <div className="card-body">
            <h3>Directory</h3>
            <p>Connect with other verified alumni in the UK.</p>
            <span className="sample-badge" style={{ width: 'fit-content' }}>Coming Soon</span>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3>Governance</h3>
            <p>Read chapter meeting minutes and constitution updates.</p>
            <span className="sample-badge" style={{ width: 'fit-content' }}>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
