import React, { Component } from 'react';
import { Connect } from 'react-redux';
import { reduxForm } from 'redux-form';

class Signup extends Component {
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" type="email" />
          {email.error}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} className="form-control" type="password" />
          {password.error}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input {...passwordConfirm} className="form-control" type="password" />
        </fieldset>

        <button action="submit" type="button" className="btn btn-primary">SIGN UP</button>

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


  return errors;
}

// export default Connect()(Signup);
export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate,
})(Signup);
