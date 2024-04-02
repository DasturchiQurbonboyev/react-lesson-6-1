import { React, memo } from 'react'
import "./Login.css"
import logo2 from "../images/navbar/Group.png"
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = "https://dummyjson.com/auth/login";


function Login() {



    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post(API_URL, { username, password })
            .then((response) => {
                const data = response.data;
                console.log(data);
                if (data.message === "Error") {
                    toast.error("Username or Password is incorrect");
                } else {
                    localStorage.setItem("token", data.token);
                    window.open("/admin", "_self");
                }
            })
            .catch((error) => {
                console.log("Error:", error);
                toast.error("Username or Password is incorrect");
            });
    };
    return (
        <div className='login'>
            <form action="" onSubmit={handleSubmit}>
                <div className='login__logo'>
                    <img src={logo2} alt="" />
                </div>
                <div className='login__register'>
                    <label htmlFor="">Email Address*</label><br />
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text" name="" id="" placeholder='Enter Your Email' /><br /><br />

                    <label htmlFor="">Password*</label><br />
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Your password' />

                    <div className='forgot__password'>
                        <div>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <label htmlFor="">Forgot Passsword?</label>
                    </div>
                    <div className='btn__singup'>

                        <button type='submit' className='btn__style'>Login</button>
                        <label htmlFor="">Signup?</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default memo(Login)