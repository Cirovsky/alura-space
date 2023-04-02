import './Button.css';

const Button = ({children, tagSelected, setTagSelected}) =>{
    return(
        <button className={`button ${tagSelected === children? 'tag-selected': '' }`} onClick={() => setTagSelected(children)}>
            {children}
        </button>
    )
}

export default Button;