import React from "react";
import { Card, Avatar, Button } from "antd";
import { HomeOutlined, MediumWorkmarkOutlined } from "@ant-design/icons";
import { InvitedLeadModel } from "../../models/invitedLead";

interface Props {
  lead: InvitedLeadModel;
}

export default (props: Props) => {
  const { lead } = props;
  return (
    <Card>
      <div>
        <Avatar>{lead.firstName[0]}</Avatar>
        <div>{lead.firstName}</div>
        <div>{lead.createdDate}</div>
      </div>
      <div>
        <span>
          <HomeOutlined /> {lead.suburb}{" "}
        </span>
        <span>
          <MediumWorkmarkOutlined /> {lead.category}
        </span>
        <span>Job Id: {lead.id}</span>
      </div>
      <div>{lead.description}</div>
      <div>
        <Button type="primary">Accept</Button>
        <Button type="primary" danger>
          Decline
        </Button>
        <span>{lead.price} Lead Invitation</span>
      </div>
    </Card>
  );
};
