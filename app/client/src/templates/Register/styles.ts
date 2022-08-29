import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 50vw;
  height: 60vh;

  border: 1px solid rgb(207, 206, 206);
  border-radius: 6px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    color: rgb(52, 131, 250);
  }
`;
