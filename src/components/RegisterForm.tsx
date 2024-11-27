import Input from '@/ui/Input'
import Link from 'next/link'
import React, { useState, useContext } from 'react'
import AuthContext from '../context/AuthContext';

type RegisterData = {
    email: string;
    password: string;
    sessionToken: string;
    sessionExpiry: number;
}

function RegisterForm() {
    const { register } = useContext(AuthContext);
    const [formData, setFormData] = useState<RegisterData>({ email: '', password: '', sessionToken: '', sessionExpiry: 0 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register(formData);
      };

  return (
    <form className='bg-black px-[40px] py-[20px] max-w-[370px] w-[370px] rounded-xl mx-auto' onSubmit={handleSubmit}>
        <h2 className='text-lg font-semibold text-center mb-4'>Register</h2>
        <div className="flex flex-col gap-[20px]">
            <Input type='email' placeholder='Email' name='email' handleChange={handleChange} />
            <Input type='password' placeholder='Enter your password' name='password' handleChange={handleChange} />
            <div className='flex items-center justify-between mt-[20px]'>
                <Link href='/login' className='text-sm text-green-600 underline'>
                    Login here
                </Link>
                <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>
                    Submit
                </button>
            </div>
        </div>
    </form>
  )
}

export default RegisterForm