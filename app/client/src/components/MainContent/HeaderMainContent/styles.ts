import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 51vh;

  padding: 0 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .header-main-top {
    width: 95%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-main-top h2 {
    font-size: 20px;
  }

  .btn-add-new {
    width: 30vw;
    height: 4vh;

    border: none;
    border-radius: 6px;
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    font-size: 15px;
    font-weight: 600;
    color: #ffffff;

    background: rgb(9, 2, 100);
    opacity: 0.8;

    transition: 0.5s;
  }

  .btn-add-new:hover {
    cursor: pointer;
    opacity: 1;
  }

  .header-main-bottom {
    width: 95%;
    height: 20vh;

    display: grid;
    grid-template-columns: repeat(2, 130px);
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    color: rgb(140, 140, 140)
  }

  .header-main-bottom select {
    width: 130px;

    border: 1px solid rgb(196, 195, 195);
    padding: 3px 3px 3px 10px;

    background: #ffffff;

    font-size: 15px;
    color: rgb(119, 118, 118);
  }

  .input__box {
    width: 130px;

    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .input__box:hover {
    cursor: pointer;
  }

  .input__box input {
    border: 1px solid rgb(196, 195, 195);
    padding: 3px 3px 3px 10px;
  }

  .payment__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .payment__box p {
    margin: 0;
  }

  .value-calc__span__box {
    display: flex;
    gap: 15px;
  }

  .btn-new__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 10px;
  }

  .btn-new__container p {
    margin: 0;
    font-size: 10px;
    color: red;
  }

  .btn-new-schedule {
    margin-top: 10px;
    background: rgb(0, 150, 136);
  }

  @media screen and (min-width: 768px) {
    height: 40vh;

    .header-main-top {
      width: 90%;
    }

    .header-main-bottom {
      width: 90%;
      display: flex;
      justify-content: space-between;
    }

    .input__box input {
      width: 20vw;
      margin-right: 20vw;
    }

    .btn-add-new {
      width: 17vw;
      height: 7vh;
      margin: 0px;
    }
  }
`;
