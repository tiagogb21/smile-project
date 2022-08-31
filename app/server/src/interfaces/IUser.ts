export default interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export type IJWT = Omit<IUser, "password">;

export type IToken = {
  username: string;
  email: string;
};

export type ITokenData = {
  data: IToken;
};
