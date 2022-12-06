import React from 'react'
import axios from 'axios'
import {useLocation, useNavigate, Link} from 'react-router-dom';
import { useState } from 'react'

const Supplierupdate= () => {

    const [inventory, setInventory] = useState ({
        SUPPLIER_ID: "",
        SUPPLIER_NAME: "",
        SUPPLIER_ADDRESS: "",
        SUPPLIER_ZIP: "",
        SUPPLIER_PHONE: "",
    })

    const [error, setError] = useState (false)
    const location = useLocation();
    const navigate = useNavigate();
    const suppId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setInventory((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put (`http://localhost:8800/supplier/${suppId}`, inventory)
            navigate("/supplier")
        }catch (err) {
            console.log (err); 
            setError(true)
        }
    }


    return (
        <div> 
            <div className  = "form">
            <h1> Update Supplier Information</h1>
            <input type = "text" placeholder='id' onChange={handleChange} name = "SUPPLIER_ID"/>
            <input type = "text" placeholder='name' onChange={handleChange} name = "SUPPLIER_NAME"/>
            <input type = "text" placeholder='address' onChange={handleChange} name = "SUPPLIER_ADDRESS"/>
            <input type = "text" placeholder='zip' onChange={handleChange} name = "SUPPLIER_ZIP"/>
            <input type = "text" placeholder='phone' onChange={handleChange} name = "SUPPLIER_PHONE"/>
            <button onClick={handleClick}>Set Changes</button>
            {error &&  "There is an error"}
            <div><Link to="/supplier">Back to Supplier Information</Link></div>
            </div>
        </div>
    )
}
export default Supplierupdate;