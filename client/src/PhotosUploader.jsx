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
                            <div className='h-32 flex' key={Link}>
                                <img className='rounded-2xl w-full object-cover' src={'http://localhost:4000/uploads/'+link} alt="" />
                                 {link}
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