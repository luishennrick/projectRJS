import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Config from './pages/config';
export default function route () {
    
    return (

      <Switch>
         
         <Route exact path="/">
            <Home/>
         </Route>

         <Route exact path="/config">
            <Config/>
         </Route>

         <Route exact path="/sobre">

         </Route>

      </Switch>

    );



}