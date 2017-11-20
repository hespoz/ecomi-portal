import React, { Component } from 'react';

import Step from '../commons/Step';
import PropTypes from 'prop-types';

const Register = props => {

    return (<Step className="row">
        <div className="offset-3 col-4">
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
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" 
                     className="form-control" 
                     id="name"
                     placeholder="Enter name"
                     value={props.name}
                     onChange={props.onFieldChange}/>
                     { props.email_Error ?
                        (<small id="nameHelp" className="form-text text-muted">Name is required</small>)
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
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Tipo Usuario</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={props.userType}>
                        <option selected id="SELLER">Vendedor</option>
                        <option id="BUYER">Comprador</option>
                    </select>
                </div>              
                <div className="row">
                    <div className="col text-center">
                        <button type="button" className="btn btn-outline-primary" onClick={props.onRegister}>Register</button>
                    </div>
                </div>
            </form>
        </div>
    </Step>);
}

Register.propTypes = {
    onRegister: PropTypes.func.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    email_Error: PropTypes.bool,
    password_Error: PropTypes.bool
};
  

export default Register