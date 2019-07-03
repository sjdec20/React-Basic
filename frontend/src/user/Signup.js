import React, {Component}  from 'react';


class Signup extends Component {
    constructor(){
        super();
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            error: "",
            open: false
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
        let {fname, lname, email, password, error} = this.state;
        if(fname === ""){
            error = "Please fill in the first name!!!";
        }
        else if(lname === ""){
            error = "Please fill in the last name!!!";
        }
        else if(email === ""){
            error = "Please fill in the email field!!!";
        }        
        else if(password === ""){
            error = "Please fill in the password field!!!";
        }        
        if(error === ""){
            const user = {
                fname,
                lname,
                email,
                password              
            } 
            console.log("User Sign Up Details", user);
            this.setState({
                fname:"",
                lname:"",
                email:"",
                password:"",
                error : "",
                open: true
            })
        } else{
            this.setState({
                error : error
            })
            console.log("Error: ", error)
        }
    }

    signUpForm (fname, lname, email,password){
        return (
            <form>                   
                <div className='form-group'>
                    <label className='text-muted'>First Name:</label>
                    <input type='text' onChange = {this.handleChange('fname')} value={fname} className='form-control'></input>
                </div>                    
                <div className='form-group'>
                    <label className='text-muted'>Last Name:</label>
                    <input type='text' onChange = {this.handleChange('lname')} value={lname} className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label className='text-muted'>Email:</label>
                    <input type='email' onChange = {this.handleChange('email')} value={email}  className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label className='text-muted'>Password:</label>
                    <input type='password' onChange = {this.handleChange('password')} value={password} className='form-control'></input>
                </div>
                <button className='btn btn-raised btn-primary' onClick={this.submitForm}>
                    Submit
                </button>
            </form>  
        )
    }

    render(){
        let {fname, lname, email, password, error, open} = this.state;
        return (
            <div className='container'>
                <h2 className='mt-5 mb-5'>Sign Up</h2>
                <div id ="error" className='alert alert-danger' style= {{display: error ? "": "none"}}>
                        {error}
                    </div>
                    <div id ="success" className='alert alert-primary' style= {{display: open ? "": "none"}}>
                        User created successfully, please sign in!!!
                    </div>
              {this.signUpForm(fname, lname, email,password)}
            </div>
        )
    }
}

export default Signup;