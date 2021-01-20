import styled from 'styled-components';

export const Container = styled.div`
  width:550px;
  border-radius:10px;

  display:flex;
  flex-direction:column;

  background-color:var(--color-white);

  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.2);

  margin-bottom:8px;
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
  width:100%;
  height:290px;

  > img{
    width:100%;
    height:100%;
  }
`;

export const Actions = styled.div`
  width:100%;
  height:60px;

  display:flex;
  align-items:center;
`;

export const ReactionButton = styled.div`
  display:flex;
  align-items:center;
  margin:0 7px;
  padding:5px;
  height: 70%;
  border-radius:4px;
  cursor: pointer;

  transition:all .2s ease-in-out;

  &:hover{
    background-color:#EBEBEB;
  }
`;