import { Link } from 'react-router-dom'
import '../../styles/albumCover.css'
import GridItem from './GridItem'

const AlbumCover = () => {
  return (
    <>
      <section>
        <div className='left'>
          <div className="albumIntro">


            <h1 className='title'>Albums list React app
            </h1>


            <h3>PHOTO MANIPULATION</h3>
            <h4>FEATURING BY <span>LOREM IPSUM</span></h4>
            <Link to="/home" > <button className="clickBtn">Click Me!!!!!</button> </Link>

          </div>
        </div>


        <div className='right'>
          <div className='grid-scroll'>
            <div className="grid-container">
              <GridItem width={Math.floor(Math.random() * 1000)} />
              <GridItem width={Math.floor(Math.random() * 1000)} />
              <GridItem width={Math.floor(Math.random() * 1000)} />
              <GridItem width={Math.floor(Math.random() * 1000)} />
              <GridItem width={Math.floor(Math.random() * 1000)} />
              <GridItem width={Math.floor(Math.random() * 1000)} />
              <GridItem width={Math.floor(Math.random() * 1000)} />
              <GridItem width={Math.floor(Math.random() * 1000)} />
              <GridItem width={Math.floor(Math.random() * 1000)} />
              <GridItem width={Math.floor(Math.random() * 1000)} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AlbumCover