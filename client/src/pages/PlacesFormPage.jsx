import React, { useEffect } from 'react'
import PhotosUploader from '../PhotosUploader';
import Perks from '../perks';
import { useState } from 'react';
import AccountNav from './AccountNav';
import { Navigate, useParams } from 'react-router-dom';


const PlacesFormPage = () => {
    
   const{id} = useParams();
    const [title,setTitle] = useState('');
  const [address,setAddress] = useState('');
  const [description,setDescription] = useState('');
  const [perks,setPerks] = useState([]);
  const [extraInfo,setExtraInfo] = useState('');
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [maxGuests,setMaxGuests] = useState(1);
  const [price,setPrice] = useState(100);
const [redirect, setRedirect] = useState(false);
useEffect(() => {
    if (!id) {
        return;

    }
    axios.get('/places/'+id).then(response => {
        const {data} = response;
        setTitle(data.title);
        setAddress(data.address);
        setAddedPhotos(data.photos);
        setDescription(data.description);
        setPerks(data.perks);
        setExtraInfo(data.extraInfo);
        setCheckIn(data.checkIn);
        setCheckOut(data.checkOut);
        setMaxGuests(data.maxGuests);



    });
}, [id]);
 
function inputHeader(text) {
    return (
        <h2 className='text-2xl mt-4'>{text}</h2>

    );
}

function inputDescription(text) {
    return (
        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet.</p>

    );
}

function preInput(header, description) {
    return (
        <div>
            {inputHeader(header)}
            {inputDescription(description)}
        </div>

    );
}

async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
        title, address, addedPhotos, 
        description, perks, extraInfo, 
        checkIn, checkOut, maxGuests, price
     };
    if (id) {
        //update
        await axios.put('/places', {
        id,
        ...placeData
       });
       setRedirect(true);
      
      
    } else {
        //new place

        await axios.post('/places', placeData);
       setRedirect(true);
      
      }
    }

if (redirect) {
    return <Navigate to={'/account/places'}/>
}

  return (
    <div>
        <AccountNav/>
    <form onSubmit={savePlace}>
        {preInput('Title', 'Lorem ipsum dolor sit amet.')}
        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder='title, my apt' />
        {preInput('Address', 'Lorem ipsum dolor sit amet.')}
        <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder='address' />
        {preInput('photos', 'Lorem ipsum dolor sit amet.')}
       
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
        {preInput('description', 'description of it the place')}
         <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
         {preInput('Perks', 'select all the perks')}
    
        <div className='grid  gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 '>
           <Perks selected={perks} onChange={setPerks}/> 
           
        </div>
        {preInput('Extra info', 'house rules, etc')}
        
        <textarea  value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)}/>
        {preInput('check in & out, max guests', 'add check in and out')}
       
        <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-4'>
            <div> 
                <h3 className='mt-2 -mb-1'>check in time</h3>
                <input type="text" placeholder='14'  value={checkIn} onChange={ev => setCheckIn(ev.target.value)} />
            </div>
            <div>
            <h3 className='mt-2 -mb-1'>check out time</h3>
                <input type="text" placeholder='11' value={checkOut} onChange={ev => setCheckOut(ev.target.value)} />
            </div>
            <div>
            <h3 className='mt-2 -mb-1'>max number of guests</h3>
                <input type="number" value={maxGuests} onChange={ev => setMaxGuests(ev.target.value)} />
            </div>  
            <div>
            <h3 className='mt-2 -mb-1'>price by night</h3>
                <input type="number" value={price} onChange={ev => setPrice(ev.target.value)} />
            </div>  
        </div>
        <div>
            <button className='primary my-4'>save</button>
        </div>
    </form> 
</div>
  )
}

export default PlacesFormPage