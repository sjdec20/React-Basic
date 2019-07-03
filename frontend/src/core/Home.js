import React  from 'react';
import {BrowserRouter} from 'react-router-dom';
import Feed from '../user/Feed';


const Home = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    var styles = {
        color:'red',
        backgroundColor:'black',
        fontWeight:'bold'
    };
    return (
        <div className='jumbotron-fluid container'>
            <img className='col-sm-2' src= {user.thumbnail} alt="new"/>
            <h2 className="nav-item bg-primary" >Welcome {user.name}</h2>
            <Feed />
        </div>
      );
}

export default Home;