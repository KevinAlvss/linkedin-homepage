import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:53px;
  background-color:var(--color-panel);

  display:flex;
  align-items:center;

  padding:0 200px ;
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
    background-image:url('../../images/search-icon.svg');
  }
`;