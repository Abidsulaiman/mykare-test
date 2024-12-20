import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';
import Link from 'next/link';
import UserList from '@/components/UserList';

export default function Dashboard() {
  const router = useRouter();
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!user || (user && user.sessionToken && Date.now() >= Number(user.sessionExpiry))) {
      router.push('/login');
    }
  }, [user, router]);

  function signOut() {
    logout();
    router.push('/login');
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <nav className='bg-black text-white p-4 flex justify-between items-center'>
        <Link className='text-lg font-bold' href='/'>
          Dashboard
        </Link>

        <button onClick={signOut}>
          Logout
        </button>
      </nav>
      <main className='p-4 flex-grow'>
        <h1 className='text-2xl font-bold mb-4'>Welcome {user?.email}!!</h1>

        {user?.email === 'admin' && <UserList />}
      </main>
      <footer className='bg-black text-white p-4 text-center'>
        <p>Copyright 2024</p>
      </footer>
    </div>
  );
}