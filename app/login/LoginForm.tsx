'use client';

import { useActionState } from 'react';
import { login, signup } from '../auth/actions';

const initialState: { error: string | null } = { error: null };

export default function LoginForm() {
  const [loginState, loginAction, isLoginPending] = useActionState(login, initialState);
  const [signupState, signupAction, isSignupPending] = useActionState(signup, initialState);

  const error = loginState?.error || signupState?.error;
  const isPending = isLoginPending || isSignupPending;

  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div className="field" style={{ marginBottom: 0 }}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required disabled={isPending} />
        </div>
        <div className="field" style={{ marginBottom: '8px' }}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required disabled={isPending} />
        </div>
        
        {error && (
          <div style={{ color: '#d9534f', fontSize: '0.85rem', marginBottom: '8px' }}>
            {error}
          </div>
        )}

        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <button formAction={loginAction} className="btn" style={{ flex: 1, justifyContent: 'center' }} disabled={isPending}>
            {isLoginPending ? 'Wait...' : 'Sign In'}
          </button>
          <button formAction={signupAction} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }} disabled={isPending}>
            {isSignupPending ? 'Wait...' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
}
