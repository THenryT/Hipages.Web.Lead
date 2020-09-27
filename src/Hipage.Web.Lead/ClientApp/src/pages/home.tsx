import * as React from "react";
import { connect } from "react-redux";

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Hello Customer !!</h1>
      </div>
    );
  }
}

export default connect()(Home);
