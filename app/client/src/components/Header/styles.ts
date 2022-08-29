import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 10vh;

  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #b5f8dc;

  .title-smile {
    height: 100%;
    font-size: 35px;

    display: flex;
    align-items: center;
  }

  .title-smile-smile {
    margin-right: 10px;
  }

  .title-smile span:nth-child(2) {
    color: rgb(66 133 244);
  }

  .btn-menu,
  .btn-user {
    border: none;
    padding: 5px;

    display: flex;
    align-items: center;

    font-size: 30px;
    color: rgb(83, 76, 173);

    background: inherit;
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
