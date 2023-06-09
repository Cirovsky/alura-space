import Button from 'components/Button';
import Thumbnail from 'components/Thumbnail';

const Galery = ({
    title,
    subtitle,
    classGalery,
    tags,
    photos,
    left,
    tagSelected,
    setTagSelected,
    seeAll,
    setSeeAll,
    setPicture,
}) => {

    const createSubtitle = () => {
        if (subtitle) {
            const buttonsTags = tags.map(tag => {
                return (<li key={tag}>
                    <Button
                        key={tag}
                        tagSelected={tagSelected}
                        setTagSelected={setTagSelected}>
                        {tag}
                    </Button></li>)
            });
            return (<div className='container galery__subtitle'><h3>{subtitle}:</h3>
                <ul className='tags'>
                    {buttonsTags}
                </ul>
            </div>)
        } else {
            return <></>;
        }
    }


    const createGalery = () => {
        if (photos) {
            const galery = photos.map(photo => <Thumbnail 
                left={left} 
                key={photo.id} 
                photo={photo} 
                setPicture={setPicture} />)

            return galery;
        } else {
            return <></>;
        }
    }

    const divSubtitle = createSubtitle();
    const galery = createGalery();
    const buttonSeeAll = left ?
        <Button
            className={'button__see-all'}
            leftGalery={true}
            setSeeAll={setSeeAll}>{`${seeAll ? 'Ver menos' : 'Ver mais'}`}</Button> :
        <></>

    return (
        <section className={classGalery}>
            <h2>{title}</h2>
            {divSubtitle}
            <ul className={` ${left ? 'left-galery__thumbnails' : 'galery__thumbnails'}`}>
                {galery}
                {buttonSeeAll}
            </ul>
        </section>
    );
}

export default Galery;