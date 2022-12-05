import axios from 'axios'
import React from 'react'
import { useLocation, useNavigate, Link} from 'react-router-dom'
import { useState } from 'react'
import './update.css';

const Update = () => {

    const [inventory, setInventory] = useState ({
        SHOE_ID: "",
        SHOE_NAME: "",
        SHOE_COST: "",
        SHOE_PRICE: "",
        QUANTITY_ON_HAND: "",
        QUANTITY_ON_ORDER: "",
        QUANTITY_RECOMMENDED: "",
    })

    const [error, setError] = useState (false)
    const location = useLocation();
    const navigate = useNavigate();
    const shoeId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setInventory((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put (`http://localhost:8800/inventory/${shoeId}`, inventory)
            navigate("/")
        }catch (err) {
            console.log (err); 
            setError(true)
        }
    }

    return (
        <div className  = "form">
            <h1> Update Shoe Information</h1>
            <input type = "text" placeholder='id' onChange={handleChange} name = "SHOE_ID"/>
            <input type = "text" placeholder='name' onChange={handleChange} name = "SHOE_NAME"/>
            <input type = "text" placeholder='cost' onChange={handleChange} name = "SHOE_COST"/>
            <input type = "text" placeholder='price' onChange={handleChange} name = "SHOE_PRICE"/>
            <input type = "text" placeholder='quantity on hand' onChange={handleChange} name = "QUANTITY_ON_HAND"/>
            <input type = "text" placeholder='quantity on order' onChange={handleChange} name = "QUANTITY_ON_ORDER"/>
            <input type = "text" placeholder='quantity recommended' onChange={handleChange} name = "QUANTITY_RECOMMENDED"/>
            <button onClick={handleClick}>Set Changes</button>
            {error &&  "There is an error"}
            <div><Link to="/">Back to Inventory</Link></div>
        </div>
    )
}

export default Update