import ListItem from 'components/ListItem';

const Menu = ({menuItens, className, setMenuSelected, menuSelected}) => {
    const listaMenu = menuItens.map(item => {
        return (<ListItem 
            key={item.text} 
            item={item} 
            className={className} 
            menuSelected={menuSelected}
            setMenuSelected={setMenuSelected}
            />) 
    })
    return (
        <nav className='menu'>
            <ul>
                {listaMenu}
            </ul>
        </nav>
    )
}

export default Menu;