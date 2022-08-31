import React, { useState } from "react";
import { BsCalculator } from "react-icons/bs";
import { toggleButton } from '../../../redux/reducers/closeCalculator';
import { insertDataInSchedule } from '../../../redux/reducers/tableReducer';
import { useAppSelector } from '../../../redux/store/hooks';
import { useAppDispatch } from '../../../redux/store/store';

import {Container} from './styles';

import axios from 'axios';

const HeaderMainContent: React.FC = () => {
  const [requiredFields, setRequiredFields] = useState(false);
  const [dataSchedule, setDataSchedule] = useState({
    dueDate: '',
    createdBy: '',
    value: '',
    status: 'pendente',
    client: '',
  });

  const dispatch = useAppDispatch();

  const { buttonClose } = useAppSelector(state => state.buttonClose);

  const handleClick = () => {
    if(dataSchedule.dueDate !== ''
      && dataSchedule.client !== ''
      && dataSchedule.value !== '') {
        setRequiredFields(false);
        const { client, ...exceptClient } = dataSchedule;
        dispatch(insertDataInSchedule(exceptClient))
        setDataSchedule({
          dueDate: '',
          createdBy: '',
          client: '',
          value: '',
          status: 'pendente',
        })
        return;
    }
    setRequiredFields(true);
  };

  const saveSchedule = async () => {
    console.log(dataSchedule);
    const createSchedule = await axios.post(
      'http://localhost:3001/schedule',
      { ...dataSchedule },
    ).then((result) => result)
    .catch((error) => error);
    if(createSchedule?.message?.includes('failed')) {
      return;
    }
  }

  return (
    <Container>
      <section className="header-main-top">
        <h2>Agendamento</h2>
        <button
          className="btn-add-new"
          type="button"
          onClick={ saveSchedule }
        >
          CONCLUIR
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
          <span
            className="value-calc__span__box"
            onClick={() => dispatch(toggleButton(!buttonClose))}
          >
            Valor
            <BsCalculator />
          </span>
          <input
            className="input-value"
            id="input-value"
            type="number"
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
            value={ dataSchedule.dueDate }
            onChange={(e) => {
              setDataSchedule((prev) => ({
                ...prev,
                dueDate: e.target.value
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
                status: optionValue
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
          onClick={handleClick}
        >
          ADD
        </button>
      </article>
    </Container>
  );
};

export default HeaderMainContent;
