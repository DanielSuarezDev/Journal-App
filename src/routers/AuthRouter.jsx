import React from 'react';
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegistresrScreen } from '../components/auth/RegistresrScreen';

export const AuthRouter = () => {
    return (
        <div className='auth__main'>
            <div className='auth__box-container'>
             <Switch>
                    <Route exact path="/auth/login" component={LoginScreen} />      
                    <Route exact path="/auth/register" component={RegistresrScreen} /> 
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}