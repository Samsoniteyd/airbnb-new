import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form action="" className='max-w-md mx-auto'>
            <input type="text" placeholder='john wick' value={name} onChange={ev => setName(ev.target.value)} />
            <input type="email" placeholder='your@email.com' />
            <input type="password"  placeholder='password' />
            <button className='primary'>login</button>
            <div className='text-center py-2 text-gray-500'>
            already a member?  <Link className='underline text-black' to={'/login'} >Login</Link> 
            </div>
        </form>

        </div>

    </div>
  )
}

export default Register