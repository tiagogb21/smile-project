import React from "react";
import { BsPlusLg } from "react-icons/bs";

import "./styles.css";

const HeaderMainContent: React.FC = () => {
  return (
    <header className="header-main">
      <section className="header-main-top">
        <h2>Agendamento</h2>
        <button className="btn-add-new" type="button">
          Concluir
        </button>
      </section>
      <section className="header-main-bottom">
        <label className="input__box" htmlFor="">
          Criado por
          <input type="text" />
        </label>
        <label className="input__box"  htmlFor="">
          Cliente
          <input type="text" />
        </label>
        <label className="input__box" htmlFor="input-value">
          Valor
          <input className="input-value" id="input-value" type="text" />
        </label>
        <article className="payment__box">
          <p>Pagamento</p>
          <select name="" id="">
            <option value="">Pendente</option>
            <option value="">Concluído</option>
          </select>
        </article>
      </section>
    </header>
  );
};

export default HeaderMainContent;
