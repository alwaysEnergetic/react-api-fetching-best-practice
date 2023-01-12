import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../utils/hoc/PrivateRoute";

import admin from '../components/Admin';

function Router() {
    return(
        <Switch>
            <Route exact path="/" component={admin} />
        </Switch>
    )
}

export default Router