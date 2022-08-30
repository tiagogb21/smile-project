import React, { useEffect, useState } from "react";
import { BsCalculator } from "react-icons/bs";
import { insertDataInSchedule } from '../../../redux/reducers/tableReducer';
import { useAppDispatch } from '../../../redux/store/store';

import "./styles.css";

const HeaderMainContent: React.FC = () => {
  const [dataSchedule, setDataSchedule] = useState({
    id: 0,
    date: '',
    user: '',
    client: '',
    value: '',
    status: 'pendente',
  });

  const dispatch = useAppDispatch();

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
          Cliente
          <input
            type="text"
            value={ dataSchedule.client }
            onChange={(e) => {
              setDataSchedule((prev) => ({
                ...prev,
                client: e.target.value
              }))
            } }
          />
        </label>
        <label className="input__box" htmlFor="input-value">
          <span className="value-calc__span__box">Valor <BsCalculator /></span>
          <input
            className="input-value"
            id="input-value"
            type="text"
            value={ dataSchedule.value }
            onChange={(e) => {
              setDataSchedule((prev) => ({
                ...prev,
                value: e.target.value
              }))
            } }
          />
        </label>
        <label className="input__box"  htmlFor="">
          Vencimento
          <input
            type="date"
            value={ dataSchedule.date }
            onChange={(e) => {
              setDataSchedule((prev) => ({
                ...prev,
                date: e.target.value
              }))
            } }
          />
        </label>
        <article className="payment__box">
          <p>Pagamento</p>
          <select
            onClick={(e: any) => {
              const optionValue = e.target.options[e.target.selectedIndex].value;
              setDataSchedule((prev) => ({
                ...prev,
                date: optionValue
              }))
            }}
          >
            <option value="pendente">Pendente</option>
            <option value="concluido">Concluído</option>
          </select>
        </article>
      </section>
      <button
        className="btn-add-new btn-new-schedule"
        type="button"
        onClick={() => dispatch(insertDataInSchedule(dataSchedule))}
      >
        Add
      </button>
    </header>
  );
};

export default HeaderMainContent;
