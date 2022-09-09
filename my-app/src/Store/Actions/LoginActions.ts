import {
  ILoginFailAction,
  ILoginRequestAction,
  ILoginSuccessAction,
  IUser,
} from "../Interfaces/LoginInterface";
import { LoginActionType } from "../Types/LoginActionType";

export const actions = {
  loginRequest: (data: IUser): ILoginRequestAction => ({
    type: LoginActionType.LOGIN_REQUESTING,
    data: data,
  }),
  loginSuccess: (payload: IUser): ILoginSuccessAction => ({
    type: LoginActionType.LOGIN_SUCCESS,
    payload: payload,
  }),
  loginFail: (data: any): ILoginFailAction => ({
    type: LoginActionType.LOGIN_ERROR,
    data: data,
  }),
};
