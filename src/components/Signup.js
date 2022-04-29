import React, { useState } from 'react'
import img from './asset/google.svg'
const Signup = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
       const {name,value} = e.target;
       setUser({...user,[name]:value})
    }
    return (
        <div className='container'>
            <div className='content'>
                <div className='head'>
                    <h1>Welcome back</h1>
                    <p className='light'>Welcome back! Please enter your details</p>
                </div>
                <div className='formItem'>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your Email" name='email' value={user.email} onChange={handleChange} />
                </div>
                <div className='formItem'>
                    <label>Password</label>
                    <input type="password" placeholder="*********" name='password' value={user.password} onChange={handleChange} />
                </div>
                <div className='check-cont'>
                    <div className='check'>
                        <input type="checkbox" name="remember" className='checkbox' />
                        <label for="remember">Remember for 30 Days</label>
                    </div>
                    <span className='bold'>Forgot Password</span>
                </div>
                <div className='btns'>
                    <div className='btn1'>
                        <button className='sign-btn'>Sign in</button>
                    </div>
                    <div className='btn2'>
                        <button className='google'><img src={img} className='icon' />Sign in with Google</button>
                    </div>
                </div>
                <div className='signup'>
                    <p className='account'>Don't have a account? <span className='dark'>Sign up for free</span></p>
                </div>
            </div>
        </div>
    )
}

export default Signup