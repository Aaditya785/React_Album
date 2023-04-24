import { Link,   } from "react-router-dom"

const Navbar = (props) => {


    return (
        <div className='navbar'>
            <Link to="/" > <button style={{color: "red"}} >❌</button> </Link>
            
            <Link to={props.path}><button>{props.page}</button></Link>
        </div>
    )
}

export default Navbar