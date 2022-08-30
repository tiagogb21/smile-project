import React from "react";
import { useAppSelector } from '../../../redux/store/hooks';
import { convertIntoReal } from '../../../utils/data';

import { Container } from './styles';

const TableMainContent: React.FC = () => {
  const { schedule } = useAppSelector(state => state.table);
  console.log(schedule)

  return (
    <Container>
      <thead>
        <tr>
          <th>Data</th>
          <th>Cliente</th>
          <th>Valor</th>
          <th>Vence</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          schedule &&
          schedule?.slice(1).map((item) => (
            <tr key={ item.id }>
              <td>{ item.date }</td>
              <td>{ item.user }</td>
              <td>{ item.client }</td>
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
    </Container>
  );
};

export default TableMainContent;
