import './Header.css';

const Header = ({logo, placeholder, icon}) =>{
    return(
        <header className="container header">
            <h1><img src={logo} alt='logomarca da ALura'/></h1>
            <input className='search' type='search' placeholder={placeholder}/>
        </header>
    )
}

export default Header;