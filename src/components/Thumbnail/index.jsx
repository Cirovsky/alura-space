import {MdFavorite, MdFavoriteBorder, MdOpenInFull} from 'react-icons/md';
import { useState } from 'react';

const Thumbnail = ({ photo, left, setPicture}) => {
    
    if (left) {
        return (
            <li>
                <div className='thumb-left'><img src={photo.imagem} alt={photo.creditos} /></div>
            </li>
        );
    }
    
    const [favorite,setFavorite] = useState(false);

    const fav = favorite ? 
        <MdFavorite className='fav fav-true' />:
        <MdFavoriteBorder className='fav fav-false'/>

    return (
        <li className='thumb'>
            <div className='thumb__img'><img src={photo.imagem} alt={photo.titulo} /></div>
            <div className='thumb__label'>
                <h3>{photo.titulo}</h3>
                <p>{photo.creditos}</p>
                <div className='thumb__label-icons'>
                    <span onClick={()=> setFavorite(!favorite)}>{fav}</span>
                    <span onClick={()=> setPicture(photo)}><MdOpenInFull className='open'/></span>
                </div>
            </div>
        </li>
    )
}

export default Thumbnail;