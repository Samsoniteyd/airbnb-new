import React, { useState } from 'react'

const BookingWidget = ({place}) => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
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


                    <button className='primary my-4'>Book this place</button>
                </div>
  )
}

export default BookingWidget