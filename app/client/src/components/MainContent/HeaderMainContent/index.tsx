import React, { useState } from "react";
import { BsCalculator } from "react-icons/bs";
import { toggleButton } from '../../../redux/reducers/closeCalculator';
import { cleanSchedules, insertDataInSchedule } from '../../../redux/reducers/tableReducer';
import { useAppSelector } from '../../../redux/store/hooks';
import { useAppDispatch } from '../../../redux/store/store';

import {Container} from './styles';

import { scheduleData } from '../../../utils/data';
import { createSchedule } from '../../../service/api';
import { IError, ITable } from '../../../interface/table.interface';

import { TextField, Select, MenuItem } from '@mui/material';

import * as yup from 'yup';

const schema = yup.object().shape({
  createdBy: yup.string().required(),
  client: yup.string().required(),
  value: yup.number().required().positive().integer(),
  email: yup.string().email(),
  status: yup.string().required(),
  dueDate: yup
    .date()
    .required('Preencha a data de nascimento para prosseguir!')
    .max(new Date(), 'Data de nascimento invalida!')
    .typeError('Preencha a data de nascimento para prosseguir!'),
});

const initialData = {
  createdBy: '',
  client: '',
  value: '',
  status: '',
  dueDate: '',
};

const HeaderMainContent: React.FC = () => {
  const [findValues, setFindValues] = useState(initialData);
  const [findError, setFindError] = useState(initialData);
  const [dataSchedule, setDataSchedule] = useState(scheduleData);

  const dispatch = useAppDispatch();

  const { buttonClose } = useAppSelector(state => state.buttonClose);
  const { schedule } = useAppSelector(state => state.table);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFindValues({
      ...findValues,
      [event.target.name]: event.target.value,
    });
    setFindError({
      ...findError,
      [event.target.name]: '',
    });
  }

  const handleClick = async () => {
    await schema
      .validate(findValues, { abortEarly: false })
      .then(() => {
        setFindError(initialData)
        return true
      })
      .catch((err) => {
        const currentErrors = { ...scheduleData }
        err.inner.forEach((error: IError) => {
          currentErrors[error.path] = error.message
        })
        setFindError(currentErrors)
        return false
      })
    dispatch(insertDataInSchedule(dataSchedule));
    setDataSchedule(scheduleData)
    return;
  };

  const saveSchedule = async () => {
    schedule.map(async (item: ITable) => {
      const getData = await createSchedule(item);
      if(getData?.message?.includes('failed')) {
        return;
      }
    })
    dispatch(cleanSchedules());
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
        <TextField
          // error={}
          label="Cliente"
          name="email"
          value={ dataSchedule.client }
          variant="outlined"
          type="text"
          style={{ marginTop: 16, width: '100%' }}
          onChange={ handleChange }
        />
        <TextField
          // error={}
          label="Valor"
          name="valor"
          value={ dataSchedule.value }
          variant="outlined"
          type="text"
          style={{ marginTop: 16, width: '100%' }}
          onChange={ handleChange }
        />
        <TextField
          // error={}
          name="date"
          value={ dataSchedule.dueDate }
          variant="outlined"
          type="date"
          style={{ marginTop: 16, width: '100%' }}
          onChange={ handleChange }
        />
        <Select
          labelId="pendente-select-label"
          id="demo-simple-select"
          label="Pendente"
          style={{ marginTop: 16, width: '100%' }}
          onClick={(e: any) => {
            const optionValue = e.target.options[e.target.selectedIndex].value;
            setDataSchedule((prev) => ({
              ...prev,
              status: optionValue
            }))
          }}
        >
            <MenuItem value="pendente">Pendente</MenuItem>
            <MenuItem value="concluido">Concluído</MenuItem>
        </Select>
      </section>
      <article className="btn-new__container">
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
