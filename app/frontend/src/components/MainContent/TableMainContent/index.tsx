import React, { useEffect, useState } from "react";
import { useAppSelector } from '../../../redux/store/hooks';
import { convertIntoReal, dataTransform } from '../../../utils/data';

import { Container } from './styles';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';

import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Table, TableBody, TableHead, TableRow, TableContainer, Paper } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgb(9,2,100)',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    width: '50px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TableMainContent: React.FC = () => {
  const [min, setMin] = useState(1);
  const [clientName, setClientName] = useState('');

  const { schedule } = useAppSelector(state => state.table);

  useEffect(() => {
    const getInfoFromStorage = localStorage.getItem('user');
    if(!getInfoFromStorage) return;
    const getUser = JSON.parse(getInfoFromStorage as string);
    const { name } = getUser;
    setClientName(name);
  }, []);

  return (
    <Container>
      <article>
        {
          min > 5 &&
          <button
            className="btn-arrow"
            type="button"
            onClick={() => setMin((prev) => {
              if(prev > 1) {
                return prev - 5;
              } else {
                return prev
              }
            })}
          >
            <VscTriangleLeft />
          </button>
        }
      </article>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell  style={{ fontSize: '14px' }}>Criado por</StyledTableCell>
              <StyledTableCell style={{ fontSize: '14px' }} align="right">Cliente</StyledTableCell>
              <StyledTableCell style={{ fontSize: '14px' }} align="right">Valor</StyledTableCell>
              <StyledTableCell style={{ fontSize: '14px' }} align="right">Status</StyledTableCell>
              <StyledTableCell style={{ fontSize: '14px' }} align="right">Vencimento</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              schedule.slice(min, min + 5).map((row, id) => (
                <StyledTableRow key={id}>
                  <StyledTableCell component="th" scope="row">
                    {clientName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{ row.createdBy }</StyledTableCell>
                  <StyledTableCell align="right">{ row.client }</StyledTableCell>
                  <StyledTableCell align="right">{ convertIntoReal(+row.value) }</StyledTableCell>
                  <StyledTableCell align="right">{ row.status }</StyledTableCell>
                  <StyledTableCell align="right">{ dataTransform(row.dueDate) }</StyledTableCell>
                </StyledTableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>

      <article>
        {
          schedule.length > 6
          && min < schedule?.length
          && (
          <button
            className="btn-arrow"
            type="button"
            onClick={() => setMin((prev) => {
              if(prev < schedule?.length - 1) {
                return prev + 5;
              } else {
                return prev
              }
            })}
          >
            <VscTriangleRight />
          </button>
        ) }
      </article>
    </Container>
  );
};

export default TableMainContent;
