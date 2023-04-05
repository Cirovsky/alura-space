import ListItem from 'components/ListItem';

const Footer = ({socialMedia, createBy, className}) =>{

    const navSocialMedia = socialMedia.map(sm=> <ListItem key={sm.alt} item ={sm} className={className}/>)

    return(
        <footer className="footer">
            <ul>
                {navSocialMedia}
            </ul>
            <h3><a href='https://github.com/Cirovsky/alura-space'>{createBy}</a></h3>
        </footer>
    )
}

export default Footer;