import styled from 'styled-components';

export const Container = styled.div`
  width:300px;
  background-color:var(--color-white);
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.2);
  border-radius:15px;
  padding:10px;

  position:sticky;
  top:64px;

`;

export const Title = styled.span`
  color:#000000e6;
`;

export const Content = styled.div`
  display:flex;
  flex-direction:column;

  margin:10px 0;
`;

export const Item = styled.div`
  display:flex;
  flex-direction:column;
`;

export const NomeCurso = styled.span`
  font-weight:500;
  font-size:14px;
  color:#000000e6;
`;

export const Professor = styled.span`
  font-size:12px;
  color:#00000099;
  margin-left:15px;
  margin-top:3px;
`;

export const Footer = styled.div`
  padding-left:10px;
`;

export const Learning = styled.span`
  font-size:14px;
  font-weight:500;
  color:#0A66C6;
`;
