import React, { useRef } from 'react'
import './preview.css'
import Reciver from '../reciver/Reciver'
import Prodect from '../prodect/prodect'
import html2pdf from 'html2pdf.js'
import { useSelector } from 'react-redux'

function PreviewBill() {


    const bill = useRef();
    const user= useSelector(state => state.userdata.user)
    console.log(user)


const print = ()=>{
    const content = bill.current.innerHTML
    html2pdf().from(content).save("bill.pdf")

}

    return (
        <>
        <div ref={bill} className='preview'>
            <div className='pre_main'>
                <div className='company'>
                    <div className='company_div'>
                        <h1 className='pre_heading'>INVOICE</h1>
                        <div className='company_gstin'>
                            <p className='gst'>GSTIN:{user?.gstin}</p>
                            <p className='email'>Email:{user?.email}</p>
                        </div>
                    </div>
                    <div className='company_name'>
                        <h3 className='company__name'>{user?user.companyName:"companyName" }</h3>
                        <ul className='address'>
                            <li>{user?.doorNo&&user?.doorNo+"," }{user?.street && user.street+","} </li>
                            <li>{user?.address && user.address+"," }</li>
                            <li>{user?.dist+","}{user?.state+","}{user?.country+","}</li>
                            <li>{user?.pincode}</li>
                            <li>phone:{user?.phone}</li>

                        </ul>
                    </div>

                </div>

                <Reciver />
                <Prodect />
                <div></div>

            </div>
        </div>
        <button onClick={print}>print</button>
        </>
    )
}

export default PreviewBill