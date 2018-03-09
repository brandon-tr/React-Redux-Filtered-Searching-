import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "./redux/actions/userAction";
import { Link } from "react-router-dom";
import { searchUser } from "./redux/actions/userAction";

class List extends Component {
  render() {
    const users = this.props.users.map(user => {
      return (
        <li key={user.id} onClick={this.props.selectUser.bind(this, user)}>
          <Link to="/profile">{user.first}</Link>
        </li>
      );
    });
    return (
      <div>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search for user"
            onChange={this.props.searchUser.bind(this)}
          />
          <ul>{users}</ul>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  if (state.filterUser) {
    console.log("123");
    return {
      users: state.users.filter(filtered => {
        if (filtered.first.toLowerCase().indexOf(state.filterUser) > -1) {
          return filtered;
        }
      })
    };
  } else {
    return {
      users: state.users
    };
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectUser: selectUser,
      searchUser: searchUser
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(List);
