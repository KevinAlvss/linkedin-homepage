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
         Actions } from './styles';

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

          </Content>
          <Actions>

          </Actions>
      </Container>
  );
}

export default Post;