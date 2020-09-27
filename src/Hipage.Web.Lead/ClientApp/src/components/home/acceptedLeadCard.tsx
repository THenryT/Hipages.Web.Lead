import React from "react";
import { Card, Avatar, Button } from "antd";
import {
  HomeOutlined,
  MediumWorkmarkOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { AcceptedLeadModel } from "../../models/acceptedLead";

interface Props {
  lead: AcceptedLeadModel;
}

export default (props: Props) => {
  const { lead } = props;
  return (
    <Card>
      <div>
        <Avatar>{lead.fullname[0]}</Avatar>
        <div>{lead.fullname}</div>
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
        <span>{lead.price} Lead Invitation</span>
      </div>
      <div>
        <div>
          <span>
            <PhoneOutlined />
            {lead.phoneNum}
          </span>
          <span>
            <MailOutlined /> {lead.email}
          </span>
        </div>
        <div>{lead.description}</div>
      </div>
    </Card>
  );
};
