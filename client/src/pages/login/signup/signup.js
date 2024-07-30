import React, { useState } from 'react';
import './signup.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login } from "../../../store/slice/userslice"


function Signup() {

    const [value, setvalue] = useState({
        companyName: "",
        doorNo: "",
        street: "",
        address: "",
        dist: "",
        state: "",
        country: "",
        pincode: "",
        gstin: "",
        email: "",
        phone: "",
        password: "",

    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userdata.user);
    console.log(user)
    const handlechange = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/api/signup", value).then((data) => {
            dispatch(login(data.data));
            navigate('/createbill')
        });



    }

    return (
        <div className='signup'>
            <h2 className='signup_heading'>SignUp</h2>
            <form onSubmit={handlesubmit} className='signup_form'>
                <div>
                    <input name="companyName" className='signup_input' type='text' placeholder='Company Name' onChange={handlechange} required></input>
                </div>
                <div className='signup_input_div'>
                    <input className='signup_inputs' type='text' name="doorNo" placeholder='DoorNo' onChange={handlechange}></input>
                    <input className='signup_inputs' type='text' name="street" placeholder='Street' onChange={handlechange}></input>
                </div>
                <div className='signup_input_div'>
                    <input className='signup_inputs' type='text' name="address" placeholder='Address' onChange={handlechange}></input>
                    <input className='signup_inputs' type='text' name="dist" placeholder='Dist' onChange={handlechange} required></input>
                </div>
                <div className='signup_input_div'>
                    <input className='signup_inputs' type='text' name="state" placeholder='State' onChange={handlechange} required></input>
                    <input className='signup_inputs' type='text' name="country" placeholder='Country' onChange={handlechange} required></input>
                </div>
                <div className='signup_input_div'>
                    <input className='signup_inputs' type='number' name="pincode" placeholder='pincode' onChange={handlechange} required></input>
                    <input className='signup_inputs' type='text' name="gstin" placeholder='GSTIN No' onChange={handlechange} required></input>
                </div >
                <div className='signup_input_div'>
                    <input className='signup_inputs' type='text' name="email" placeholder='Email' onChange={handlechange} required></input>
                    <input className='signup_inputs' type='number' name="phone" placeholder='Phone' onChange={handlechange} required></input>
                </div>
                <div className='signup_input_div'>
                    <input className='signup_inputs' type='password' name="password" placeholder='password' onChange={handlechange} required></input>
                    <input className='signup_inputs' type='password' name="confirmpassword" placeholder='Confirm password' onChange={handlechange} required></input>
                </div>

                <input type='submit' value='Signup'></input>
            </form>

        </div>
    )
}

export default Signup