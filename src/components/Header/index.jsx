import './Header.css';

const Header = (props) =>{
    return(
        <header className="container header">
            <h1><img src='./src/assets/logo.png' /></h1>
            <input className='search' type='search' placeholder='O que você procura?'/>
        </header>
    )
}

export default Header;