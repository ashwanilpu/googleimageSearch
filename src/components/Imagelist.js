import React from 'react'
import ImageCard from './ImageCard';
import './imagelist.css'

function Imagelist(props) {
    const images=props.images.map( image => {
               return <ImageCard key={image.id} image={image}/>
           });
        
    return( 
    <div>
        <div className='layout'>{images}</div>
    </div>
    );
}

export default Imagelist;
