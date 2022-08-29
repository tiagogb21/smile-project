import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: Arial, Helvetica, sans-serif;

  .close-btn__container {
    width: 310px;
    height: 50px;

    display: flex;
    justify-content: space-between;
  }

  .btn-toggle-light {
    border: none;
    margin-left: 10px;

    background: inherit;

    font-size: 20px;
  }

  .btn-toggle-light:hover {
    cursor: pointer;

    position: relative;
    left: -36px;
    top: 8px;
  }

  .btn-toggle-light span {
    display: none;
  }

  .btn-toggle-light:hover span {
    display: flex;

    font-size: 15px;

    position: relative;
    left: 10px;
    bottom: 50px;
    z-index: 1;
  }

  .btn-close {
    border: none;

    background: inherit;

    font-size: 20px;
  }

  .btn-close:hover {
    cursor: pointer;

    position: relative;
    left: 52px;
    top: 8px;
  }

  .btn-close > span {
    display: none;
  }

  .btn-close:hover > span {
    display: flex;

    font-size: 15px;

    position: relative;
    bottom: 50px;
    z-index: 1;
  }

  section {
    width: 315px;

    border: 1px solid rgb(218, 220, 224);
    border-radius: 5px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .window-calc__container {
    width: 280px;
    height: 70px;

    background: #ffffff;

    border: 1px solid rgb(218, 220, 224);
    border-radius: 5px;
    padding: 0 20px;

    display:flex;
    flex-direction: row-reverse;

    font-size: 25px;
  }

  .btn-calc__container {
    width: 320px;

    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .btn {
    width: 65px;
    height: 26px;

    border: none;
    border-radius: 4px;
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    outline: 0;
    color: rgb(32, 33, 36);
  }

  .btn:hover {
    cursor: pointer;
    background: rgb(66, 133, 244);
    opacity: 0.7;
    color: #ffffff;
  }

  .gray-btn {
    background: rgb(218, 220, 224);
  }

  .blue-btn {
    color: #ffffff;
    font-weight: bold;
    background: rgb(66, 133, 244);
  }
`;
