import React from 'react';

import { Container, SearchBox, IconsSide, IconBox, Divisor, UserImage, LinkPremium } from './styles';

// imagens
import logo from '../../images/LinkedIn.svg'
import inicio from '../../images/inicio.svg'
import rede from '../../images/minha-rede.svg'
import vagas from '../../images/vagas.svg'
import mensagens from '../../images/mensagens.svg'
import notificacoes from '../../images/notificacoes.svg'
import solucoes from '../../images/solucoes.svg'

const Header: React.FC = () => {
  return(
      <Container>
        <SearchBox>
            <img src={logo} alt="logo" />
            <input type="text" placeholder="Pesquisar"/>
        </SearchBox>

        <IconsSide>
          <IconBox>
            <img src={inicio} alt="inicio"/>
            <span>Início</span>
          </IconBox>

          <IconBox>
            <img src={rede} alt="minha rede"/>
            <span>Minha rede</span>
          </IconBox>

          <IconBox>
            <img src={vagas} alt="vagas"/>
            <span>Vagas</span>
          </IconBox>

          <IconBox>
            <img src={mensagens} alt="mensagens"/>
            <span>Mensagens</span>
          </IconBox>

          <IconBox>
            <img src={notificacoes} alt="notificacoes"/>
            <span>Notificações</span>
          </IconBox>

          <IconBox>
            <UserImage/>
            <span>Eu</span>
          </IconBox>

          <Divisor />

          <IconBox>
            <img src={solucoes} alt="soluções"/>
            <span>Soluções</span>
          </IconBox>

          <div>
            <LinkPremium>Experimente Premium grátis por 1 mês</LinkPremium>
          </div>

        </IconsSide>
      </Container>
  );
}

export default Header;