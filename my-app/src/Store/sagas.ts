import { fork, all } from "redux-saga/effects";
import map from "lodash/map";
import { LoginSaga } from "./Reducers/LoginSaga";

const combinedSagas = [LoginSaga];

export default function* root() {
  yield all(map(combinedSagas, fork));
}
