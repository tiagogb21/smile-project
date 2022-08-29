import React from "react";
import HeaderMainContent from "./HeaderMainContent";
import TableMainContent from "./TableMainContent";

import "./styles.css";

const MainContent: React.FC = () => {
  return (
    <main className="main-content__container">
      <HeaderMainContent />
      <TableMainContent />
    </main>
  );
};

export default MainContent;
