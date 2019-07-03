import React  from 'react';

const Profile = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className='container jumbotron'>            
            <img className='col-sm-2' src= {user.thumbnail} alt="new"/>
            <button className="btn btn-primary btn-lg active">Upload picture</button>
            <hr></hr>
            <p>Name: {user.name}</p>
            <p>Gender: {user.gender}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Interests: {user.hobbies}</p>
        </div>
      );
}

export default Profile;