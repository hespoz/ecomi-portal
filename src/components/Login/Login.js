import React, { Component } from 'react';

import Step from '../commons/Step';
import Row from '../commons/Row';
import PropTypes from 'prop-types';

const Login = props => {

    return (<Step className="row">
        <div className="offset-4 col-4">

            <Row className="row">
                <div className="col-12 text-center">
                    <h1>Login</h1>
                </div>
            </Row>

            <Row className="row">
                <div className="col-12">
                    <form>

                    {props.serverError ? 
                        (
                            <div className="alert alert-danger" role="alert">
                                {props.serverError}
                            </div>
                        )
                        :
                        (null)
                    }


                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" 
                        className="form-control" 
                        id="email"
                        placeholder="Enter email"
                        value={props.email}
                        onChange={props.onFieldChange}/>
                        { props.email_Error ?
                            (<small id="emailHelp" className="form-text text-muted">Invalid email</small>)
                            :
                            (null)
                        }

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={props.password}
                        onChange={props.onFieldChange}/>
                        { props.password_Error ?
                            (<small id="emailHelp" className="form-text text-muted">Minimum eight characters, at least one uppercase letter, one lowercase letter and one number</small>)
                            :
                            (null)
                        }
                    </div>      
                    <div className="row">
                        <div className="col text-center">
                            <button type="button" className="btn btn-outline-primary" onClick={props.onLogin}>Login</button>
                        </div>
                    </div>
                </form>
                </div>
            </Row>



        </div>
    </Step>);
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    email_Error: PropTypes.bool,
    password_Error: PropTypes.bool
};
  

export default Login