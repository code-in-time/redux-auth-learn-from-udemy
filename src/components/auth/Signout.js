import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>
        good bye, you are now signed out.
      </div>
    );
  }
}

Signout.propTypes = {
  signoutUser: PropTypes.func.isRequired,
};

export default connect(null, actions)(Signout);
