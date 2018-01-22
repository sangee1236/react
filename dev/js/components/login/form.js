import React from 'react';
//import './loginform.css';
import login  from '../../actions/Login-actions.js';
export default class LoginForm extends  React.Component {
    constructor (props){
        super (props);
        this.state = {
            userName :'',
            password : ''
        }
    }

    loginClick(e){
    e.preventDefault();
    const { dispatch } = this.state;
        dispatch(login(username,password));
    }
    render(){
        return(
            <div class="wrapper">
                <form class="form-signin">
                    <h2 class="form-signin-heading">Please login</h2>
                    <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" value = {username} />
                    <br/>
                    <input type="password" class="form-control" name="password" placeholder="Password" required="" value={password}/>
                    <br/>
                    <br/>
                    <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.loginClick} >Login</button>
                </form>
            </div>

    /*<form id="accesspanel">
            <h1 id="litheader">SANGEE</h1>
        <div className="inset">
            <p>
                <input type="text" name="username" id="email" placeholder="Email address" />
                <p>
               <input type="password" name="password" id="password" placeholder="Access code" />
           </p>
           <div>
               <div className="checkboxouter">
                   <input type="checkbox" name="rememberme" id="remember" value="Remember" />
                   <label className="checkbox"></label>
               </div>
               <label for="remember">Remember me for 14 days</label>
           </div>
           <input className="loginLoginValue" type="hidden" name="service" value="login" />
       </div>
       <p className="p-container">
           <input type="submit" name="Login" id="go" value="Authorize" />
       </p>
   </form>*/
        );
    }
   }
