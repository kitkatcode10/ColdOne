// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'; 


// class BeerForm extends Component {
//     isFormInvalid() {

  
// }

//   handleChange = (e) => {
//     this.props.updateMessage('');
//     this.setState({
//       // Using ES2015 Computed Property Names
//       [e.target.name]: e.target.value
//     });
//   }

//   handleBeerFormSubmit = async (e) => {
//     e.preventDefault();
    

//     render () {
//         return (
//         <div className="BeerForm">
//           <form onSubmit={(e) => this.props.handleBeerFormSubmit(e)}>
//             <label> Beer </label>
//             <input type="text" value={this.state.name} name="name" onChange={(e) => this.props.handleBeerFormChange(e)}/>
//             <label> Brewery </label>
//             <input type="text" value={this.state.brewery} name="brewery" onChange={(e) => this.props.handleBeerFormChange(e)} />
//             <label> Location </label>
//             <input type="text" value={this.state.location} name="location" onChange={(e) => this.props.handleBeerFormChange(e)} />
//             <label> Alcohol Content </label> 
//             <input type="number" value={this.state.alcoholContent} name="alcoholContent" onChange={(e) => this.props.handleBeerFormChange(e)} />
//             <label> My Rating </label>
//             <option value="1"></option>
//             <option value="2"></option>
//             <option value="3"></option>
//             <option value="4"></option>
//             <option value="5"></option>
//             <button className="btn btn-default" >Hold my Beer</button>&nbsp;&nbsp;
//             <Link to='/'>Cancel</Link>         
//             </form>
//          </div>
//         )
// }
  
// export default BeerForm;