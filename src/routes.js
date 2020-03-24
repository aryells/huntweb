import React from "react";

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from "./pages/main";
import CaseView from "./pages/caseView";

const Routes = () => (
    <BrowserRouter>
        <Switch>
           <Route exact path='/' component={Main} />
           <Route path='{/case/:caseId}' component={CaseView} />
        </Switch>
    </BrowserRouter>
);

export default Routes;