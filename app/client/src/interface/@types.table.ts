export interface ITable {
  dueDate: string;
  createdBy: string;
  // client: string;
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

