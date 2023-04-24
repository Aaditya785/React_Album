import List from "./layouts/List";
import Navbar from "./layouts/Navbar";

const Home = (props) => {
  return (
    <>
      {/* Navbar */}
      <Navbar page="Add Album" path="/add-album" />

      <div className='albums-list'>
        {props.albums.map((album) => <List width={Math.floor(Math.random() * 1000)} album={album} key={album.id} setUpdateAlbum={props.newOriginAlbum} deleteAlbumFromList={props.deleteAlbumFromList} />)}
      </div>
      
    </>
  )
}

export default Home;