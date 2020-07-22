import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../components/styles/GlobalStyle';
import Header from '../screens/Header';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotScreen from '../screens/ForgotScreen';
import WbnPlayer from '../components/containers/WbnPlayer';
import View from '../screens/View';
const Router = () => (
    <>
        <BrowserRouter basename="/react_videoplayer/">
            <Header />
                <Switch>
                <Route exact path="/:activeVideo" component={WbnPlayer} />
                <Route exact path="/todos/view/:id" component={View} />
                    <Route exact path="/auths/login" component={LoginScreen} />
                    <Route exact path="/auths/register" component={RegisterScreen} />
                    <Route exact path="/auths/forgotpassword" component={ForgotScreen} />
                   
                </Switch>
            <GlobalStyle />
        </BrowserRouter>
    </>

)
export default Router;