import React, { Component } from 'react';

import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';

import './login.less';


const styles = {
    errorStyle: {
        color: '#D50000',
    },
    underlineStyle: {
        borderColor: '#81D4FA',
    },
    floatingLabelStyle: {
        color: '#6b6968',
    },
    floatingLabelFocusStyle: {
        color: '#E0E0E0',
    },
    marginButton: {
        margin: 20
    }

};

export default class Login extends Component {
    render() {
        return (
            <div className='authorization-block'>
                <h1 className="authorization-block__title">Register</h1>
               <form className="authorization-block__form">
                   <TextField
                       hintText="Login"
                       floatingLabelText="Login"
                       hintStyle={styles.floatingLabelStyle}
                       underlineFocusStyle={styles.underlineStyle}
                       floatingLabelStyle={styles.floatingLabelStyle}
                   /><br />
                   <TextField
                       hintText="Password"
                       floatingLabelText="Password"
                       type="password"
                       hintStyle={styles.floatingLabelStyle}
                       underlineFocusStyle={styles.underlineStyle}
                       floatingLabelStyle={styles.floatingLabelStyle}
                   /><br />
                   <RaisedButton
                       label="Sign in"
                       labelColor="#6b6968"
                       backgroundColor="#b3e5fc"
                       className='login-button'
                   />
               </form>
            </div>
        )
    }
}
