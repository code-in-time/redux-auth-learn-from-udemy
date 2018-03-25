import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        MY heading
        {this.props.children}
      </div>
    );
  }
}
