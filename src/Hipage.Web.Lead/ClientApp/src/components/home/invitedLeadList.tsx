import React from "react";
import LeadCardContainer from "./leadCardContainer";
import InvitedLeadCard from "./invitedLeadCard";
import { InvitedLeadModel } from "../../models/invitedLead";

interface Props {
  leads: InvitedLeadModel[];
  acceptLead: (id: string) => void;
  declineLead: (id: string) => void;
}

const list = (props: Props) => {
  const { leads, acceptLead, declineLead } = props;
  if (leads.length === 0) {
    return <div>No Data</div>;
  }
  return (
    <React.Fragment>
      {leads.map((lead: InvitedLeadModel, index: number) => (
        <LeadCardContainer key={index}>
          <InvitedLeadCard
            lead={lead}
            acceptLead={acceptLead}
            declineLead={declineLead}
          />
        </LeadCardContainer>
      ))}
    </React.Fragment>
  );
};

export default React.memo(list);
