import React from "react";

import "./styles.css";

const TableMainContent: React.FC = () => {
  return (
    <table className="table-main-content__container">
      <thead>
        <tr>
          <th>Criado em</th>
          <th>Criado por</th>
          <th>Valor</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default TableMainContent;
