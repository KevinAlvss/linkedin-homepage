import styled from 'styled-components';

export const Container = styled.div`
  position:sticky;
  top:64px;

  width:215px;
  height:fit-content;
  border-radius:15px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.2);

  background-color:var(--color-white);
`;

export const Content = styled.div`
  display:flex;
  flex-direction:column;

  font-size:12px;
  color:#0a66c2;
  font-weight:500;

  > div{
      width:100%;
      display:flex;

      align-items:center;
      justify-content:space-between;
      padding-right:15px;

      > span{
        cursor: pointer;
        &:hover{
            text-decoration:underline;
        }
      }
  }

`;

export const Item = styled.span`
  width:100%;
  padding:0 15px;
  margin:5px 0;
  cursor: pointer;

  &:hover{
      text-decoration:underline;
  }

`;

export const Divisor = styled.div`
  width:100%;
  height:1px;

  background-color:#ccc;
`;

export const ButtonBox = styled.div`
  height:45px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  border-bottom-left-radius:15px;
  border-bottom-right-radius:15px;
  font-size:13px;

  &:hover{
      background-color:#EBEBEB;
  }
`;
