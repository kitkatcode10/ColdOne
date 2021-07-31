import React, { Component } from "react"; 
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from "../SignupPage/SignupPage";
import { render } from "@testing-library/react";


render() {
  return (
    <div className="App">
      <header className="App-header"> Here, have a Cold One Bud! </header>
      <Switch> 
        <Route exact path='/' render={() => 
        
        <SignupPage
        />
        }/>
         </Switch>
        </div>
    );
  }
        
        
export default App; 


/* //        
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>

//        render() {
//          <SignupPage/> 
//        } */}
       
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </Switch>
//     </div>
//   );
// } 

