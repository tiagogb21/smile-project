import styled from 'styled-components';

export const Container = styled.section`
  width: 95vw;
  height: 50vh;

  display: flex;
  align-items: center;
  justify-content: center;

  article {
    width: 25px;
  }

  .btn-arrow {
    width: 25px;
    height: 25px;

    border: none;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 30px;

    background: inherit;
  }

  .btn-arrow:hover {
    cursor: pointer;
    border: 2px solid blue;
    color: blue;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-around;

    .btn-arrow {
      width: 50px;
      height: 50px;
    }
  }
`;

export const TableContainer = styled.table`
  width: 82vw;
  height: 28vh;

  border-collapse: collapse;

  color: rgb(119, 118, 118);
  display: flex;
  align-items: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  th {
    width: 70px;

    background: lightgray;

    border: 1px solid rgb(196, 195, 195);
    padding: 5px;

    font-size: 13px;

    color: rgb(140, 140, 140);
  }

  td {
    width: 70px;

    border: 1px solid rgb(196, 195, 195);
    padding: 5px;

    font-size: 11px;
    text-align: center;

    color: rgb(140, 140, 140);
  }

  @media screen and (min-width: 768px) {
    th, td {
      width: 250px;
    }

    td {
      font-size: 15px;
    }
  }
`;
