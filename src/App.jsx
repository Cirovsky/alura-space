import { useState } from 'react';
import Header from './components/Header'
import Banner from './components/Banner';
import Menu from './components/Menu';
import Galery from './components/Galery';
import Footer from './components/Footer';

import logo from './assets/logo.png';

import home from './assets/icones/home-ativo.png';
import maisVistas from './assets/icones/mais-vistas-inativo.png';
import maisCurtidas from './assets/icones/mais-curtidas-inativo.png';
import novas from './assets/icones/novas-inativo.png';
import surpreenda from './assets/icones/surpreenda-me-inativo.png';

import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';


import { fotos } from './data/fotos';

import './App.css';

function App() {
  const [tags, setTags] = useState(['Estrelas', 'Galáxias', 'Lua', 'Planetas'])

  const socialMedia =[
    {icon:facebook, alt: 'logomarca da rede social facebook'},
    {icon:twitter, alt: 'logomarca da rede social twitter'},
    {icon:instagram, alt: 'logomarca da rede social instagram'},
  ];
  const menuItens =[
    {icon: home, alt:'símbolo de casa', text: 'Início'},
    {icon: maisVistas,alt:'símbolo de um olho' , text: 'Mais vistas'},
    {icon: maisCurtidas,alt:'símbolo de mão com polegar levantado', text: 'Mais curtidas'},
    {icon: novas, alt:'símbolo de brilho', text: 'Novas'},
    {icon: surpreenda, alt: 'símbolo de lâmpada', text: 'Surpreenda-me'},
  ]

  return (
    <main className="container main">
      <Header logo={logo} placeholder={'O que procura?'}/>
      <Menu menuItens={menuItens} />
      <Banner text={'A galeria mais completa de fotos do espaço!'} />
      <Galery
        title={'Navegue pela galeria'}
        subtitle={'Busque por tags'}
        tags={tags}
        classGalery={'galery'}
        photos = {fotos}
      />
      <Galery
        title={'Populares'}
        classGalery={'left-galery'}
        left ={true}
        photos = {fotos}
      />
      <Footer socialMedia = {socialMedia} createBy={'Desnevolvido por Alura'}/>
    </main>
  )
}

export default App
