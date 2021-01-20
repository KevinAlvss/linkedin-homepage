import React from 'react';

import { Container, 
         Header,
         UserContainer, 
         UserPhoto, 
         UserDataContainer, 
         UserName, 
         UserSeguidores, 
         PostTime, 
         HeaderContent ,
         Content, 
         Actions,
         ReactionButton } from './styles';


// imagem
import imagempost from '../../images/wallpaper2.jpg';
import comentar from '../../images/comentar.svg';
import compartilhar from '../../images/compartilhar.svg';
import enviar from '../../images/enviar.svg';
import gostei from '../../images/gostei.svg'

const Post: React.FC = () => {
  return (
      <Container>
          <Header>
            <UserContainer>
                <UserPhoto />
                <UserDataContainer>
                    <UserName>Kevin</UserName>
                    <UserSeguidores>200.000</UserSeguidores>
                    <PostTime>18 h</PostTime>
                </UserDataContainer>
            </UserContainer>
            <HeaderContent>Esse é um clone do LinkedIn</HeaderContent>
          </Header>
          <Content>
            <img src={imagempost} alt="Postagem" />
          </Content>
          <Actions>
              <ReactionButton>
                <img src={gostei} alt="" />
                <span>Gostei</span>
              </ReactionButton>
              <ReactionButton>
                <img src={comentar} alt="" />
                <span>Comentar</span>
              </ReactionButton>
              <ReactionButton>
                <img src={compartilhar} alt="" />
                <span>Compartilhar</span>
              </ReactionButton>
              <ReactionButton>
                <img src={enviar} alt="" />
                <span>Enviar</span>
              </ReactionButton>
          </Actions>
      </Container>
  );
}

export default Post;