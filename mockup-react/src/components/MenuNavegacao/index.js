import { Link } from 'react-router-dom';

import BandeiraSp from './../../assets/images/bandeira-sp.svg';

function Rota({ rota, children }) {
  return (
    <Link to={rota}>
      <div className="rota">
        {children}
      </div>
    </Link>
  );
}

function MenuNavegacao() {
  return (
    <nav>
        <ul>
          <li>
            <a href="https://fluxovacinacaocovid.web.app/" target="_blank" rel="noreferrer">
              <div className="rota sp">
                <img
                  className="header-bandeira"
                  src={BandeiraSp}
                  alt="Bandeira do Estado de São Paulo" />
                <span>
                  Vacinação em <abbr title="São Paulo">SP</abbr>
                </span>
              </div>
            </a>
          </li>
          <li>
            <Rota rota="/cidades">
              <span>Cidades</span>
            </Rota>
          </li>
          <li>
            <Rota rota="/sobre-nos">
              <span>Conheça a equipe</span>
            </Rota>
          </li>
        </ul>
      </nav>
  );
}

export default MenuNavegacao;