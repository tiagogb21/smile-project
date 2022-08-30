export default interface IUser {
  id?: number;
  username: string;
  role: "admin" | "user";
  email: string;
  password: string;
}

export type IJWT = Omit<IUser, "password">;

export type ILogin = Omit<IUser, "role" | "username">;
export type IRegister = Omit<IUser, "role">;

export type IToken = {
  role: string;
  username: string;
  email: string;
};

export type ITokenData = {
  data: IToken;
};
