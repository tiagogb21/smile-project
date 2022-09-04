import React from "react";
import HeaderMainContent from "./HeaderMainContent";
import TableMainContent from "./TableMainContent";

import {Container} from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <HeaderMainContent />
      <TableMainContent />
    </Container>
  );
};

export default MainContent;
