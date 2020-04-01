import React from "react";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from "./pages/main";
import CaseView from "./pages/caseView";
import CaseNew from "./pages/caseNew";
import CaseEdit from "./pages/caseEdit";

const Routes = () => (
    <BrowserRouter h>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/case/:caseId' component={CaseView}/>
            <Route exact path='/new/case' component={CaseNew}/>
            <Route exact path='/edit/case/:caseId' component={CaseEdit}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;