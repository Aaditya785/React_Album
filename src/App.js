import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddAlbum from "./components/AddAlbum";

import CoverPage from './components/CoverPage';
import Home from './components/Home';
import UpdateAlbum from "./components/UpdateAlbum";



const App = () => {

  const [updateAlbum, setupdateAlbum] = useState({});
  const [albums, setAlbums] = useState([]);


  // this function call first time when app render
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data =>  setAlbums(data))
    .catch(error => console.log("Not able to get ----",error));
  }, [setAlbums])



  //delete album function-----------------------------------------------------------------------------------
  //this function take album id from albums list and then delete the album from albums list and update state
  function deleteAlbumFromList(id) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE', })
    const newAlbums = albums.filter((album) => album.id !== id);
    // alert("Your Album Deleted successfully");
    toast.success("Deleted Successfully!...")
    setAlbums(newAlbums)
  }
  //---------------------------------------------------------------------------------------------------------


  //update album functions------------------------------------------------------------------------------------
  //this function take album object from albums list and set state for update album
  async function newOriginAlbum(album) {

    setupdateAlbum(album)
  }
  //this function take album id, updateTitle, updateUserid, oldAlbum and then update and set state 
  async function updateAlbumInList(id, updateTitle, updateUserid, oldAlbum) {
    const albumsArr = albums;
    const index = albumsArr.indexOf(oldAlbum);
    let updatedAlbum = [];
    if (id < 100) {
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          userId: updateUserid,
          id: id,
          title: updateTitle,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json()).then((json) => json);
    } else {
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle
      }
    }
    albumsArr[index] = updatedAlbum;

    setAlbums(albumsArr)
    toast.success("Update Successfully done...")
  }
  //--------------------------------------------------------------------------------------------------------

  //add album function--------------------------------------------------------------------------------------
  //this function take userid and title from input and then added to the bottom of the albums list
  function addAlbumToList(userId, title) {
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: userId+1,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((json) => json);
    const length = albums.length;
    const lastId = albums[length - 1].id;
    const album = {
      userId: userId,
      id: lastId + 1,
      title: title,
    }

    setAlbums([...albums, album])
    toast.success("New Album added successfully in the bottom");
  }
  //--------------------------------------------------------------------------------------------------------

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path='/home' element={<Home albums={albums} newOriginAlbum={newOriginAlbum} deleteAlbumFromList={deleteAlbumFromList} />}/>
        <Route path='/add-album' element={<AddAlbum addAlbumToList={addAlbumToList} />}/>
        <Route path='/update-album' element={<UpdateAlbum album={updateAlbum} updateAlbumInList={updateAlbumInList} />}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>

  )
}
export default App;
