import axios from 'axios';
import { ITable } from '../interface/table.interface';

export const createSchedule = async (schedule:ITable) => await axios.post(
  'http://localhost:3001/schedule',
  { ...schedule },
).then((result) => result)
.catch((error) => error);
