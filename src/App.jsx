import { useState } from 'react';
import Header from './components/Header'
import Banner from './components/Banner';
import Menu from './components/Menu';
import Galery from './components/Galery';
import Footer from './components/Footer';

import logo from './assets/logo.png';

import { MdFacebook as Facebook } from 'react-icons/md';
import { BsTwitter as Twitter } from 'react-icons/bs';
import { BsInstagram as Instagram } from 'react-icons/bs';

import { CgHome as Home } from 'react-icons/cg';
import { AiOutlineEye as MaisVistas } from 'react-icons/ai';
import { BiLike as MaisCurtidas } from 'react-icons/bi';
import { TfiShine as Novas } from 'react-icons/tfi';
import { MdLightbulbOutline as Surpreenda } from 'react-icons/md';
import { fotos } from './data/fotos';

import './App.css';
import Picture from './components/Picture';

function App() {
  const [menuSelected, setMenuSelected] = useState('Início');
  const [tagSelected, setTagSelected] = useState('');
  const [seeAll, setSeeAll] = useState(false);
  const [picture, setPicture] = useState(null);

  const selectTag = (tag) => {
    tag === tagSelected ? setTagSelected('') : setTagSelected(tag);
  }


  const fotosPopulares = []

  fotos.forEach((foto, index) => {
    if (seeAll) {
      fotosPopulares.push(foto);
    } else {
      if (index < 5) {
        fotosPopulares.push(foto);
      }
    }
  });

  const onSeeAllButton = () => {
    setSeeAll(!seeAll);
  }


  const tags = ['Estrelas', 'Galáxias', 'Lua', 'Planetas'];
  const socialMedia = [
    { icon: Facebook(), alt: 'logomarca da rede social facebook' },
    { icon: Twitter(), alt: 'logomarca da rede social twitter' },
    { icon: Instagram(), alt: 'logomarca da rede social instagram' },
  ];
  const menuItens = [
    { icon: Home(), alt: 'símbolo de casa', text: 'Início' },
    { icon: MaisVistas(), alt: 'símbolo de um olho', text: 'Mais vistas' },
    { icon: MaisCurtidas(), alt: 'símbolo de mão com polegar levantado', text: 'Mais curtidas' },
    { icon: Novas(), alt: 'símbolo de brilho', text: 'Novas' },
    { icon: Surpreenda(), alt: 'símbolo de lâmpada', text: 'Surpreenda-me' },
  ]

  return (
    <>
      <div className="container main">
        <Picture picture={picture} setPicture={setPicture} />
        <Header logo={logo} placeholder={'O que procura?'} />
        <Menu
          menuItens={menuItens}
          className={'menu__item'}
          menuSelected={menuSelected}
          setMenuSelected={setMenuSelected} />
        <Banner text={'A galeria mais completa de fotos do espaço!'} />
        <Galery
          title={'Navegue pela galeria'}
          subtitle={'Busque por tags'}
          tags={tags}
          classGalery={'galery'}
          photos={fotos}
          tagSelected={tagSelected}
          setTagSelected={selectTag}
          setPicture={setPicture}
        />
        <Galery
          title={'Populares'}
          classGalery={'left-galery'}
          left={true}
          photos={fotosPopulares}
          setSeeAll={onSeeAllButton}
          seeAll={seeAll}
        />
        <Footer
          socialMedia={socialMedia}
          createBy={'Desnevolvido por Alura'}
          lassName={'footer__social-media'} />
      </div>
    </>
  )
}

export default App
