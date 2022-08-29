export default class GenericError extends Error {
  public status: number;
  constructor(status: number, messenger: string) {
    super(messenger);
    this.status = status;
  }
}
