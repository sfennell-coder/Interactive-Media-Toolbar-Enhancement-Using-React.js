import React from 'react';
import {useState} from 'react';

export default function(){
    const [upload, setUpload] = useState(false);
    const handleUploaded=()=>{
        setUpload(true);
        setTimeout(()=>{
            alert('Upload successful!');
            setUpload(false);
        },1500);
    };
    return(
        <>
        <button onClick={handleUploaded}>
            {upload ? 'Uploading...!': 'Uploaded'}
        </button>
        </>
    )

    
}