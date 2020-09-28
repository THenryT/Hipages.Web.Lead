import { AcceptedLeadModel } from "../../models/acceptedLead";
import { InvitedLeadModel } from "../../models/invitedLead";
import { BaseAction } from "../../models/baseAction";
import { ActionType } from "../actions/leadActions";

export type LeadStateType = {
  invitedLeads: InvitedLeadModel[];
  acceptedLeads: AcceptedLeadModel[];
  isInvitedLeadsLoading: boolean;
  isAccpetedLeadsLoading: boolean;
};

const initialState: LeadStateType = {
  invitedLeads: [],
  acceptedLeads: [],
  isAccpetedLeadsLoading: false,
  isInvitedLeadsLoading: false,
};

export const leadReducer = (
  state: LeadStateType = initialState,
  action: BaseAction
) => {
  switch (action.type) {
    case ActionType.GET_ACCEPTED_LEAD_LOADING:
      return { ...state, isAccpetedLeadsLoading: true };

    case ActionType.GET_ACCEPTED_LEAD_FAIL:
      return { ...state, isAccpetedLeadsLoading: false };

    case ActionType.GET_ACCEPTED_LEAD_SUCCESS:
      return {
        ...state,
        acceptedLeads: [...action.payload],
        isAccpetedLeadsLoading: false,
      };

    case ActionType.GET_INVITED_LEAD_LOADING:
      return { ...state, isInvitedLeadsLoading: true };

    case ActionType.GET_INVITED_LEAD_FAIL:
      return { ...state, isInvitedLeadsLoading: true };

    case ActionType.GET_INVITED_LEAD_SUCCESS:
      return {
        ...state,
        invitedLeads: [...action.payload],
        isInvitedLeadsLoading: true,
      };
  }
  return state;
};
