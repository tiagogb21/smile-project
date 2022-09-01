import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 70vh;

  padding-top: 50px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background: url('https://cdn.pixabay.com/photo/2018/01/07/15/31/toothpaste-3067569_960_720.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  /* background: radial-gradient(#C1F3FA, #8FE8F6, #3FB2C4); */

  .title-smile {
    font-size: 35px;

    display: flex;
    align-items: center;

    color: black;
  }

  .title-smile-smile {
    margin-right: 10px;
  }

  .btn-menu,
  .btn-user {
    height: 40px;
    width: 40px;

    border: none;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    font-size: 30px;

    background: inherit;

    color: black;
  }

  .btn-menu:hover {
    border-radius: 10px;

    cursor: pointer;

    border: 3px solid rgb(83, 76, 173);
  }

  .btn-user:hover {
    cursor: pointer;

    border: 3px solid rgb(83, 76, 173);
    border-radius: 50%;
  }
`;
