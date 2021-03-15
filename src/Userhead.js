import React from 'react'

import './userhead.css';


 const Userhead = ({user}) => {
    
   
    return (

        <div>
        <div className="z-depth-5 main">
        <div className="row">
            <div className="col-sm-6 picture">
                <center><img className="circle responsive-img" src={user.profile_image.large} /></center>
            </div>
            <div className="col-sm-6 details">
                <center>
                    <p className="name"><b>{user.first_name+" "+user.last_name}</b> </p>
                </center>
                <center>
                    <p>{user.location}</p>
                </center>
                <center>
                    <p>{user.portfolio_url}</p>
                </center>
            </div>
        </div>
        <table className="table">
            <tr>
                <td>
                    <p><b>{user.total_photos}</b></p>
                    <p>Posts</p>
                </td>
                <td>
                    <p><b>{user.followers_count}</b></p>
                    <p>Followers</p>
                </td>
                <td>
                    <p><b>{user.following_count}</b></p>
                    <p>Following</p>
                </td>
            </tr>
        </table>
    </div> 

    
    </div>
     
           
 )
}
export default Userhead;