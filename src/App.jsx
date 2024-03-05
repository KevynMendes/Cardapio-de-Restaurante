import React from 'react';
import './App.css';
import headerBannerImg from './assets/apoio/banner.jpg';
import apoioBebidasImg from './assets/apoio/bebidas-grupo.png';
import facebookImg from './assets/apoio/facebook.png';
import instagramImg from './assets/apoio/instagram.png';
import whatsappImg from './assets/apoio/whatsapp.png';
import youtubeImg from './assets/apoio/youtube.png';
import frescattoImg from './assets/apoio/frescato.png';
import friboiImg from './assets/apoio/friboi.png';
import frescatto2Img from './assets/apoio/frescato2.png';
import reciclagemImg from './assets/apoio/reciclagem.png';

import Navegacao from './navegacao';
import ItemCardapio from './ItemCardapio';
import { entradas, pratosPrincipais, sobremesas, bebidas, drinks } from './cardapio';

function App() {
  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0);

  const secoesMenu = [entradas, pratosPrincipais, sobremesas, bebidas, drinks];

  return (
    <>
    <h1>"Seu Restaurante"</h1>
      <img src={headerBannerImg} className="capa"></img>
      <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada} />
      <div className="menu">
        {secoesMenu[paginaSelecionada].map((prato) => (
          <ItemCardapio
            nome={prato.nome}
            preco={prato.preco}
            descricao={prato.descricao}
            imagem={prato.imagem}
          />
        ))}
        <div className="alimentos">
          <a href="#" target="_blank" rel="noopener noreferrer"><img src={reciclagemImg} alt="Reciclagem" /></a>
          <a href="https://www.friboi.com.br/" target="_blank" rel="noopener noreferrer"><img src={friboiImg} alt="Friboi" /></a>
          <a href="https://www.frescattocompany.com/" target="_blank" rel="noopener noreferrer"><img src={frescattoImg} alt="Frescatto" /></a>
          <a href="https://www.frescattocompany.com/" target="_blank" rel="noopener noreferrer"><img src={frescatto2Img} alt="Frescatto Company" /></a>
          
        </div>
        <img src={apoioBebidasImg} className="apoio"></img>
      </div>
      <h2>Siga nossas Redes Sociais!!!</h2>
      <div className="redes-sociais">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebookImg} alt="Facebook" /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagramImg} alt="Instagram" /></a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><img src={whatsappImg} alt="WhatsApp" /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={youtubeImg} alt="YouTube" /></a>
        </div>
    </>
  );
}

export default App;
