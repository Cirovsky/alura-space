const Picture = ({picture, setPicture}) => {
    if(picture == null){
        return <></>;
    }
    return(
    <div className='layer__opacity'>
        <div className="picture">
            <div className='picture__close' onClick={() => setPicture(null)} title='fechar'>X</div>
            <img src={picture.imagem} alt={picture.creditos}/>
            <h3>{picture.titulo}</h3>
            <p>{picture.creditos}</p>
        </div>
    </div>
        
    );
}

export default Picture;