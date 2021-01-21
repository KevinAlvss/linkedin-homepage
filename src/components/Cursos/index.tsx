import React from 'react';

import { Container, Title, Content, Item, NomeCurso, Professor, Footer, Learning } from './styles';

const Cursos: React.FC = () => {
  return (
      <Container>
          <Title>Os cursos mais visualizados hoje</Title>
          <Content>
              <Item>
                  <NomeCurso>1. Nome curso</NomeCurso>
                  <Professor>Kevin Alves</Professor>
              </Item>
              <Item>
                  <NomeCurso>2. Nome curso</NomeCurso>
                  <Professor>Kevin Alves</Professor>
              </Item>
              <Item>
                  <NomeCurso>3. Nome curso</NomeCurso>
                  <Professor>Kevin Alves</Professor>
              </Item>
          </Content>
          <Footer>
              <Learning>Exibir mais no LinkedIn Learning</Learning>
          </Footer>
      </Container>
  );
}

export default Cursos;