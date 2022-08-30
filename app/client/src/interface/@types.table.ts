export interface ITable {
  id: number;
  date: string;
  user: string;
  client: string;
  value: string;
  status: string;
}

export type TableState = {
  schedule: ITable[],
};

export type TableAction = {
  type: string;
  table: ITable;
};
