import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdminMain = styled.main`
  width: 100vw;
  height: 80vh;
  padding: 30px;

  h1 {
    margin: 0;
  }
`;

export const FormField = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
