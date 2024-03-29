import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);
  async function handleLoginSubmit (ev) {
    ev.preventDefault();
    try {

     const {data} = await axios.post('/login', {email,password});
     setUser(data);
      alert('login successsful');
      setRedirect(true);
    } catch(e) {
      alert('login failed')
    }

  }


  if (redirect) {
    return <Navigate to={'/'} />
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