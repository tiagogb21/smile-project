export interface RegisterType {
  name: string;
  email: string;
  password: string;
  isSubmitting: boolean;
  errorMessage: boolean;
}

export type Register = RegisterType[];

export type RegisterArray = {
  register: Array<RegisterType>;
};

