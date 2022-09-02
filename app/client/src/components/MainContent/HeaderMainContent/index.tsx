import React, { MouseEventHandler, useState } from "react";
import { BsCalculator } from "react-icons/bs";
import { toggleButton } from '../../../redux/reducers/closeCalculator';
import { cleanSchedules, insertDataInSchedule } from '../../../redux/reducers/tableReducer';
import { useAppSelector } from '../../../redux/store/hooks';
import { useAppDispatch } from '../../../redux/store/store';

import {Container} from './styles';

import { scheduleData } from '../../../utils/data';
import { createSchedule } from '../../../service/api';
import { IError, ITable } from '../../../interface/table.interface';

import { TextField, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import schema from '../../../utils/yup';

const HeaderMainContent: React.FC = () => {
  const [findValues, setFindValues] = useState(scheduleData);
  const [findError, setFindError] = useState(scheduleData);
  const [dataSchedule, setDataSchedule] = useState(scheduleData);

  const dispatch = useAppDispatch();

  const { buttonClose } = useAppSelector(state => state.buttonClose);
  const { schedule } = useAppSelector(state => state.table);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataSchedule(({
      ...dataSchedule,
      [event.target.name]: event.target.value,
    }))
    setFindValues({
      ...findValues,
      [event.target.name]: event.target.value,
    });
    setFindError({
      ...findError,
      [event.target.name]: '',
    });
  }

  const handleChangeSelect = (event: SelectChangeEvent<string>) => {
    return setDataSchedule((prev) => ({
      ...prev,
      status: event.target.value
    }));
  }

  const handleClick = async () => {
    const verifySchema = await schema
      .validate(findValues, { abortEarly: false })
      .then(() => {
        setFindError(scheduleData)
        return true
      })
      .catch((err) => {
        const currentErrors = { ...scheduleData }
        err.inner.forEach((error: IError) => {
          const str: keyof IError = 'path';
          const getError = error[str];
          currentErrors[getError as keyof typeof currentErrors] = error.message
        })
        setFindError(currentErrors)
        return false
      })
    if(!verifySchema) {
      return;
    }
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
          error={ findError.client !== '' }
          label="Cliente"
          name="client"
          value={ dataSchedule.client }
          helperText={ findError.client }
          variant="outlined"
          type="text"
          style={{ marginTop: 16, width: '100%' }}
          onChange={ handleChange }
        />
        <TextField
          error={ findError.value !== '' }
          label="Valor"
          name="value"
          value={ dataSchedule.value }
          helperText={ findError.value }
          variant="outlined"
          type="text"
          style={{ marginTop: 16, width: '100%' }}
          onChange={ handleChange }
        />
        <TextField
          error={ findError.dueDate !== '' }
          name="dueDate"
          value={ dataSchedule.dueDate }
          helperText={ findError.dueDate }
          variant="outlined"
          type="date"
          style={{ marginTop: 16, width: '100%' }}
          onChange={ handleChange }
        />
        <Select
          defaultValue=""
          labelId="pendente-select-label"
          id="pendente-simple-select"
          label="pendente"
          style={{ marginTop: 16, width: '100%' }}
          onChange={ handleChangeSelect }
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
