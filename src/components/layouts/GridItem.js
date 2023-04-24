import React from 'react'

const GridItem = ({ width }) => {


    return (
        <div style={{boxShadow: "0px 0px 10px 0px" ,backgroundImage: `url(https://picsum.photos/800/${width})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px" }}> </div>
    )
}

export default GridItem