import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import { input } from '../actions/App';

const mapStateToProps = (state, ownProps) => ({
  value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInput:(value) => {
    dispatch(input(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
