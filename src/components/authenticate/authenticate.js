import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./helper";

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} 
            render = {props => isAuthenticated() ? 
            ( <Component {...props} /> ) : 
            ( <Redirect 
                to={{ pathname: "/account/signin", state: { from: props.location } }} 
            /> ) 
        } />
    );
};

const AuthenticatedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} 
            render = {props => isAuthenticated() ? 
            ( <Component {...props} /> ) : 
            ( <Redirect 
                to={{ pathname: "/account/signin", state: { from: props.location } }} 
            /> ) 
        } />
    );
};

export {ProtectedRoute, AuthenticatedRoute};