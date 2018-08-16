import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      const { authenticated } = this.props.userAuth;
      if (!authenticated) {
        this.props.history.push('/');
      }
    };

    render() {
      return <ChildComponent {...this.props} />;
    }
  };

  function mapStateToProps({ userAuth }) {
    return {
      userAuth
    }
  };

  return withRouter(connect(mapStateToProps, null)(ComposedComponent));
};
