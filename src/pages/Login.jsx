import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='Login'>
             <div className='login-wrapper'>
                <h1>SIGN IN</h1>
                    <form>
                        <input placeholder='username'/>
                        <input placeholder='password'/>

                        <button>LOGIN</button>
                        <a href="#">DO NOT YOU REMEMBER THE PASSWORD?</a>
                        <a href="#">CREATE A NEW ACCOUNT</a>
                    </form>
            </div> 
        </div>
    );
};

export default Login