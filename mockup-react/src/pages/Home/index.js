import { useState } from 'react';
import './styles.css';

import Search from './../../assets/icons/Search';

function Home() {
  const [busca, setBusca] = useState('');

  function pesquisar() {
    console.log(busca);
  }

  return (
    <div id="home">
      <div id="busca">
        <div id="busca-conteudo">
          <hgroup>
            <h1>Como está na sua cidade?</h1>
            <h2>Consulte o índice de vacinação das cidades do Estado de Mato Grosso do Sul</h2>
          </hgroup>

          <div id="barra-de-pesquisa">
            <input type="text" />
            <div id="botao-de-pesquisar">
              <Search />
            </div>
          </div>
        </div>

        <div id="busca-filtro-da-imagem"></div>
      </div>
    </div>
  );
}

export default Home;