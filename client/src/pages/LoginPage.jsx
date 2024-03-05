import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleLoginSubmit (ev) {
    ev.preventDefault();
    try {

      await axios.post('/login', {email,password});
      alert('login successsful')
    } catch(e) {
      alert('login failed')
    }

  }
  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form action="" className='max-w-md mx-auto' onSubmit={handleLoginSubmit}>
            <input type="email"
             value={email}
              onChange={ev => setEmail(ev.target.value)} 
              placeholder='your@email.com' />
            <input type="password" 
            value={password}
             onChange={ev => setPassword(ev.target.value)} 
             placeholder='password' />
            <button className='primary'>login</button>
            <div className='text-center py-2 text-gray-500'>
            dont have accout yet?  <Link className='underline text-black' to={'/register'} >Register now</Link> 
            </div>
        </form>

        </div>

    </div>
  )
}

export default LoginPage