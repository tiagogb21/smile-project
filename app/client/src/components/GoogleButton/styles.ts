import styled from 'styled-components';

export const Container = styled.article`
  /* width: 100%; */

  display: flex;
  align-items: center;

  button {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: rgb(33, 150, 243);
  }

  button:hover {
    background: red;
  }
`;
