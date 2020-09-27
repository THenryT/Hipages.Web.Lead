import { AcceptedLeadModel } from "../../models/acceptedLead";
import { InvitedLeadModel } from "../../models/invitedLead";
import { BaseAction } from "../../models/baseAction";
import * as LeadActions from "../actions/leadActions";

export type LeadPageStateType = {
  invitedLeads: InvitedLeadModel[];
  acceptedLeads: AcceptedLeadModel[];
  loading: boolean;
};

const initialState: LeadPageStateType = {
  invitedLeads: [],
  acceptedLeads: [],
  loading: false,
};

export const leadReducer = (
  state: LeadPageStateType = initialState,
  action: BaseAction
) => {
  switch (action.type) {
    case LeadActions.GET_ACCEPTED_LEAD_LOADING:
      return { ...state, loading: true };

    case LeadActions.GET_ACCEPTED_LEAD_FAIL:
      return { ...state, loading: false };

    case LeadActions.GET_ACCEPTED_LEAD_SUCCESS:
      return { ...state, acceptedLeads: [...action.payload], loading: false };
  }
  return state;
};
