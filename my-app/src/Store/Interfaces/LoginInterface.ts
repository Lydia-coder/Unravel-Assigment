import { Action } from "redux";
import { LoginActionType } from "../Types/LoginActionType";

export interface IUser {
  userName: string;
  passWord: string;
}
export interface IError {
  status: number;
  message: string;
}

export interface ILoginInitialState {
  userName: string;
  passWord: string;
  success: boolean;
  loading: boolean;
  error: IError;
}

export interface ILoginRequestAction extends Action {
  type: typeof LoginActionType.LOGIN_REQUESTING;
  data: IUser;
}

export interface ILoginSuccessAction extends Action {
  type: typeof LoginActionType.LOGIN_SUCCESS;
  payload: IUser;
}
export interface ILoginFailAction extends Action {
  type: typeof LoginActionType.LOGIN_ERROR;
  data: any;
}

export type LoginActions =
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailAction;
