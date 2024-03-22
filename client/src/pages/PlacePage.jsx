import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import axios from 'axios';
import BookingWidget from './BookingWidget';

const PlacePage = () => {
    const {id} = useParams();
    const [place, setPlace] = useState(null);
    const [showAllPhotos, setShowAllPhotos] = useState(false)
    useEffect(()=> {
        if (!id) {
            return;
        }
        axios.get('/places/${id}').then(response => {
            setPlace(response.data);

        } );
    }, [id]);
    if (!place) return '';

    if (showAllPhotos) {
        return (
            <div className='absolute inset-0 bg-black text-white min-h-screen'>
                <div className='p-8 bg-black grid gap-4'>
                    <div>
                        <h2 className='text-3xl'>photos of {place.title}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className='flex right-12 top-8 gap-1 py-2 px-4 rounded-2xl shadow shadow-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>

                {place?.photos?.length > 0 && place.photos.map(photo => (
                    <div>
                        <img src={'http://localhost:4000/uploads/' +photo} alt="" />
                    </div>
                ))}
                </div>
            </div>
        )
    }
  return (
    <div className='mt-8 bg-gray-100 -mx-8 px-8'>
        <h1 className='text-2xl'>{place.title}</h1>
        <a  className='flex gap-1   my-3 block font-semibold underline' target='_blank' href={'https://maps.google.com/?='+place.address}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
  
        {place.address}
        </a>
        <div className='relative'>

        <div className='grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden'>
            <div>
                {place.photos?.[0] && (
                    <img onclick={() => setShowAllPhotos(true)} className='aspect-square object-cover ' src={"http://localhost:4000/uploads/"+place.photos[0]} alt="" />
                )}

            </div>
            <div className='grid '>
                {place.photos?.[1] && (
                    <img onclick={() => setShowAllPhotos(true)} className='aspect-square object-cover ' src={"http://localhost:4000/uploads/"+place.photos[1]} alt="" />
                )}

            </div>
            <div className='overflow-hidden'>
                {place.photos?.[2] && (
                    <img onclick={() => setShowAllPhotos(true)} className='aspect-square object-cover relative' src={"http://localhost:4000/uploads/"+place.photos[2]} alt="" />
                )}

            </div>

            

        </div>
        <button onClick={() => setShowAllPhotos(true)} className=' flex gap-1 absolute bottom-2 right-2 py-2 px-2 bg-white shadow-md shadow-grey-500'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>

            more photos
        </button>
        </div>
      
         <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr]'>
         <div className='my-4'>
            <h2 className='font-semibold text-2xl'>Description</h2>
             {place.description}
         </div> 
            <div>
                Check-in: {place.checkIn} <br />
                Check-out: {place.checkOut} <br />
                Max number of guests: {place.maxGuests}
            </div>
            <div>
                <BookingWidget place = {place} />
            </div>
         </div>
         <div className="bg-white -mx-8 px-8 pt-8 border-t">

         <h2 className='font-semibold text-2xl'>Extra info</h2>
         <div>
         </div>
         <div className='mb-4 mt-1 text-sm text-gray-700 leading-4'>{place.extraInfo}</div>
         </div>

    </div>
  )
}

export default PlacePage