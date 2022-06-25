import React, { useState } from 'react'
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }

    return (
        <div className='Login'>
             <div className='login-wrapper'>
                <h1>SIGN IN</h1>
                    <form>
                        <input placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
                        <input placeholder='password' type="password" onChange={(e) => setPassword(e.target.value)}/>
                        {error && <span className='error'>Something went wrong...</span>}
                        <button onClick={handleClick} disabled={isFetching}>LOGIN</button>
                        <a href="#">DO NOT YOU REMEMBER THE PASSWORD?</a>
                        <a href="#">CREATE A NEW ACCOUNT</a>
                    </form>
            </div> 
        </div>
    );
};

export default Login