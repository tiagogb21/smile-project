import React, { useEffect, useState } from "react";
import { BsCalculator } from "react-icons/bs";
import { insertDataInSchedule } from '../../../redux/reducers/tableReducer';
import { useAppDispatch } from '../../../redux/store/store';

import "./styles.css";

const HeaderMainContent: React.FC = () => {
  const [requiredFields, setRequiredFields] = useState(false);
  const [teste, setTeste] = useState(true);

  const [dataSchedule, setDataSchedule] = useState({
    date: '',
    user: '',
    client: '',
    value: '',
    status: 'pendente',
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(dataSchedule.date.length > 0
      && dataSchedule.user.length > 0
      && dataSchedule.client.length > 0
      && dataSchedule.value) {
        console.log('aaaaaa')
        setTeste(false);
        setRequiredFields(false);
    }
    console.log(dataSchedule.date.length > 0
      && dataSchedule.user.length > 0
      && dataSchedule.client.length > 0
      && dataSchedule.value)
  }, [dataSchedule]);

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
            required
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
            required
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
            required
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
      <article className="btn-new__container">
        {
          requiredFields
          && <p>Todos os campos são obrigatórios</p>
        }
        <button
          className="btn-add-new btn-new-schedule"
          type="button"
          onClick={() => {
            return teste ? setRequiredFields(true) : dispatch(insertDataInSchedule(dataSchedule))
          } }
        >
          Add
        </button>
      </article>
    </header>
  );
};

export default HeaderMainContent;
