import { takeEvery, put } from "redux-saga/effects";
import { GO_TO_SHOPING_ACTIONS, GO_TO_SHOPING_TYPES } from "./actions";
import Api from "../../api";

function* ageUpAsync(action) {
  try {
    yield put({ type: GO_TO_SHOPING_TYPES.REQUESTED });
    const payload = yield Api.postTrade(action.payload);
    console.log("result : ", payload);
    yield put({ type: GO_TO_SHOPING_TYPES.SUCCEEDED });
  } catch (error) {
    yield put({ type: GO_TO_SHOPING_TYPES.FAILED });
  }
}

export function* detect() {
  yield takeEvery(GO_TO_SHOPING_TYPES.INDEX, ageUpAsync);
}
