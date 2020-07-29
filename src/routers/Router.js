import React, { useCallback } from "react";
import { BrowserRouter,Redirect, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../components/styles/GlobalStyle';
import Header from '../screens/Header';
import checkAuth from '../screens/jwts/CheckAuth';
import appRouters from './Index';
function Router() {
    const AuthRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            checkAuth() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/' }} />
                )
        )} />
    )
    const renderRouter = useCallback(() =>
        appRouters.map((router, index) => {
            return (
                <AuthRoute
                    key={index.toString()}
                    path={`${router.parentPath}${router.path}`}
                    component={router.component}
                    exact={router.exact === true}
                />
            );
        }), []);
    return (
        <BrowserRouter basename="/react_videoplayer/">
            <Header />
            <Switch>
                {renderRouter()}
            </Switch>
            <GlobalStyle />
        </BrowserRouter>
    );
}
export default Router;
