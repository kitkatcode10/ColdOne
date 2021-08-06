import React, { Component } from "react"; 
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from "../SignupPage/SignupPage";
import HomePage from '../HomePage/HomePage'; 
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'; 
import NavBar from "../../components/NavBar/NavBar";
import tokenService from '../../utils/tokenService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(), 
      brewery: "",
      myRating: "", 
    };
  }

    handleSignupOrLogin = () => {
      this.setState({ user: userService.getUser() }); 
    };

    handleLogout = () => {
      userService.logout();
      this.setState({ user: null });
    };


render() {
  return (
    <div className="App">
      <header className="App-header"> 
        <NavBar
        {...this.props}
        user={this.state.user}
        handleLogout={this.handleLogout} 
        />
        <p>Here, have a Cold One Bud! 🍺 </p></header>
      
      <Switch> 
        <Route exact path='/signup' render={({ history }) =>   
        <SignupPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
      <Route exact path='/' render={() => 
      <HomePage
        />
      }/>
      <Route exact path='/mybeers' render={() => 
        userService.getUser() ?
        <HomePage /> 
          :
        <Redirect to='/login' />
      }/>

      </Switch>
      </div>
    );
  }
}
        
        
export default App; 

