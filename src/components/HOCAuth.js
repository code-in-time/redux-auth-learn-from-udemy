import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function HOCAuth(WrappedComponent) {
  class wrappedC extends Component {
    render() {
      console.log('------------------------', this.props.authenticated);

      if (this.props.authenticated) {

        return (<WrappedComponent {...this.props} />);
      }

      return (<div>NO ACCESS</div>);

    }
  }

  const mapStateToPropsb = state => ({
    authenticated: state.authReducer.authenticated,
  });

  return connect(mapStateToPropsb)(wrappedC);
}
