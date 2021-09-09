
import React,{useState,useEffect} from 'react';
import './App.css';
import Profile from './components/Profile';
import {Switch,Route,Link} from 'react-router-dom';
import DetailPage from './components/DetailPage'
function App() {
//Setup thedifferent routes for the profile and the details page using react-router-dom
  return (
    <Switch>
      <Route  exact path="/">
           <Profile/>
        </Route>
        <Route path="/details/:login">
           <DetailPage/>
        </Route>
    </Switch>
  );
}

export default App;
