import React, { useState } from "react";
import { useAppSelector } from '../../../redux/store/hooks';
import { convertIntoReal } from '../../../utils/data';

import { Container, TableContainer } from './styles';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';

const TableMainContent: React.FC = () => {
  const [min, setMin] = useState(1);

  const { schedule } = useAppSelector(state => state.table);

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
      <TableContainer>
        <thead>
          <tr>
            <th>Data</th>
            <th>Cliente</th>
            <th>Valor</th>
            {/* <th>Vence</th> */}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            schedule &&
            schedule?.slice(min, min + 5).map((item, id) => (
              <tr key={ id }>
                <td>{ item.dueDate }</td>
                {/* <td>{ item.user }</td> */}
                {/* <td>{ item.client }</td> */}
                <td>
                  {
                    convertIntoReal(item.value)
                  }
                </td>
                <td>{ item.status }</td>
              </tr>
            ))
          }
        </tbody>
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
