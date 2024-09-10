import React, { useState } from 'react';
import './TeacherEdit.css'
import { IoCameraOutline } from "react-icons/io5";
import values from '../../../assets/WOMAN_WRITING.png'

const ImageUploader = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({}); 

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    if (file && file.type.startsWith('image/')) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setErrors({ Image: { message: 'Please select a valid image file.' } });
    }
  };

  return (
    <div className="imgHolder">
      <div className="imgBox">
        {imagePreview ? <img src={imagePreview} alt="Preview" /> : <p>No image selected yet</p>}
      </div>
      
      {errors.Image && <span style={{color: 'red'}}>{errors.Image.message}</span>}

      <div className="icon">
        <label htmlFor="file">
          <IoCameraOutline style={{ cursor: 'pointer', fontSize: '24px', color: 'white' }} />
        </label>
        <input 
          type="file" 
          id='file' 
          hidden 
          onChange={handleImageChange} 
        />
      </div>
    </div>
  );
};

export default ImageUploader;
