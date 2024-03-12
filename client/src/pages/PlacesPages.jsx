
import React from 'react'
import PhotosUploader from '../PhotosUploader';

const PlacesPages = () => {

    const {action} = useParams();
    const [title,setTitle] = useState('');
  const [address,setAddress] = useState('');
  const [description,setDescription] = useState('');
  const [perks,setPerks] = useState([]);
  const [extraInfo,setExtraInfo] = useState('');
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [maxGuests,setMaxGuests] = useState(1);
//   const [price,setPrice] = useState(100);
//   const [redirect,setRedirect] = useState(false);

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

function addNewPlace(ev) {
    ev.preventDefault();
    const data = {};
    axios.post('/places', data)

}

  
  return (
    <div>
        {action !== 'new' && (

        <div className="text-center">
            <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full " to= {'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
             </svg>

                Add new place
            
            </Link>
        </div>
        )}

        {action === 'new' && (
            <div>
                <form onSubmit={addNewPlace}>
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
                   
                    <div className='grid gap-2 sm:grid-cols-3'>
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
                    </div>
                    <div>
                        <button className='primary my-4'>save</button>
                    </div>
                </form> 
            </div>
        )}
        my places
    </div>
  )
}

export default PlacesPages