import React from "react";
import { BsPlusLg } from "react-icons/bs";

import "./styles.css";

const HeaderMainContent: React.FC = () => {
  return (
    <header className="header-main">
      <section className="header-main-top">
        <h2>Agendamento</h2>
        <button className="btn-add-new" type="button">
          <BsPlusLg />
          Novo
        </button>
      </section>
      <section className="header-main-bottom">
        <select name="" id="">
          {/* person */}
          <option value="">Criado por</option>
          <optgroup>
            <option value=""></option>
          </optgroup>
        </select>
        <select name="" id="">
          {/* cliente */}
          <option value="">Cliente</option>
          <optgroup>
            <option value=""></option>
          </optgroup>
        </select>
      </section>
    </header>
  );
};

export default HeaderMainContent;
