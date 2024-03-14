import React, { useState } from 'react'


const PhotosUploader = ({addedPhotos, onChange}) => {
    const [photoLink, setPhotoLink] = useState('');
// const [addedPhotos,setAddedPhotos] = useState([]);

    async function addPhotoByLink(ev) {
        ev.preventDefault();
       const {data:filename}= await axios.post('/upload-by-link', {Link: photoLink});
       onChange(prev => {
        return [...prev, filename];
       });
       setPhotoLink('');
    
    }
    
     function uploadPhoto(ev){
        const files = ev.target.files;
        const data = new FormData();
        for (let i= 0; i< files.length; i++){
    
            data.append('photos', file[i]);
        }
         axios.post('/upload', data, {
            headers: {'Content-type':'multipart/form-data'}
        }).then(response => {
            const {data:filenames} = response;
            setAddedPhotos(prev => {
                return [...prev, ...filenames];
               });
        })
    }
    function removePhoto(ev, filename) {
        ev.preventDefault();
        onChange([...addedPhotos.filter(photo => photo !==filename)]);

    }
    function selectAsMainPhoto(ev, filename){
        ev.preventDefault();
        onChange([filename, ...addedPhotos.filter(photo => photo !==filename)]);
    }
  return (
    <>
    <div  className='flex gap-2'>
                        <input type="text"
                         value={photoLink} 
                         onChange={ev => setPhotoLink(ev.target.value)}  placeholder={'add using a link'} />
                        <button onClick={addPhotoByLink} className='bg-gray-200 px-4'>Add&nbsp; photo</button>
                    </div>
                    <div className='mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 '>
                        {addedPhotos.length > 0 && addedPhotos.map(link => (
                            <div className='h-32 flex relative' key={Link}>
                                <img className='rounded-2xl w-full object-cover' src={'http://localhost:4000/uploads/'+link} alt="" />
                                 {link}
                                 <button  onClick={ev => removePhoto(ev, link)} className=' cursor-pointer absolute bottom-2 right-2 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-2'>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                     <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                 </button>
                                 <button  onClick={ev => selectAsMainPhoto(ev, link)} className=' cursor-pointer absolute bottom-2 left-2 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-2'>
                                    {Link === addedPhotos[0] && (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                      </svg>
                                      
                                    ) }
                                    {Link !== addedPhotos[0] && (

                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                     <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    )}

                                 </button>
                            </div>
                        ))} 
                    <label className='h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600'>
                    <input type="file" multiple className='hidden' onChange={uploadPhoto} /> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                    </svg>
                    upload

                    </label>

                    </div>
    </>
  )
}

export default PhotosUploader