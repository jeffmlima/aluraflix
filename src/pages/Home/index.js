import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu />
      
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Dark é uma premiada websérie alemã de drama, suspense e ficção científica, criada Baran bo Odar e Jantje Friese e eleita em votação popular no site Rotten Tomatoes como a melhor série original Netflix. ... Ao longo da série, Dark explora as implicações existenciais do tempo e seus efeitos sobre a natureza humana."}
      />

      <Carousel
        ignoreFirtVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirtVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirtVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirtVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirtVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFirtVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default Home;
