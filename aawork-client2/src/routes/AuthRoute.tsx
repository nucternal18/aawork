import React from 'react';
import { Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { NonAuthRoutes } from '../utils/Consts';

interface Props {
    Component: React.FC<RouteComponentProps>
    path: string
    exact?: boolean
    isAuth?: boolean
}

export const AuthRoute = ({ Component, path, isAuth, exact = false }: Props): JSX.Element => {
    // const isAuthed = !!localStorage.getItem(token);
    const message = 'Please log in to view this page';

    return (
        <Route
            exact={exact}
            path={path}
            render={(props: RouteComponentProps) => 
                isAuth ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: NonAuthRoutes.login,
                                state: {
                                    message,
                                    requestedPath: path
                                }
                            }}
                        />
                )
            }
        />
    )
}