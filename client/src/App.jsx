
import { Routes, Route } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import Register from './pages/Register';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import { useEffect } from 'react';
import ProfilePage from './pages/ProfilePage.jsx';
import PlacesPages from './pages/PlacesPages';
import PlacesFormPage from './pages/PlacesFormPage';
import BookingsPage from './pages/BookingsPage';
import BookingPage from './pages/BookingPage';


axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
 

  return (
    <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout/>} >
            
          <Route index element={< IndexPage />} />
          <Route path='/login' element={< LoginPage />} />
          <Route path='/Register' element={< Register/>} />
          <Route path='/account' element={< ProfilePage />} />
          <Route path='/account/places' element={< PlacesPages/>} />
          <Route path='/account/places/new' element={< PlacesFormPage/>} />
          <Route path='/account/places/:id'  element={< PlacesFormPage/>} />
          <Route path='/place/:id'  element={< PlacePage/>} />
          <Route path='/account/bookings'  element={<BookingsPage/>} />
          <Route path='/account/bookings/:id'  element={< BookingPage/>} />
          
          </Route>
        </Routes>  
   
    </UserContextProvider>
   
  )
}

export default App
