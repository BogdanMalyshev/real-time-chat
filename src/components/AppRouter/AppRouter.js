import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Login from "../Login/Login";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../index";
import Chat from "../Chat/Chat";


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <BrowserRouter>
            {
                user ?
                    (
                        <Switch>
                            <Route path="/chat" component={Chat} exact={true}/>
                            <Redirect to="/chat"/>
                        </Switch>
                    )
                    :
                    (
                        <Switch>
                            <Route path="/login" component={Login} exact={true}/>
                            <Redirect to="/login"/>
                        </Switch>
                    )
            }
        </BrowserRouter>
    )
};

export default AppRouter;