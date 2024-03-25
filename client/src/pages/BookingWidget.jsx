import React, { useEffect, useState } from 'react';
import {differenceInCalendarDays} from 'date-fns';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';





const BookingWidget = ({place}) => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [name, setName] = useState('');
    const [phone, setphone] = useState('');
    const [redirect, setRedirect] = useState('');
   const{user} = useContext(UserContext);

   useEffect(() => {
    if (user) {
        setName(user.name);
    }
   }, [user]);


    let numberOfNights=0;
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkIn), new Date (checkOut))
    }

    async function bookThisPlace() {
        
      const response= await axios.post('/bookings', { checkIn,checkOut,numberOfGuests,name,phone,
        place:place._id,
        price:numberOfNights * place.price,
        });
        const bookingId = response.data._id;
        setRedirect('/account/bookings/${bookingId}')
    }
    if (redirect){
        return <Navigate to={redirect}/>
    }





 
    
  return (
    <div className='bg-white shadow p-4 rounded-2xl'>
                    <div className='text-2xl text-center'>

                    Price: ${place.price}/ per night
                    </div>
                    <div className='border rounded-2xl'>
                        <div className='flex'>

                    <div className=' py-4 px-4'>
                        <label htmlFor="">Checkin</label>
                        <input type="date" value={checkIn} onChange={ev => setCheckIn(ev.target.value)} />
                    </div>
                    <div className=' py-4 px-4 border-t'> 
                        <label htmlFor="">CheckOut</label>
                        <input type="date" value={checkOut} onChange={ev => setCheckOut(ev.target.value)} />
                    </div>
                    </div>
                    <div className=' py-4 px-4 border-t'> 
                        <label htmlFor="">Number of guest</label>
                        <input type="number" value={numberOfGuests} onChange={ev => setNumberOfGuests(ev.target.value)}/>
                    </div>
                        </div>
                        {numberOfNights > 0 && (
                             <div className=' py-4 px-4 border-t'> 
                             <label htmlFor="">your full name</label>
                             <input type="text" value={name} onChange={ev => setName(ev.target.value)}/>
                             <label htmlFor="">your phone number</label>
                             <input type="tel" value={phone} onChange={ev => setphone(ev.target.value)}/>
                         </div>
                        )}


                    <button className='primary my-4'>
                         Book this place
                         { numberOfNights > 0 && (
                            <span> ${numberOfNights * place.price} </span>

                         )}
                        </button>
                </div>
  )
}

export default BookingWidget