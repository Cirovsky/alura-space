import './Thumbnail.css';
import {MdFavorite, MdFavoriteBorder, MdOpenInFull} from 'react-icons/md';
import { useState } from 'react';

const Thumbnail = ({ photo, left}) => {

    const [favorite,setFavorite] = useState(false);

    if (left) {
        return (
            <li>
                <div className='thumb-left'><img src={photo.url} alt={photo.alt} /></div>
            </li>
        );
    }

    const fav = favorite ? <MdFavorite className='thumb-fav fav-true' /> : <MdFavoriteBorder className='thumb-fav fav-false'/>

    return (
        <li className='container__thumb'>
            <div className='thumb'><img src={photo.url} alt={photo.alt} /></div>
            <div className='thumb__label'>
                <h3>{photo.nome}</h3>
                <p>{photo.fonte}</p>
                <div className='thumb__label-icons'>
                    <span onClick={()=> setFavorite(!favorite)}>{fav}</span>
                    <span><MdOpenInFull className='thumb-open'/></span>
                </div>
            </div>
        </li>
    )
}

export default Thumbnail;