import ListItem from '../ListItem';
import './Footer.css';

const Footer = ({socialMedia, createBy, className}) =>{

    const navSocialMedia = socialMedia.map(sm=> <ListItem key={sm.alt} item ={sm} className={className}/>)

    return(
        <footer className="footer">
            <ul>
                {navSocialMedia}
            </ul>
            <h3>{createBy}</h3>
        </footer>
    )
}

export default Footer;