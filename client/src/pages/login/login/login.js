import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { login } from '../../../store/slice/userslice'
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setinput] = useState({
        names: "",
        password: ''
    })
    const [showPassword, setshowPassword] = useState(true)

    const handleinput = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        axios.post("http://localhost:5000/api/", input).then((res) => {
            console.log(res.data)
            dispatch(login(res.data));
            navigate('/createbill')
            
        }).catch((error)=>{
            console.log(error.response.data)
        })
    }

    return (
        <div className='login'>
            <h2 className='login_heading'>Login</h2>
            <div className='login_Div'>
                <div className='login_inputDiv'>
                    <input
                        className='login_input'
                        placeholder='name'
                        name='names'
                        type='text'
                        value={input.names}
                        onChange={handleinput}>
                    </input>
                </div>
                <div className='login_inputDiv'>
                    <input
                        className='login_input'
                        placeholder='Enter your Password... '
                        name='password'
                        value={input.password}
                        onChange={handleinput}
                        type={showPassword ? 'password' : "text"}>
                    </input>
                    <input className='login-checkbox' type="checkbox" onClick={() => (setshowPassword(!showPassword))}></input>
                </div>
                <div className='login_button_div'> <button onClick={handlesubmit} className='login_button'>Login</button></div>
            </div>
            <div>
                <p className='login_notaccount'>don't have a account ? <Link className='login_link' to="/signup">Signup</Link></p>
            </div>
        </div>
    )
}

export default Login