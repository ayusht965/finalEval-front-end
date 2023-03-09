import React from 'react';
import homePageImage from '../../assets/undraw-upload-re-pasx.png';
import './LogInPage.css';

export default function LogInPage() {
    return (
        <div className="container">
          
            <div className='image-container'>
                <div className='page-title'>
                    <h2>Design APIs fast,</h2> <br />
                    <h2>Mange content easily.</h2>
                </div>
                <img src={homePageImage} alt="logo" />
            </div>
            <div className='login-container'>
                <div className='title'>
                    Login To You CMS+ Account
                </div>
                <div className='form-container'>
                    <div className='email-container'>
                        <h4>Email</h4>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className='password-container'>
                        <h4>Password</h4>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button type="submit">Login</button>
                </div>

            </div>
        </div>
    );
}