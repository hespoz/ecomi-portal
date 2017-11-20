import React, { Component } from 'react';

//Actions
import AuthAction from '../../actions/AuthAction';

//Stores
import AuthStore from '../../stores/AuthStore';

//Components
import Register from '../../components/Register/Register';

import validations from '../../utils/validations'

class RegisterContainer extends React.Component {

    state = {
        dirty:false,
        email:'',
        password:'',
        name:'',
        userType:'SELLER',
        serverError:null
    }

    componentDidMount = () => {
        AuthStore.addChangeListener(this.onChange);
    }

    componentWillUnmount = () => {
        AuthStore.removeChangeListener(this.onChange);
    }

    onRegister = () => {
        this.setState({
            dirty:true,
            email_Error: !this.isFieldValid("email", this.state.email),
            name_Error: !this.isFieldValid("name", this.state.name),
            password_Error: !this.isFieldValid("password", this.state.password)
        }, () => {
            if(!this.state.email_Error && !this.state.password_Error && !this.state.name_Error) {
                AuthAction.register({email:this.state.email, password: this.state.password, name:this.state.name,type:this.state.userType});
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
            switch(fieldId) {
                case 'name':
                    return !validations.isEmpty(value);
                case 'email':
                    return validations.isEmail(value);
                case 'password':
                    return validations.isValidPassword(value);
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
                <Register 
                {...this.state}
                onFieldChange={this.onFieldChange}
                onRegister={this.onRegister}/>
            </div>
        )
    }

}

export default RegisterContainer