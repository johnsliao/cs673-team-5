import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class Login extends Component {

  constructor(props){
    super(props);
    let LoggedIn = false
    this.state ={
      username:'',
      password:'',
      alert:''
      
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  submitForm(e){
    e.preventDefault()
    const { username, password } = this.state
    // login magic
  }

  
  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <form onSumbmit={this.submitForm}>
          <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
          <br/>
          <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
          <br/>
          <div class="col-xs-8">
            <input type="checkbox" name="remember" id="remember"/> Remember me
          </div>

          <div class="clearfix">
          <button type="submit" class="loginbtn">Login</button>
          <button type="button" class="cacelbtn">Cancel</button>
        </div>
        </form>
      </div>
        
    );
  }
}

export default Login;