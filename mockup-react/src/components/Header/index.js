import { Link } from 'react-router-dom';
import './styles.css';

import BandeiraMs from './../../assets/images/bandeira-ms.svg';

import MenuNavegacao from '../MenuNavegacao';

function Header() {
  return (
    <>
      <header id="header">
        <Link to="/">
          <div id="logotipo">
            <h3>
              Vacinação em <abbr title="Mato Grosso do Sul">MS</abbr>
            </h3>
            <img
              className="header-bandeira"
              src={BandeiraMs}
              alt="Bandeira do Estado de Mato Grosso do Sul" />
          </div>
        </Link>

        <MenuNavegacao />
      </header>
      <div id="header-poliestireno"></div>
    </>
  );
}

export default Header;