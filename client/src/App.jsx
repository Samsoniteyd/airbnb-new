
import { Routes, Route } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import Register from './pages/Register';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  

  return (

    <Routes>
      <Route path='/' element={<Layout/>} >
        
      <Route index element={< IndexPage />} />
      <Route path='/login' element={< LoginPage />} />
      <Route path='/Register' element={< Register />} />
        </Route>
    </Routes>
   
   
  )
}

export default App
