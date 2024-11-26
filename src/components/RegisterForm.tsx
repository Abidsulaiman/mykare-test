import Input from '@/ui/Input'
import Link from 'next/link'
import React, { useState } from 'react'

function RegisterForm() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange
     = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form className='bg-black px-[40px] py-[20px] max-w-[370px] w-[370px] rounded-xl mx-auto' onSubmit={handleChange}>
        <h2 className='text-lg font-semibold text-center mb-4'>Register</h2>
        <div className="flex flex-col gap-[20px]">
            <Input placeholder='Email' name='email' handleChange={handleChange} />
            <Input placeholder='Enter your password' name='password' handleChange={handleChange} />
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