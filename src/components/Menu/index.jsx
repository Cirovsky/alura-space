import './Menu.css';

const Menu = (props) => {
    return (
        <nav className='menu'>
            <ul>
                <li><a href='#'><span><img src='./src/assets/icones/home-ativo.png' alt="ícone casa" /></span>Início</a></li>
                <li><a href='#'><span><img src='./src/assets/icones/mais-vistas-inativo.png' alt="ícone olho aberto" /></span>Mais vistas</a></li>
                <li><a href='#'><span><img src='./src/assets/icones/mais-curtidas-inativo.png' alt="ícone de dedo polegar levantado" /></span>Mais curtidas</a></li>
                <li><a href='#'><span><img src='./src/assets/icones/novas-inativo.png' alt="ícone brilho" /></span>Novas</a></li>
                <li><a href='#'><span><img src='./src/assets/icones/surpreenda-me-inativo.png' alt="ícone lâmpada" /></span>Surpreenda-me</a></li>
            </ul>
        </nav>
    )
}

export default Menu;