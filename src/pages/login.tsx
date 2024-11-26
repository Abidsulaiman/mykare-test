import LoginForm from '@/components/LoginForm'
import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

function login() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.sessionToken && Date.now() < Number(user.sessionExpiry)) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <LoginForm />
    </div>
  )
}

export default login

