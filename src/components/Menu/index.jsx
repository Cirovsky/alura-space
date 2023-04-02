import ListItem from '../ListItem';

import './Menu.css';

const Menu = ({menuItens}) => {
    const listaMenu = menuItens.map(item => <ListItem key={item.text} item={item}/> )
    return (
        <nav className='menu'>
            <ul>
                {listaMenu}
            </ul>
        </nav>
    )
}

export default Menu;