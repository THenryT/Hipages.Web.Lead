import { put, takeLatest, fork } from "redux-saga/effects";
import { ActionType } from "../actions/leadActions";
import { AcceptedLeadModel } from "../../models/acceptedLead";
import { InvitedLeadModel } from "../../models/invitedLead";

function* getAcceptedLeads() {
  const leads: AcceptedLeadModel[] = [
    {
      fullname: "Henry Zhang",
      phoneNum: "0424 513 454",
      email: "henryz@gmail.com",
      createdDate: "September 5 2018 @ 10:36 am",
      suburb: "Sydney",
      category: "General Building Work",
      id: "5141895",
      description: "Plater exposed brick walls",
      price: "$26.00",
    } as AcceptedLeadModel,
  ];
  yield put({ type: ActionType.GET_ACCEPTED_LEAD_SUCCESS, payload: leads });
}

function* getInvitedLeads() {
  const leads: InvitedLeadModel[] = [
    {
      firstName: "Henry",
      createdDate: "September 5 2018 @ 10:36 am",
      suburb: "Sydney",
      category: "General Building Work",
      id: "5141895",
      description: "Plater exposed brick walls",
      price: "$26.00",
    } as InvitedLeadModel,
  ];
  yield put({ type: ActionType.GET_INVITED_LEAD_SUCCESS, payload: leads });
}

function* getLeadWatcher() {
  yield takeLatest(ActionType.GET_ACCEPTED_LEAD_LOADING, getAcceptedLeads);
  yield takeLatest(ActionType.GET_INVITED_LEAD_LOADING, getInvitedLeads);
}

export default [fork(getLeadWatcher)];
