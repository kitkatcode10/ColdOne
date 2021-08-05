import React, { Component } from "react"; 
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from "../SignupPage/SignupPage";
import NavBar from "../../components/NavBar/NavBar"; 
import HomePage from '../HomePage/HomePage'; 
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'; 


class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
render() {
  return (
    <div className="App">
      <header className="App-header"> <NavBar/> <p>Here, have a Cold One Bud! </p></header>
      <Switch> 
        <Route exact path='/signup' render={({ history }) =>   
        <SignupPage
          history={history}
          />
        }/>
        <Route exact path='/login' render={() => 
          <LoginPage
          />
        }/>
      <Route exact path='/' render={() => 
      <HomePage
        />
      }/>
      </Switch>
      </div>
    );
  }
}
        
        
export default App; 

