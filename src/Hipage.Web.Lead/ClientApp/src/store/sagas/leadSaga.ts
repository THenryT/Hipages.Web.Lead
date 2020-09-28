import { put, takeLatest, fork, call, all } from "redux-saga/effects";
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

function* acceptLead(payload: any) {
  console.log(payload);
  yield all([
    put({ type: ActionType.ACCEPT_LEAD_SUCCESS }),
    put({ type: ActionType.GET_ACCEPTED_LEAD_LOADING }),
    put({ type: ActionType.GET_INVITED_LEAD_LOADING }),
  ]);
}

function* declineLead(payload: any) {
  console.log(payload);
  yield all([
    put({ type: ActionType.DECLINE_LEAD_SUCCESS }),
    put({ type: ActionType.GET_INVITED_LEAD_LOADING }),
  ]);
}

function* getLeadWatcher() {
  yield takeLatest(ActionType.GET_ACCEPTED_LEAD_LOADING, getAcceptedLeads);
  yield takeLatest(ActionType.GET_INVITED_LEAD_LOADING, getInvitedLeads);
  yield takeLatest(ActionType.ACCEPT_LEAD_LOADING, acceptLead);
  yield takeLatest(ActionType.DECLINE_LEAD_LOADING, declineLead);
}

export default [fork(getLeadWatcher)];
