
import { Routes, Route } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import Register from './pages/Register';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import { useEffect } from 'react';


axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
 

  return (
    <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout/>} >
            
          <Route index element={< Ind exPage />} />
          <Route path='/login' element={< LoginPage />} />
          <Route path='/Register' element={< Register />} />
          <Route path='/account/:subpage?' element={< AccountPage />} />
          
          </Route>
        </Routes>  
   
    </UserContextProvider>
   
  )
}

export default App
