import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import  {Provider}from 'react-redux';

import Root from '../Routing/Root';
import allReducers from './reducers/index';
const store = createStore(allReducers);

import Login from '../js/components/login/login'
import  LogTimeSheet from '../js/components/LogTimesheet/log-timesheet';

ReactDOM.render(
    <Root store ={store} />
    ,document.getElementById('root')
);
