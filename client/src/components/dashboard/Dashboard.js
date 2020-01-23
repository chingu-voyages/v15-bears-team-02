import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

function Dashboard(props) {
  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };

  const { user } = props.auth;
  return (
    <div>
      <h4>
        <p>
          <b>Hey </b> {user.name.split(" ")[0]}! You are now logged in{" "}
        </p>
      </h4>
      <button onClick={onLogoutClick}>Logout</button>
    </div>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
