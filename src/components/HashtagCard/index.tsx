import React from 'react';

import { Container, Content, Item, Divisor, ButtonBox } from './styles';

const HashtagCard: React.FC = () => {


  return (
      <Container>
        <Content>
            <Item>Grupos</Item>
            <div>
                <Item>Eventos</Item>
                <span>+</span>
            </div>
            <Item>Hashtags seguidas</Item>
        </Content>
        <Divisor />
        <ButtonBox>
            <span>Descubra mais</span>
        </ButtonBox>
      </Container>
  );
}

export default HashtagCard;