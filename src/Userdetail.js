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
            <div>
            
        <div className="gallery-item-info">
            <div class="container2">
            <img src={photo.urls.small} className="image" alt=""/>
            <div class="overlay">
                 <div class="text"><FiHeart />{photo.likes}</div>
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
