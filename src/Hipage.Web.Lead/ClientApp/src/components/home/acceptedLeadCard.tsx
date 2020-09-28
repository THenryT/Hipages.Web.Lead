import React from "react";
import { Card, Avatar } from "antd";
import {
  HomeOutlined,
  HddOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { LeadCartContentWithUnderline } from "./leadCardContentWithUnderLine";
import { LeadCardItem } from "./LeadCardItem";
import { AcceptedLeadModel } from "../../models/acceptedLead";

interface Props {
  lead: AcceptedLeadModel;
}

export default (props: Props) => {
  const { lead } = props;
  return (
    <Card>
      <Card.Meta
        avatar={<Avatar>{lead.fullname[0]}</Avatar>}
        title={lead.fullname}
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
        <LeadCardItem>{lead.price} Lead Invitation</LeadCardItem>
      </LeadCartContentWithUnderline>
      <LeadCartContentWithUnderline>
        <LeadCardItem>
          <PhoneOutlined />
          {lead.phoneNum}
        </LeadCardItem>
        <LeadCardItem>
          <MailOutlined /> {lead.email}
        </LeadCardItem>
        <div>{lead.description}</div>
      </LeadCartContentWithUnderline>
    </Card>
  );
};
