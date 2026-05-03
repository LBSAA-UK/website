import { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Sign In | LBSAA UK',
};

export default function LoginPage() {
  return (
    <div className="section container-narrow" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '420px', background: 'var(--paper)', padding: '40px', border: '1px solid var(--rule)' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Member Portal</h1>
        <p className="muted" style={{ marginBottom: '32px' }}>Sign in to access exclusive chapter resources.</p>
        <LoginForm />
      </div>
    </div>
  );
}
