const ListItem = ({ item, className, menuSelected, setMenuSelected }) => {

    const icon = item.icon;

    if (menuSelected) {
        return (
            <li onClick={()=> setMenuSelected(item.text)}>
                <div className={`${className} ${menuSelected === item.text? 'menu__item-selected': ''}`}>
                    <span className={`${className}-icon`} alt={item.alt}>{icon}</span>
                    {item.text ? item.text : null}
                </div>
            </li>
        )
    }

    return (
        <li>
            <a className={className} href='#'>
                <span className={`${className}-icon`} alt={item.alt}>{icon}</span>
                {item.text ? item.text : null}
            </a>
        </li>
    )
}

export default ListItem;