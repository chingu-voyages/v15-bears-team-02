import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

function Navbar(props) {
  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };

  return (
    <div>
      <nav>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "red"
          }}
        >
          <Link to="/">NETFLIX</Link>
          {props.auth.isAuthenticated ? (
            <div>
              <span>
                <b>Hey </b> {props.auth.user.name.split(" ")[0]}!
              </span>
              <button onClick={onLogoutClick}>Logout</button>
            </div>
          ) : (
            <div>
              <Link to="/register">Register</Link>{" "}
              <Link to="/login">Log In</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
