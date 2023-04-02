import './ListItem.css';

const ListItem = ({item}) =>{
    return(
        <li>
            <a className='menu__item' href='#'>
                <span className='menu__icone'><img src={item.icon} alt={item.alt}/></span>
                {item.text? item.text: null}
            </a>
        </li>
    )
}

export default ListItem;