import react from 'react';
import "./login.css";

const LoginForm = () =>{
    return (
        <div className='cover'>
        <h1>Login</h1>
        <input type="text" placeholder="username" id="username" /><br />
        <input type="password" placeholder="password" id='pass' />
        <button className='btn'>Login</button>
        </div>
    )
}

export default LoginForm;