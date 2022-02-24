import React from 'react';
import {
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch,
    Routes,
    Route
} from "react-router-dom";
import Landing from './landing/Landing';


export default function Layout() {
    return(
        <BrowserRouter>
        <Switch>
        {/* <Route path='/' element={<Landing/>} /> */}
        <Route exact path='/' render={()=><Landing />}/>
        </Switch>
      </BrowserRouter>
    )
}