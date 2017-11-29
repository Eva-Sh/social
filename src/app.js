import React, { Component } from 'react';

import Login from './components/registration/login';

import './main.less';

export default class App extends Component {
    render() {
        return (
           <div className='wrapper-app'>
               <Login />
           </div>
        )
    }
}