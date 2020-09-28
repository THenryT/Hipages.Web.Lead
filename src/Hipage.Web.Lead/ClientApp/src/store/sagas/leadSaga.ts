import { put, takeLatest, fork, call } from "redux-saga/effects";
import { ActionType } from "../actions/leadActions";
import LeadService from "../../services/leadService";

function* getAcceptedLeads() {
  try {
    const leads = yield call(LeadService.GetLeads, "Accepted");
    yield put({ type: ActionType.GET_ACCEPTED_LEAD_SUCCESS, payload: leads });
  } catch (error) {
    yield put({ type: ActionType.GET_ACCEPTED_LEAD_FAIL });
  }
}

function* getInvitedLeads() {
  try {
    const leads = yield call(LeadService.GetLeads, "Created");
    yield put({ type: ActionType.GET_INVITED_LEAD_SUCCESS, payload: leads });
  } catch (error) {
    yield put({ type: ActionType.GET_INVITED_LEAD_FAIL });
  }
}

function* getLeadWatcher() {
  yield takeLatest(ActionType.GET_ACCEPTED_LEAD_LOADING, getAcceptedLeads);
  yield takeLatest(ActionType.GET_INVITED_LEAD_LOADING, getInvitedLeads);
}

export default [fork(getLeadWatcher)];
