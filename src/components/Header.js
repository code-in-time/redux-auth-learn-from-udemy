import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Header extends Component {
  renderButtons() {
    if (this.props.authenticated) {
      return (<div>Sign out</div>);
    }

    return (<div>Sign in</div>);
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
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
