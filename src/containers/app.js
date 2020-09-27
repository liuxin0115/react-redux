import React, { Component } from 'react';
import {connect} from 'react-redux';
import count from '../components/count'

import {add, reduce, addAsync} from '../redux/actions'

export default connect(
    state => ({count: state.count}),
    {add, reduce, addAsync}
)(count)


