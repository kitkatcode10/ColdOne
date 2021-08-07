import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';
import image from './Brewskis.jpg'

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
     
      <img src={image} width='100%'/>
      </div>
    );
  }
}

export default SignupPage;