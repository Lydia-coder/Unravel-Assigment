import { ILoginInitialState, LoginActions } from "../Interfaces/LoginInterface";
import { LoginActionType } from "../Types/LoginActionType";

export const initialState: ILoginInitialState = {
  userName: "",
  passWord: "",
  success: false,
  loading: false,
  error: {
    status: 0,
    message: "",
  },
};

export default function LoginReducer(
  state: ILoginInitialState = initialState,
  action: LoginActions
): ILoginInitialState {
  switch (action.type) {
    case LoginActionType.LOGIN_REQUESTING:
      return {
        ...state,
        loading: true,
      };
    case LoginActionType.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success:
          action.payload.userName === "cat" &&
          action.payload.passWord === "meow",
        userName: action.payload.userName,
        passWord: action.payload.passWord,
      };
    case LoginActionType.LOGIN_ERROR:
      return {
        ...state,
        success: false,
        error: action.data,
      };
    default:
      return {
        ...state,
      };
  }
}
