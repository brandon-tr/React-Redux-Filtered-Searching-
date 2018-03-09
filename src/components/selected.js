import React, { Component } from "react";
import { connect } from "react-redux";

class Selected extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.user.first}
          {this.props.user.last}
        </p>
        <img src={this.props.user.thumbnail} alt="Ho" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser
  };
}
export default connect(mapStateToProps)(Selected);
