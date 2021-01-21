import styled from 'styled-components';

export const Container = styled.div`
  width:100%;

  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const Content = styled.div`
  display:flex;
  justify-content:center;

  width:100%;

  padding-top:100px;
`;

export const Column = styled.div`
  width:fit-content;

  &:nth-child(2){
    margin:0 20px;
  }
`;