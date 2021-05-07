import React from 'react'
import {IMAGES} from '../../data'
import {useParams} from "react-router-dom";
import {Image} from '../../components/Image'

export const ImageView = () => {
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];
  
    if (!image) return <div>Image not found</div>;
  
    return (
      <div>
        <h1>{image.title}</h1>
        <Image color={image.color} />
      </div>
    );
  }