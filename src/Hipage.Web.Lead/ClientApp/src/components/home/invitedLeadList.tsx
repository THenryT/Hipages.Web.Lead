import React from "react";
import LeadCardContainer from "./leadCardContainer";
import InvitedLeadCard from "./invitedLeadCard";
import { InvitedLeadModel } from "../../models/invitedLead";

interface Props {
  leads: InvitedLeadModel[];
}

export default (props: Props) => {
  const { leads } = props;
  if (leads.length === 0) {
    return <div>No Data</div>;
  }
  return (
    <React.Fragment>
      {leads.map((lead: InvitedLeadModel, index: number) => (
        <LeadCardContainer key={index}>
          <InvitedLeadCard lead={lead} />
        </LeadCardContainer>
      ))}
    </React.Fragment>
  );
};
