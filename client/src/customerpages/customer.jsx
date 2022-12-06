import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./customer.css"

const Customer = () => {

    const [inventory, setInventory] = useState ([])

    useEffect(()=> {
        const fetchInventory = async () => {
            try {
                const res = await axios.get("http://localhost:8800/customer")
                setInventory(res.data);
            } catch(err){
                console.log(err)
            }
        }
        fetchInventory()
    } ,[])


    return <div className = "customerinfo"> 
        <h1>Customer Information</h1>
            <table>
                        <tbody>
                            <tr >
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Zip</th>
                                <th>Phone</th>
                                <th>Update</th>
                            </tr>
                            {inventory.map(info =>(
                            <tr className="info" key = {info.customer_id}>
                                <td> {info.CUSTOMER_ID} </td>
                                <td>{info.CUSTOMER_NAME}</td>
                                <td>{info.CUSTOMER_ADDRESS}</td>
                                <td>{info.CUSTOMER_ZIP}</td>
                                <td>{info.CUSTOMER_PHONE}</td>
                                <td><button className = "updateinfo">
                                    <Link to ={`/customerupdate/${info.CUSTOMER_ID}`}>
                                    Update Information
                                    </Link>
                                    </button>
                                </td>
                            </tr> 
                            ))}
                        </tbody>
                    </table>
                    <button><Link to ={`/customerorders`}>View Orders</Link></button>
        </div>
        
}
export default Customer;
