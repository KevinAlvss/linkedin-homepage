import React from 'react';

// components
import Header from './components/Header';
import HashtagCard from './components/HashtagCard';
import Post from './components/Post';
import Cursos from './components/Cursos';

// estilização 
import {Container, Content, Column} from './styles';

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Column>
          <HashtagCard />
        </Column>
        <Column>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Column>
        <Column>
          <Cursos />
        </Column>
      </Content>
    </Container>
  );
}

export default App;
