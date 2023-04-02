import { useState } from 'react';
import Header from './components/Header'
import Banner from './components/Banner';
import Menu from './components/Menu';
import Galery from './components/Galery';
import Footer from './components/Footer';

import logo from './assets/logo.png';

import {MdFacebook as Facebook} from 'react-icons/md';
import {BsTwitter as Twitter} from 'react-icons/bs';
import {BsInstagram as Instagram} from 'react-icons/bs';

import  {CgHome as Home} from 'react-icons/cg';
import {AiOutlineEye as MaisVistas} from 'react-icons/ai';
import {BiLike as MaisCurtidas} from 'react-icons/bi';
import {TfiShine as Novas} from 'react-icons/tfi';
import {HiOutlineLightBulb as Surpreenda} from 'react-icons/hi';
import { fotos } from './data/fotos';

import './App.css';

function App() {
  const [tags, setTags] = useState(['Estrelas', 'Galáxias', 'Lua', 'Planetas']);
  const [tagSelected, setTagSelected] = useState('');
  const [menuSelected, setMenuSelected] = useState('Início');

  const socialMedia =[
    {icon:Facebook(), alt: 'logomarca da rede social facebook'},
    {icon:Twitter(), alt: 'logomarca da rede social twitter'},
    {icon:Instagram(), alt: 'logomarca da rede social instagram'},
  ];
  const menuItens =[
    {icon: Home(), alt:'símbolo de casa', text: 'Início'},
    {icon: MaisVistas(),alt:'símbolo de um olho' , text: 'Mais vistas'},
    {icon: MaisCurtidas(),alt:'símbolo de mão com polegar levantado', text: 'Mais curtidas'},
    {icon: Novas(), alt:'símbolo de brilho', text: 'Novas'},
    {icon: Surpreenda(), alt: 'símbolo de lâmpada', text: 'Surpreenda-me'},
  ]

  return (
    <main className="container main">
      <Header logo={logo} placeholder={'O que procura?'}/>
      <Menu 
        menuItens={menuItens} 
        className={'menu__item'} 
        menuSelected={menuSelected} 
        setMenuSelected={setMenuSelected}/>
      <Banner text={'A galeria mais completa de fotos do espaço!'} />
      <Galery
        title={'Navegue pela galeria'}
        subtitle={'Busque por tags'}
        tags={tags}
        classGalery={'galery'}
        photos = {fotos}
        tagSelected={tagSelected}
        setTagSelected={setTagSelected}
      />
      <Galery
        title={'Populares'}
        classGalery={'left-galery'}
        left ={true}
        photos = {fotos}
      />
      <Footer socialMedia = {socialMedia} createBy={'Desnevolvido por Alura'} className={'footer__social-media'}/>
    </main>
  )
}

export default App
