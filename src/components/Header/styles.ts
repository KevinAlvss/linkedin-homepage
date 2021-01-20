import styled from 'styled-components';

export const Container = styled.div`
  position:fixed;
  z-index:1000;
  width:100%;
  height:53px;
  background-color:var(--color-panel);

  display:flex;
  align-items:center;

  padding:0 200px ;

  > div {
    text-align:center;
    cursor:pointer;
  }
`;

export const SearchBox = styled.div`
  display:flex;
  align-items:center;

  > img{
      margin:0 5px;
  }

  > input{
    background-color:#EEF3F8;
    border:none;
    padding:9px 83px 9px 40px;
    border-radius:3px;
  }
`;

export const IconsSide = styled.div`
   height:100%;
   width:100%;

   display:flex;
   align-items:center;
   justify-content:flex-end;
`;

export const IconBox = styled.div`
  height:100%;
  width:90px;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  > span{
    font-size:12px;
  }
`;

export const Divisor = styled.div`
   height:100%;
   width:2px;

   background-color:#EEF3F8;
`;

export const UserImage = styled.div`
  height: 25px;
  width: 25px;

  border-radius:50%;

  background-color:#ccc;
`;

export const LinkPremium = styled.p`
  font-size:12px;
  max-width:120px;
  color:#915907;
`;