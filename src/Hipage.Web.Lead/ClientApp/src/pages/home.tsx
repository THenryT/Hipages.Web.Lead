import * as React from "react";
import { Tabs } from "antd";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import AcceptedLeadList from "../components/home/acceptedLeadList";
import InvitedLeadList from "../components/home/invitedLeadList";
import { AcceptedLeadModel } from "../models/acceptedLead";
import { InvitedLeadModel } from "../models/invitedLead";
import { RootStateType } from "../store/reducers";
import {
  acceptLeadAction,
  declineLeadAction,
  getAcceptedLeadAction,
  getInvitedLeadAction,
} from "../store/actions/leadActions";

interface Props extends RouteComponentProps {
  invitedLeads: InvitedLeadModel[];
  acceptedLeads: AcceptedLeadModel[];
  getAcceptedLeads: () => void;
  getInvitedLeads: () => void;
  acceptLead: (id: string) => void;
  declineLead: (id: string) => void;
}

class Home extends React.PureComponent<Props> {
  async componentDidMount() {
    this.props.getAcceptedLeads();
    this.props.getInvitedLeads();
  }

  render() {
    const { invitedLeads, acceptedLeads, acceptLead, declineLead } = this.props;
    return (
      <Tabs defaultActiveKey="1" centered>
        <Tabs.TabPane tab="Invited" key="1">
          <InvitedLeadList
            leads={invitedLeads}
            acceptLead={acceptLead}
            declineLead={declineLead}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Accepted" key="2">
          <AcceptedLeadList leads={acceptedLeads} />
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

function mapStateToProps(state: RootStateType) {
  return {
    invitedLeads: state.leadPage.invitedLeads,
    acceptedLeads: state.leadPage.acceptedLeads,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getAcceptedLeads: () => dispatch(getAcceptedLeadAction()),
    getInvitedLeads: () => dispatch(getInvitedLeadAction()),
    acceptLead: (id: string) => dispatch(acceptLeadAction(id)),
    declineLead: (id: string) => dispatch(declineLeadAction(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
