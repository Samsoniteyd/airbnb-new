
import React from 'react'

const PlacesPages = () => {

    const {action} = useParams();
    const [title,setTitle] = useState('');
  const [address,setAddress] = useState('');
  const [addedPhotos,setAddedPhotos] = useState([]);
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

async function addPhotoByLink(ev) {
    ev.preventDefault();
   const {data:filename}= await axios.post('/upload-by-link', {Link: photoLink});
   setAddedPhotos(prev => {
    return [...prev, filename];
   });
   setPhotoLink('');

}

 function uploadPhoto(ev){
    const files = ev.target.files;
    const data = new FormData();
    data.set('photos', files);
     axios.post('/upload', data, {
        headers: {'Content-type':'multipart/form-data'}
    }).then(response => {
        const {data:filename} = response;
        setAddedPhotos(prev => {
            return [...prev, filename];
           });
    })
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
                <form>
                    {preInput('Title', 'Lorem ipsum dolor sit amet.')}
                    <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder='title, my apt' />
                    {preInput('Address', 'Lorem ipsum dolor sit amet.')}
                    <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder='address' />
                    {preInput('photos', 'Lorem ipsum dolor sit amet.')}
                   
                    <div  className='flex gap-2'>
                        <input type="text"
                         value={photoLink} 
                         onChange={ev => setPhotoLink(ev.target.value)}  placeholder={'add using a link'} />
                        <button onClick={addPhotoByLink} className='bg-gray-200 px-4'>Add&nbsp; photo</button>
                    </div>
                    <div className='mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 '>
                        {addedPhotos.length > 0 && addedPhotos.map(link => (
                            <div>
                                <img className='rounded-2xl' src={'http://localhost:4000/uploads/'+link} alt="" />
                                {link}
                            </div>
                        ))} 
                    <label className='cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600'>
                    <input type="file" className='hidden' onChange={uploadPhoto} /> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                    </svg>
                    upload

                    </label>

                    </div>
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