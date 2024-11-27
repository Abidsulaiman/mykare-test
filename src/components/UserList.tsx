import AuthContext from '@/context/AuthContext';
import React, { useContext } from 'react'

function UserList() {
    const { users } = useContext(AuthContext);

  return (
    <table className='w-full border-collapse border border-slate-500'>
      <thead className='bg-slate-500 text-white'>
        <tr className='text-left'>
          <th className='p-2 border border-slate-500'>Sl.No.</th>
          <th className='p-2 border border-slate-500'>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td className='p-2 border border-slate-500'>{index + 1}</td>
            <td className='p-2 border border-slate-500'>{user?.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserList