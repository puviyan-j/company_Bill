import React from 'react'
import './reciver.css'

function Reciver() {

    const date = new Date()
    const new_date = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()

    return (

        <div className='sender'>
            <div className='left'>
                <p className='sender_head'>INVOICE TO :</p>
                <h3 className='sender_name'>New Home needs</h3>
                <p className='sender_phone'>P : 9042258411</p>
                <div className='sender__address'>
                    <p>A : </p>
                    <ul className='sender_address'>

                        <li>new vismaya street</li>
                        <li>perunthalamanna</li>
                        <li>kerla</li>
                    </ul>
                </div>
            </div>
            <div className='right'>
                <div>
                    <p>Invoice No : 143</p>
                    <p>Date : {new_date}</p>
                </div>


                <div className='empty_main'>
                    <div className='empty'></div></div>
                <div><p className='gst'>GSTIN : FLJMIOFDSOICDFA</p>
                </div>
            </div>
        </div>

    )
}

export default Reciver