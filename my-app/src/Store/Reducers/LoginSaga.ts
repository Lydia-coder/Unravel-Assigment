import { call, put, takeEvery } from "redux-saga/effects";
import { LoginActionType } from "../Types/LoginActionType";
import { ILoginRequestAction } from "../Interfaces/LoginInterface";
import { actions } from "../Actions/LoginActions";
import axios from "axios";

export function* LoginSaga() {
  yield takeEvery(LoginActionType.LOGIN_REQUESTING, loginUserWorker);
}

export function* loginUserWorker(
  data: ILoginRequestAction
): Generator<any, any, any> {
  try {
    const res = yield call(loginUser, data);
    yield put(actions.loginSuccess(res.data));
  } catch (err) {
    yield put(actions.loginFail(err));
  }
}

function loginUser(data: ILoginRequestAction) {
  return axios.post("http://localhost:12000/login", data.data);
}
