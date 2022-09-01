export interface ITable {
  createdBy: string;
  client: string;
  value: string;
  status: string;
  dueDate: string;
}

export type TableState = {
  schedule: ITable[],
};

export type TableAction = {
  type: string;
  table: ITable;
};

export interface IError {
  path: string;
  message: string;
}
