import React, {Component}  from 'react';

class Signin extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            error: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }  

    handleChange = name => event => {
        this.setState({
            [name] : event.target.value
        })
    }

    submitForm = event => {
        event.preventDefault();
        let {email, password, error} = this.state;
         if(email === ""){
            error = "Please fill in the email field!!!";
        }        
        else if(password === ""){
            error = "Please fill in the password field!!!";
        }        
        if(error === ""){         
            const user = {
                email,
                password              
            } 
            console.log("Login Details", user);
            this.setState({             
                email:"",
                password:"",
                error : "",
            })
        } else{
            this.setState({
                error : error
            })
            console.log("Error: ", error)
        }
    }

    signinForm (email,password){
        return (
            <form>   
                <div className='form-group'>
                    <label className='text-muted'>Email:</label>
                    <input type='email' onChange = {this.handleChange('email')} value={email}  className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label className='text-muted'>Password:</label>
                    <input type='password' onChange = {this.handleChange('password')} value={password} className='form-control'></input>
                </div>
                <button className='btn btn-raised btn-primary' onClick={this.submitForm}>
                    Signin
                </button>
            </form>  
        )
    }

    render(){
        let {fname, lname, email, password, error, open} = this.state;
        return (
            <div className='container'>
                <h2 className='mt-5 mb-5 text-info'>Sign in</h2>
                <div id ="error" className='alert alert-danger' style= {{display: error ? "": "none"}}>
                        {error}
                    </div>                 
              {this.signinForm(email,password)}
            </div>
        )
    }
}

export default Signin;