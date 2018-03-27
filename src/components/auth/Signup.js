import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';
import { signupUser } from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps) {
    // call Action creator
    console.log('SUBMIT', formProps);
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }

    return ('');
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
          { email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} className="form-control" type="password" />
          { password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input {...passwordConfirm} className="form-control" type="password" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">SIGN UP</button>

      </form>
    );
  }
}

function validate(formProps) {
  const { email, password, passwordConfirm } = formProps;

  const errors = {};

  console.log('validate', formProps);
  if (email === '') {
    errors.email = 'eMail must not be blank';
  }
  if (password === '') {
    errors.password = 'password must not be blank';
  }

  if (password !== passwordConfirm) {
    errors.password = 'passwords DO NOT match';
  }

  console.log('errors', errors);

  return errors;
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errorMessage: state.authReducer.error,
});

// export default Connect()(Signup);
export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate,
}, mapStateToProps, { signupUser })(Signup);

