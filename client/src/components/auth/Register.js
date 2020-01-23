import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, []);

  useEffect(() => {
    if (props.errors) {
      setErrors(props.errors);
    }
  }, [props]);

  const onNameChange = e => {
    setName(e.target.value);
  };
  const onEmailChange = e => {
    setEmail(e.target.value);
  };
  const onPasswordChange = e => {
    setPassword(e.target.value);
  };
  const onPassword2Change = e => {
    setPassword2(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
      password2: password2
    };
    props.registerUser(newUser, props.history);
  };

  return (
    <div>
      <Link to="/">Back to home</Link>
      <div>
        <h4>Register</h4>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      <form noValidate onSubmit={onSubmit}>
        <div>
          <input
            onChange={onNameChange}
            value={name}
            error={errors.name}
            id="name"
            type="text"
          />
          <label htmlFor="name">Name</label>
          <span>{errors.name}</span>
        </div>
        <div>
          <input
            onChange={onEmailChange}
            value={email}
            error={errors.email}
            id="email"
            type="email"
          />
          <label htmlFor="email">Email</label>
          <span>{errors.email}</span>
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
          <span>{errors.password}</span>
        </div>
        <div>
          <input
            onChange={onPassword2Change}
            value={password2}
            error={errors.password2}
            id="password2"
            type="password"
          />
          <label htmlFor="password2">Confirm Password</label>
          <span>{errors.password2}</span>
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
