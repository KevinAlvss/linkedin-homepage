import React from 'react';

import { Container, SearchBox } from './styles';

// imagens
import logo from '../../images/LinkedIn.svg'

const Header: React.FC = () => {
  return(
      <Container>
        <SearchBox>
            <img src={logo} alt="logo" />
            <input type="text" placeholder="Pesquisar"/>
        </SearchBox>

        {/* <IconsSide>

        </IconsSide> */}
      </Container>
  );
}

export default Header;