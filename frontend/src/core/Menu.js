import React  from 'react';
import {Link} from 'react-router-dom';

const isAuthenticated = () =>{
    if(typeof window === undefined){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return (localStorage.getItem('jwt'));
    }else{
        return false;
    }
}
const Menu = () =>{
    let username = JSON.parse(localStorage.getItem('user')).name
   return (
       <div>
           <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link className='nav-link' to='/'> Home </Link>
                </li>
                <li className="nav-item" style={{display: !isAuthenticated() ? "": "none"}}>
                    <Link className='nav-link' to='/signin'> Sign in </Link>
                </li>
                <li className="nav-item" style={{display: !isAuthenticated() ? "": "none"}}>
                    <Link className='nav-link' to='/signup'> Sign up </Link>
                </li>  
                <li className="nav-item" style={{display: isAuthenticated() ? "": "none"}}>
                    <Link className='nav-link' to='/profile'> {username} </Link>
                </li> 
                <li className="nav-item" style={{display: isAuthenticated() ? "": "none"}}>
                    <a className='nav-link'> Sign out </a>
                </li> 
            </ul>
       </div>
   )
}

export default Menu;



