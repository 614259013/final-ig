import React, {useState,useEffect} from 'react'
import axios from "axios";
import Userhead from './Userhead';
import Userdetail from './Userdetail';

 const UserPro = ({User,token}) => {
    //state
    const [imageList, setImageList] = useState([]);  
    //function
    useEffect(initialValue,[]);
    function initialValue(){
        //console.log(User);
        const url="https://api.unsplash.com/users/"+User.username+"/photos?client_id="+token ;
        axios.get(url).then((ImageList) => {
           // console.log(ImageList);
            setImageList(ImageList.data);
        })
    }
    
    
    

    return (
        <>
        <Userhead  user={User} />
        <Userdetail photos={imageList}/>
        </>
    )
}

export default UserPro;