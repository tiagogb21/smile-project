import styled from 'styled-components';

export const Container = styled.button`
  min-width: 10vw;
  min-height: 7vh;

  border: none;
  border-radius: 6px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #1c3166;
  color: #40ffdc;
  font-size: 15px;

  opacity: 0.9;
  transition: 1s;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  &:disabled {
    opacity: 0.1;
  }
`;
