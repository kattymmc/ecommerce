import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div className='Register'>
            <div className='register-wrapper'>
                <h1>CREATE AN ACCOUNT</h1>
                    <form>
                        <input placeholder='name'/>
                        <input placeholder='last name'/>
                        <input placeholder='username'/>
                        <input placeholder='email'/>
                        <input placeholder='password'/>
                        <input placeholder='confirm password'/>
                        <span>
                            By creatin an account, I consent to the processing of my personal
                            data in accordante with the <b>PRIVACY POLICY</b>
                        </span>
                        <button>CREATE</button>
                    </form>
            </div> 
        </div>
    );
};

export default Register