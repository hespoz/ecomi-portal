import React, { Component } from 'react';

//Actions
import AuthAction from '../../actions/AuthAction';

//Stores
import AuthStore from '../../stores/AuthStore';

//Components
import Login from '../../components/Login/Login';

import validations from '../../utils/validations'

class LoginContainer extends React.Component {

    state = {
        dirty:false,
        email:'',
        password:'',
        serverError:null
    }

    componentDidMount = () => {
        AuthStore.addChangeListener(this.onChange);
    }

    componentWillUnmount = () => {
        AuthStore.removeChangeListener(this.onChange);
    }

    onLogin = () => {
        this.setState({
            dirty:true,
            email_Error: !this.isFieldValid("email", this.state.email),
            password_Error: !this.isFieldValid("password", this.state.password)
        }, () => {
            if(!this.state.email_Error && !this.state.password_Error && !this.state.name_Error) {
                //AuthAction.register({email:this.state.email, password: this.state.password, name:this.state.name,type:this.state.userType});
            }
        });
    }

    onFieldChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value,
            [e.target.id + '_Error'] : !this.isFieldValid(e.target.id, e.target.value) && this.state.dirty
        });
    }

    isFieldValid = (fieldId, value) => { 
            console.log(fieldId)
            switch(fieldId) {
                case 'email':
                    return validations.isNotEmpty(value);
                case 'password':
                    return validations.isNotEmpty(value);
                default:
                    return true;
                    break;    
            }
    }

    onChange = () => {
        this.setState({serverError:AuthStore.getServerError()});
    }

    render = () => {
        return (
            <div className="container">
                <Login 
                {...this.state}
                onFieldChange={this.onFieldChange}
                onLogin={this.onLogin}/>
            </div>
        )
    }

}

export default LoginContainer