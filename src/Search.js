import React, {useState} from 'react'
import axios from "axios";
import { FiHeart } from 'react-icons/fi';
import UserPro from './UserPro';
import './search.css';

 const Search = () => {
    //state
    const [searchWord,setSearchWord] = useState();
    const path = (process.env.REACT_APP_UNSPLASH_KEY);
    const [allImages,setAllImages] = useState([]);
    const [user,setUser] = useState([]);
    //function
    const ChooseUser = (user) =>{
        const url="https://api.unsplash.com/users/"+user.user.username+"?client_id="+path;
        axios.get(url).then((userData) => {
           // console.log(userData);
            setUser(userData.data)
            
            
        })
        
    }
    const handelChange = (event) => {
        
        setSearchWord(event.target.value);
        //console.log(searchWord);
    }
    const searchImages = () => { //ทำตาใรูปแบบของเขา
        const url="https://api.unsplash.com/search/photos?page=1&query="+searchWord+"&per_page=20&client_id="+path;
        //axios เรียก api then เรียกแล้วยังไงต่อ
        axios.get(url).then((dataImage) => {
            //console.log(dataImage);
            setAllImages(dataImage.data.results);
            
            
        })
    }

    return (
        <>
        {Object.keys(user).length === 0 ?
         <div><center><h1>Search Image </h1></center><br/>
            <div className="input-group">
                
            <input type="text" onChange={handelChange} name="inputSearch" className="Search"/>
          <input type="submit" onClick={searchImages} className="subMit"/>
            
            </div>

            <div className="layoutImage">
                {allImages.map((info) => (
                    
                    <div className="boxImage" onClick={()=>{ChooseUser(info)}} key={info.id}>
                        <div class="container2">
            <img src={info.urls.small} className="image" alt=""/>
            <div class="overlay">
                 <div class="text"><FiHeart />{info.likes} </div>
            </div>
            </div>
                        <div className="boxInfo">
                            <div className="nameUser">
                                <img src={info.user.profile_image.medium} />
                                <p> {info.user.username} </p>
                            </div>
        
                        </div>
                    </div>
                ))}
            </div>
        </div>
 :<UserPro token={path} User={user} />}
        </>
    )
}

export default Search;