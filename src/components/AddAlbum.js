import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './layouts/Navbar';

const AddAlbum = (props) => {

  const navigate = useNavigate();

    //this function get all the input like userid and title then call add albumm function for add it on the album list
    function getAlbumFormData  ()  {
      const userId = document.getElementById('aaform-userid-inp').value;
      const title = document.getElementById('aaform-title-inp').value;
      props.addAlbumToList(Number(userId), title)
      navigate("/home");
    }
  
    return (
      <>
        {/* navber */}
        <Navbar path="/home" page="Home" />
  
  
        <div className='addalbum-container'>
          <div className='addalbum-form'>
            <h4 style={{textAlign:"center"}} >Enter New Album Details</h4>
            <div className='inp-container'>
              Enter User Id :
              <input id='aaform-userid-inp' type="number" />
            </div>
            <div className='inp-container'>
              Enter Album Title :
              <input id='aaform-title-inp' type="text" />
            </div>
            <div>
              <Link to="/"><button onClick={getAlbumFormData}>Add To List</button></Link>
            </div>
          </div>
        </div>
      </>
    )
  }

export default AddAlbum