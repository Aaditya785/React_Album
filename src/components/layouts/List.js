import { Toaster } from "react-hot-toast"
import { Link } from "react-router-dom"

const List = (props) => {
    return (
        <div className='list' style={{backgroundImage: `url(https://picsum.photos/800/${props.width})`, backgroundSize: "cover", backgroundPosition: "center"}}>
          <h3>{props.album.title}</h3>
          <div className='button-group'>
            <Link to="/update-album"><button className="update-btn" onClick={() => props.setUpdateAlbum(props.album)}>Update</button></Link>
            <button className='delete-btn' onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</button>
          </div>
          <Toaster/>
        </div>
      )
}

export default List