import React from "react";

import { Container } from './styles';

const TableMainContent: React.FC = () => {
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
      <tbody></tbody>
    </Container>
  );
};

export default TableMainContent;
