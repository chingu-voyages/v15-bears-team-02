import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Landing(props) {
  return (
    <div>
      <h4>Welcome</h4>
      <br />
      {props.auth.isAuthenticated ? (
        "Logged In"
      ) : (
        <div>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Log In</Link>
          </div>
        </div>
      )}
    </div>
  );
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null)(Landing);
