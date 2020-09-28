export const ActionType = {
  GET_ACCEPTED_LEAD_LOADING: "GET_ACCEPTED_LEAD_LOADING",
  GET_ACCEPTED_LEAD_FAIL: "GET_ACCEPTED_LEAD_FAIL",
  GET_ACCEPTED_LEAD_SUCCESS: "GET_ACCEPTED_LEAD_SUCCESS",
  GET_INVITED_LEAD_LOADING: "GET_INVITED_LEAD_LOADING",
  GET_INVITED_LEAD_FAIL: "GET_ACCEPTED_LEAD_FAIL",
  GET_INVITED_LEAD_SUCCESS: "GET_INVITED_LEAD_SUCCESS",
  ACCEPT_LEAD_LOADING: "ACCEPT_LEAD_LOADING",
  DECLINE_LEAD_LOADING: "DECLINE_LEAD_LOADING",
  ACCEPT_LEAD_SUCCESS: "ACCEPT_LEAD_SUCCESS",
  DECLINE_LEAD_SUCCESS: "DECLINE_LEAD_SUCCESS",
};

export const getAcceptedLeadAction = () => {
  return { type: ActionType.GET_ACCEPTED_LEAD_LOADING };
};

export const getInvitedLeadAction = () => {
  return { type: ActionType.GET_INVITED_LEAD_LOADING };
};

export const acceptLeadAction = (id: string) => {
  return { type: ActionType.ACCEPT_LEAD_LOADING, payload: id };
};

export const declineLeadAction = (id: string) => {
  return { type: ActionType.DECLINE_LEAD_LOADING, paylaod: id };
};
