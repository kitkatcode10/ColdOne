import React from 'react';
import { Link } from 'react-router-dom';  
import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar';
import BeerForm from '../../components/BeerForm/BeerForm'


const HomePage = (props) => {
    return(
        <div className="HomePage">
        <NavBar user={props.user} handleLogout={props.handleLogout}
        />
        { props.user && <Link className='btn btn-default HomePage-link-margin' to='/mybeers'> MY BEERS</Link>} 
        <BeerForm/> 
        </div> 

        
        // make links to create, update, and delete beers 
    );
};

export default HomePage; 

