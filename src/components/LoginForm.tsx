import Input from '@/ui/Input';
import Link from 'next/link';
import React, {useState, useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { useRouter } from 'next/router';

function LoginForm() {
    const { login } = useContext(AuthContext);
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (login(formData.email, formData.password)) {
          router.push('/');
        } else {
          alert('Invalid credentials!');
        }
      };

  return (
    <form className='bg-black px-[40px] py-[20px] max-w-[370px] w-[370px] rounded-xl mx-auto' onSubmit={handleSubmit}>
        <h2 className='text-lg font-semibold text-center mb-4'>Login</h2>
        <div className="flex flex-col gap-[20px]">
            <Input placeholder='Email' name='email' handleChange={handleChange} />
            <Input placeholder='Enter your password' name='password' handleChange={handleChange} />
            <div className='flex items-center justify-between mt-[20px]'>
                <Link href='/register' className='text-sm text-green-600 underline'>
                    Register here
                </Link>
                <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>
                    Login
                </button>
            </div>
        </div>
    </form>
  )
}

export default LoginForm