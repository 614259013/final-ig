import React from 'react'
import { FiHeart } from 'react-icons/fi';
import './userdetail.css';
const Userdetail = ({photos}) => {
    
        
        
    
    return (
        
        <div>
            <div className="container3">

        <div className="gallery">

            <div className="gallery-item" tabindex="0">
                {photos.map((photo)=>(
            <div key={photo.id}>
            
        <div className="gallery-item-info">
            <div className="container2">
            <img src={photo.urls.small} className="image" alt=""/>
            <div className="overlay">
                 <div className="text"><FiHeart />{photo.likes}</div>
            </div>
            </div>
            <ul>
            <li className="gallery-item-comments"><span className="visually-hidden"></span>{photo.alt_description}</li>
            
                
            </ul>

     </div>
</div>
     ))}       
    </div>
    </div>
    </div>
        </div>
    )
}

export default Userdetail;
