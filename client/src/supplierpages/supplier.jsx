import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./supplier.css"

const Supplier = () => {

    const [inventory, setInventory] = useState ([])

    useEffect(()=> {
        const fetchInventory = async () => {
            try {
                const res = await axios.get("http://localhost:8800/supplier")
                setInventory(res.data);
            } catch(err){
                console.log(err)
            }
        }
        fetchInventory()
    } ,[])

    return<div className = "supplierinfo"> 
    <h1>Supplier Information</h1>
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
                        <tr className="info" key = {info.supplier_id}>
                            <td> {info.SUPPLIER_ID} </td>
                            <td>{info.SUPPLIER_NAME}</td>
                            <td>{info.SUPPLIER_ADDRESS}</td>
                            <td>{info.SUPPLIER_ZIP}</td>
                            <td>{info.SUPPLIER_PHONE}</td>
                            <td><button className = "updateinfo">
                                <Link to ={`/supplierupdate/${info.SUPPLIER_ID}`}>
                                Update Information
                                </Link>
                                </button>
                            </td>
                        </tr> 
                        ))}
                    </tbody>
                </table>
                <button><Link to ={`/supplierorders`}>View Orders</Link></button>
    </div>
}
export default Supplier;