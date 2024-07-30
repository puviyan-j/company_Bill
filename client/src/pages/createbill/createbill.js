import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Login from '../login/login/login'
import axios from 'axios';

function Createbill() {
  const user = useSelector(state => state.userdata.user);

  const handlequiry = () => {
    axios.post("http://localhost:5000/api/quiry", { q: "iy" }).then((res) => { console.log(res.data) })
  }



  return (
    <>
      {user ? <><div className='company'>
        <div className='company_div'>
          <h1 className='pre_heading'>INVOICE</h1>
          <div className='company_gstin'>
            <p className='gst'>GSTIN:{user?.gstin}</p>
            <p className='email'>Email:{user?.email}</p>
          </div>
        </div>
        <div className='company_name'>
          <h3 className='company__name'>{user ? user.companyName : "companyName"}</h3>
          <ul className='address'>
            <li>{user?.doorNo && user?.doorNo + ","}{user?.street && user.street + ","} </li>
            <li>{user?.address && user.address + ","}</li>
            <li>{user?.dist + ","}{user?.state + ","}{user?.country + ","}</li>
            <li>{user?.pincode}</li>
            <li>phone:{user?.phone}</li>
          </ul>
        </div>
        <button onClick={handlequiry}>q</button>
      </div>
      </> : <><Login /></>}


      <Link to="/previewbill">preview</Link>
    </>
  )
}

export default Createbill