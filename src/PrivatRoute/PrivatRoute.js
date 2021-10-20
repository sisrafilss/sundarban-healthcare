import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner'

const PrivatRoute = ({ children, ...rest }) => {

    // import user from useAuth custom hook
    const { user, isLoading } = useAuth();

    // Diplaying spinner till loading user data
    if (isLoading) {
        return  <p className="text-center pt-4"><Spinner style={{height: '50px', width: '50px'}} animation="grow" variant="primary" /></p>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivatRoute;