import React from 'react'

function Input(
  {handleChange, name, type, placeholder} : 
  {handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, name: string, type: string, placeholder: string}
) {
  return (
    <div className='flex flex-col gap-[5px]'>
        <label htmlFor={name} className="text-sm font-medium mb-2 capitalize">{name}</label>
        <input type={type} name={name} placeholder={placeholder} onChange={handleChange} className='bg-none text-sm px-[10px] py-[6px] rounded focus:outline-none text-black' autoComplete='false'  />
    </div>
  )
}

export default Input