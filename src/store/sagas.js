import { all } from "redux-saga/effects";
import { detect } from "./detect/saga";
// all 함수를 통해 Saga들을 하나로 묶어줄수 있다.
export default function* rootSaga() {
  yield all([detect()]);
}
