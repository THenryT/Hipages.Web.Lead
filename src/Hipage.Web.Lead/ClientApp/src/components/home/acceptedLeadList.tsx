import React from "react";
import LeadCardContainer from "./leadCardContainer";
import AcceptedLeadCard from "./acceptedLeadCard";
import { AcceptedLeadModel } from "../../models/acceptedLead";

interface Props {
  leads: AcceptedLeadModel[];
}

export default (props: Props) => {
  const { leads } = props;
  if (leads.length === 0) {
    return <div>No Data</div>;
  }
  return (
    <React.Fragment>
      {leads.map((lead: AcceptedLeadModel, index: number) => (
        <LeadCardContainer key={index}>
          <AcceptedLeadCard lead={lead} />
        </LeadCardContainer>
      ))}
    </React.Fragment>
  );
};
