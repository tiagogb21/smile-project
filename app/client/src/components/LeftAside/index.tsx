import React from "react";
import { useAppSelector } from '../../redux/store/hooks';

import "./styles.css";

const LeftAside: React.FC = () => {
  const { isAsideOpen } = useAppSelector(state => state.aside);

  return (
    <aside className={ isAsideOpen ? 'close-aside' : 'open-aside' }>
      <a href="/">Usuários</a>
      <a href="/">Configurações</a>
    </aside>
  );
};

export default LeftAside;
