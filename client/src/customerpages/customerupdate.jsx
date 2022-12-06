import React from 'react'
import axios from 'axios'
import { useLocation, useNavigate, Link} from 'react-router-dom'
import { useState } from 'react'

const Customerupdate = () => {

    const [inventory, setInventory] = useState ({
        CUSTOMER_ID: "",
        CUSTOMER_NAME: "",
        CUSTOMER_ADDRESS: "",
        CUSTOMER_ZIP: "",
        CUSTOMER_PHONE: "",
    })

    const [error, setError] = useState (false)
    const location = useLocation();
    const navigate = useNavigate();
    const custId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setInventory((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put (`http://localhost:8800/customer/${custId}`, inventory)
            navigate("/customer")
        }catch (err) {
            console.log (err); 
            setError(true)
        }
    }


    return(
        <div> 
            <div className  = "form">
            <h1> Update Customer Information</h1>
            <input type = "text" placeholder='id' onChange={handleChange} name = "CUSTOMER_ID"/>
            <input type = "text" placeholder='name' onChange={handleChange} name = "CUSTOMER_NAME"/>
            <input type = "text" placeholder='address' onChange={handleChange} name = "CUSTOMER_ADDRESS"/>
            <input type = "text" placeholder='zip' onChange={handleChange} name = "CUSTOMER_ZIP"/>
            <input type = "text" placeholder='phone' onChange={handleChange} name = "CUSTOMER_PHONE"/>
            <button onClick={handleClick}>Set Changes</button>
            {error &&  "There is an error"}
            <div><Link to="/customer">Back to Customer Information</Link></div>
            </div>
        </div>
    )
}
export default Customerupdate;