import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: radial-gradient(#C1F3FA, #8FE8F6, #3FB2C4);

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const Form = styled.form`
  width: 100vw;
  height: 100vh;

  border: 1px solid rgb(207, 206, 206);
  border-radius: 6px;
  padding: 50px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #ffffff;
  color: rgb(20, 80, 130);
  font-weight: bold;

  h1 {
    text-align: center;
    margin: 0;
  }

  .label-info-login {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .label-info-login input,
  .label-show-input input {
    padding: 10px;
    border: 1px solid rgb(207, 206, 206);
    border-radius: 6px;
  }

  .label-info-login input:focus,
  .label-show-input input:focus {
    background: rgb(230, 230, 230);
  }

  .label-show-input {
    font-size: 13px;
    display: flex;
    gap: 10px;
  }

  .navigate-register {
    font-size: 13px;
    font-weight: bolder;

    text-align: center;

    color: rgb(52, 131, 250);
  }

  @media screen and (min-width: 768px) {
    height: 90vh;
    width: 60vw;
    padding: 50px;
  }
`;
