import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Customerorders = () => {

    const [inventory, setInventory] = useState ([])


    useEffect(()=> {
        const fetchInventory = async () => {
            try {
                const res = await axios.get("http://localhost:8800/customerorders")
                setInventory(res.data);
            } catch(err){
                console.log(err)
            }
        }
        fetchInventory()
    } ,[])


    return<div className = "customerorders"> 
    <h1>Customer Orders</h1>
        <table>
                    <tbody>
                        <tr >
                            <th>Order ID</th>
                            <th>Customer ID</th>
                            <th>Order Date</th>
                            <th>Shoe ID</th>
                            <th>Quantity</th>
                        </tr>
                        {inventory.map(info =>(
                        <tr className="info" key = {info.CUSTOMER_ID}>
                            <td>{info.ORDER_ID}</td>
                            <td> {info.CUSTOMER_ID} </td>
                            <td>{info.ORDER_DATE}</td>
                            <td>{info.SHOE_ID}</td>
                            <td>{info.QUANTITY}</td>
                        </tr> 
                        ))}
                    </tbody>
                </table>
                <div><Link to="/customer">Back to Customer Information</Link></div>
    </div>
}
export default Customerorders;