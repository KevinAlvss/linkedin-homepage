import styled from 'styled-components';

export const Container = styled.div`
  width:550px;
  border-radius:10px;

  display:flex;
  flex-direction:column;

  background-color:var(--color-white);
`;

export const Header = styled.div`
  width:100%;
  height:fit-content;

  padding:10px;
`;

export const UserContainer = styled.div`
  display:flex;
  align-items:center;
`;

export const  UserPhoto = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:#ccc;
`;

export const  UserDataContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:10px;
`;

export const  UserName = styled.span`
  font-size:14px;
  font-weight:500;
`;

export const  UserSeguidores = styled.span`
  font-size:12px;
  color:#00000099;
`;

export const  PostTime = styled.span`
  font-size:12px;
  color:#00000099;
`;

export const  HeaderContent = styled.p`
  margin-top:5px;
  font-size:14px;
`;

export const Content = styled.div`

`;

export const Actions = styled.div`

`;

