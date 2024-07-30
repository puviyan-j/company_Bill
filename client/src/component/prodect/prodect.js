import React from 'react'
import './prodect.css'

function Prodect() {

    const list_item = [
        {
            name: 'adult blue Mask',
            q: 25000,
            rate: 0.54
        }, {
            name: 'adult blue Mask',
            q: 25000,
            rate: 0.4
        }, {
            name: 'adult black Mask ',
            q: 25000,
            rate: 0.4
        },{
            name: 'kids black Mask',
            q: 25000,
            rate: 0.45
        }
    ]

    // const arr = list_item.map((li)=>{ return li.q})
    // console.log(arr)

    const totel = list_item.reduce((list, pre) => {
        return  (pre.q* pre.rate)+list

    }, 0)
   const cgst = (totel*0)/100;
   const sgst = (totel*0)/100;
   const igst = (totel*5)/100;


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>Description Of Goods</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th className='amount'>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {list_item.map((list, index) => (<tr key={index}>
                        <td className='s_no'>{index + 1}</td>
                        <td className='goodsname'>{list.name}</td>
                        <td className='goods_q'>{list.q}</td>
                        <td className='goods_rate'>{list.rate}</td>
                        <td className='amount'>{list.q * list.rate}</td>
                    </tr>))}
                </tbody>

            </table>


            <div className='sub_totel'>
                <span className="table_totel" >sub-Totel:</span>
                <span className='sub_amount'>{totel}</span>
            </div>
            <div className='sub_totel'>
                <span className="table_totel" >CGST @ - 0.0 % :</span>
                <span className='sub_amount'>{cgst}</span>
            </div>
            <div className='sub_totel'>
                <span className="table_totel">SGST @ - 0.0 % :</span>
                <span className='sub_amount'>{sgst}</span>
            </div>
            <div className='sub_totel'>
                <span className="table_totel">IGST @ - 5 % :</span>
                <span className='sub_amount'>{igst}</span>
            </div>
            <div className='sub_totel'>
                <span className="table_totel">Totel Amount after Tax :</span>
                <span className='sub_amount'>{totel+cgst+sgst+igst}</span>
            </div>

        </div>
    )
}

export default Prodect