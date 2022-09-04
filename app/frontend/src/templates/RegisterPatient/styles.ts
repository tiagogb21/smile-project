import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  padding: 23px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input, select {
    padding:5px 0px 5px 6px;
  }

  .h3-title {
    margin:0;

    font-size:25px;

    color: #0D9ABE;
  }

  legend {
    margin-left: 10px;
  }

  @media screen and (min-width: 768px) {
    fieldset {
      align-items: center;
      justify-content: flex-start;
    };

    legend {
      margin-left: 20px;
    }
  }
`;

export const PersonalForm = styled.form`
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  label {
    width: 95px;
  }

  @media screen and (min-width: 768px) {
    label {
      width: 25vw;
    };
  }
`

export const PersonalData = styled.fieldset`
  width: 94vw;

  padding: 15px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;

  .box__container {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, 30vw);
    justify-items: center;
    align-items: center;
  }

  label, .box__input-genre {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 11px;
  }

  input, select {
    font-size: 11px;
  }

  @media screen and (min-width: 768px) {
    .box__input-genre {
      width: 25vw;
    };
  }
`;

export const ContactInfo = styled.fieldset`
  width: 94vw;

  padding: 15px 0;

  display: grid;
  grid-template-columns: repeat(3, 30vw);
  justify-items: center;
  align-items: center;

  label {
    font-size: 11px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  input, select {
    font-size: 11px;
  }
`;

export const AddressInfo = styled.fieldset`
  width: 94vw;

  padding: 15px 0;

  display: grid;
  grid-template-columns: repeat(3, 30vw);
  justify-items: center;
  align-items: center;

  label {
    font-size: 11px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  input, select {
    font-size: 11px;
  }
`;

export const ButtonBox = styled.div`
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

  button {
    width:23vw;
    border: none;
    border-radius: 6px;
    padding: 5px;
  }

  button:hover {
    cursor: pointer;
  }

  .btn-back {
    background: inherit;
    border: 1px solid #0D9ABE;
    color: #0D9ABE;
  }

  .btn-save {
    background: #0D9ABE;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    button {
      width: 15vw;
    }
  }
`;
