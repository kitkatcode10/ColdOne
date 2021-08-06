import React, { Component } from "react"; 
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from "../SignupPage/SignupPage";
import NavBar from "../../components/NavBar/NavBar"; 
import HomePage from '../HomePage/HomePage'; 
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'; 


class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      user: userService.getUser() 
    };
  }

  getInitialState() {
    return {

    };
  }

    handleLogout = () => {
      userService.logout();
      this.setState({user: null})
    }

    handleSignupOrLogin = () =>{
      this.setState({user: userService.getUser()}); 
    }


render() {
  return (
    <div className="App">
      <header className="App-header"> <p>Here, have a Cold One Bud! 🍺 </p></header>
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
      <Route exact path='/mybeers' render={() => (
        userService.getUser() ?
        <HomePage /> 
          :
        <Redirect to='/login' />
      )}/>

      </Switch>
      </div>
    );
  }
}
        
        
export default App; 

