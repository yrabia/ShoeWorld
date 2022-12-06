import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Supplierorders = () => {


    const [inventory, setInventory] = useState ([])


    useEffect(()=> {
        const fetchInventory = async () => {
            try {
                const res = await axios.get("http://localhost:8800/supplierorders")
                setInventory(res.data);
            } catch(err){
                console.log(err)
            }
        }
        fetchInventory()
    } ,[])


    return<div className = "supplierorders"> 
    <h1>Supplier Invoices</h1>
        <table>
                    <tbody>
                        <tr >
                            <th>Invocie ID</th>
                            <th>Supplier ID</th>
                            <th>Invoice Date</th>
                            <th>Shoe ID</th>
                            <th>Quantity</th>
                        </tr>
                        {inventory.map(info =>(
                        <tr className="info" key = {info.SUPPLIER_ID}>
                            <td>{info.INVOICE_ID}</td>
                            <td> {info.SUPPLIER_ID} </td>
                            <td>{info.INVOICE_DATE}</td>
                            <td>{info.SHOE_ID}</td>
                            <td>{info.QUANTITY}</td>
                        </tr> 
                        ))}
                    </tbody>
                </table>
                <div><Link to="/supplier">Back to Supplier Information</Link></div>
    </div>
}
export default Supplierorders;