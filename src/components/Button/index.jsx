import './Button.css';

const Button = ({children, tagSelected, setTagSelected, leftGalery = false, setSeeAll}) =>{

    if(leftGalery){
        return (<button 
            className={'button button__see-all'} 
            onClick={() => setSeeAll()}>
                {children}
        </button>)
    }

    return(
        <button 
            className={`button ${tagSelected === children? 'tag-selected': '' }`} 
            onClick={() => setTagSelected(children)}>
                {children}
        </button>
    )
}

export default Button;