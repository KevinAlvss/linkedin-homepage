import React from 'react';

// components
import Header from './components/Header';
import HashtagCard from './components/HashtagCard';

// estilização 
import {Container, Content, ColumnOne} from './styles';

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <ColumnOne>
        <HashtagCard />
        </ColumnOne>
      </Content>
    </Container>
  );
}

export default App;
