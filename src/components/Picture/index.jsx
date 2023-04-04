const Picture = ({picture, setPicture}) => {
    if(picture == null){
        return <></>;
    }
    return(
    <div className='layer__opacity'>
        <div className="picture">
            <div className='picture__close' onClick={() => setPicture(null)} title='fechar'>X</div>
            <img src={picture.url} alt={picture.alt}/>
            <h3>{picture.nome}</h3>
            <p>{picture.fonte}</p>
        </div>
    </div>
        
    );
}

export default Picture;