export interface LoginFormTypes {
  email: string;
  password: string;
  fromServer: string;
  [params: string]: any;
}

export interface RegisterFormTypes {
  email: string;
  password: string;
  password_confirmation: string;
  fromServer: string;
  agreement: boolean;
  [params: string]: any;
}
