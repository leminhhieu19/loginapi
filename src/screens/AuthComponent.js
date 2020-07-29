import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getJwt } from '../screens/jwts/index';

class AuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const jwt = getJwt();
    if (!jwt) {
      this.setState({
        user: null
      });
      return;
    }

    axios.get('https://milky-auth.herokuapp.com/login', { headers: { Authorization: getJwt() } }).then(res => {
      this.setState({
        user: res.data.result.access_token
      })
    });
  }

  render() {
    const { user } = this.state;
    if (user === undefined) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    if (user === null) {
      this.props.history.push('https://milky-auth.herokuapp.com/login');
    }

    return this.props.children;
  }
}

export default withRouter(AuthComponent);