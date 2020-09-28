import React from "react";
import { Card, Avatar, Button } from "antd";
import { HomeOutlined, HddOutlined } from "@ant-design/icons";
import { InvitedLeadModel } from "../../models/invitedLead";
import { LeadCartContentWithUnderline } from "./leadCardContentWithUnderLine";
import { LeadCardItem } from "./LeadCardItem";
interface Props {
  lead: InvitedLeadModel;
}

export default (props: Props) => {
  const { lead } = props;
  return (
    <Card>
      <Card.Meta
        avatar={<Avatar>{lead.firstName[0]}</Avatar>}
        title={lead.firstName}
        description={lead.createdDate}
      />
      <LeadCartContentWithUnderline>
        <LeadCardItem>
          <HomeOutlined /> {lead.suburb}{" "}
        </LeadCardItem>
        <LeadCardItem>
          <HddOutlined /> {lead.category}
        </LeadCardItem>
        <LeadCardItem>Job Id:{lead.id}</LeadCardItem>
      </LeadCartContentWithUnderline>
      <LeadCartContentWithUnderline>
        <Button type="primary">Accept</Button>
        <Button type="primary" danger>
          Decline
        </Button>
        <LeadCardItem>{lead.price} Lead Invitation</LeadCardItem>
      </LeadCartContentWithUnderline>
    </Card>
  );
};
