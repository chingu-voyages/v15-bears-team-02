import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const onEmailChange = e => {
    setEmail(e.target.value);
  };
  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };
    props.loginUser(userData);
  };

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, []);

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
    if (props.errors) {
      setErrors(props.errors);
    }
  }, [props]);

  return (
    <div className="container">
      <div>
        <div>
          <div>
            <h4>Login</h4>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div>
              <input
                onChange={onEmailChange}
                value={email}
                error={errors.email}
                id="email"
                type="email"
              />
              <label htmlFor="email">Email</label>
              <span>
                {errors.email}
                {errors.emailnotfound}
              </span>
            </div>
            <div>
              <input
                onChange={onPasswordChange}
                value={password}
                error={errors.password}
                id="password"
                type="password"
              />
              <label htmlFor="password">Password</label>
              <span>
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </div>
            <div>
              <button style={{}} type="submit">
                Login
              </button>
            </div>
          </form>
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { loginUser })(Login);
