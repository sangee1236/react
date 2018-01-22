import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from  'react-redux' ;
import {BrowserRouter as Router,Route } from 'react-router-dom';

import Login from '../js/components/login/login.js';
import  LogTimeSheet from '../js/components/LogTimesheet/log-timesheet';

const Root =({store})=>(
    <Provider store = {store}>
        <Router>
            <div>
            <Route Path ="/:filter?" component = {Login}/>
            <Route path="LogTimeSheet" component ={LogTimeSheet}/>
            </div>
            </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default  Root ;