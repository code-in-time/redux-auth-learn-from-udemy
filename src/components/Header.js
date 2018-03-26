import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

class Header extends Component {
  renderButtons() {
    if (this.props.authenticated) {
      return (<Link className="nav-link" to="/signout">Sign out</Link>);
    }

    return [
      <Link className="nav-link inline" to="/signup" key={2} style={{ display: 'inline-block' }}>Sign up</Link>,
      <Link className="nav-link inline" to="/signin" key={1} style={{ display: 'inline-block' }}>Sign in</Link>,
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <Link to="/" className="navbar-brand">HOME</Link>
          <li className="nav-item">
            {this.renderButtons()}
          </li>
        </ul>
      </nav>
    );
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};


const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated,
});

export default connect(mapStateToProps)(Header);
