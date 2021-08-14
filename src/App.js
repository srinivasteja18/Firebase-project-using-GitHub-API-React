import React,{useContext,useState} from 'react';
import './App.css';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';

import firebase from 'firebase/app';
import "firebase/firebase-auth"

import {BrowserRouter as Router,Route, Link, Switch, Redirect} from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import  "react-toastify/dist/ReactToastify.min.css"


import UserContext from "./context/UserContext"
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

import firebaseConfig from './config/firebaseConfig'

firebase.initializeApp(firebaseConfig);
function App() {
  const [users,setUsers] = useState(null);

  
  return (
    <Router>
      <UserContext.Provider value={{users,setUsers}}>
        <div className="container">
          <NavBar/>
          <Switch>
            <Route exact path="/"><Dashboard/></Route>
            <Route exact path="/Home" ><Home/></Route>
            <Route exact path="/Signup" ><Signup/></Route>
            <Route exact path="/Signin"  ><Signin/></Route>
            <Route exact path="*"  ><PageNotFound/></Route>
          </Switch>
          <Footer/>
        </div>
      </UserContext.Provider>
    </Router>
  );
}
export default App;
