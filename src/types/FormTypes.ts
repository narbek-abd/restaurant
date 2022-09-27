export interface LoginFormTypes {
  email: string;
  password: string;
  [params: string]: any;
}

export interface RegisterFormTypes {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  fromServer: string;
  agreement: boolean;
  [params: string]: any;
}
