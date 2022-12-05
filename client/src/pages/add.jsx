import React from 'react'
import './add.css';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [inventory, setInventory]  = useState ({
        SHOE_ID: "",
        SHOE_NAME: "",
        SHOE_COST: "",
        SHOE_PRICE: "",
        QUANTITY_ON_HAND: "",
        QUANTITY_ON_ORDER: "",
        QUANTITY_RECOMMENDED: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInventory((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/inventory", inventory)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }


    return (
        <div className = "form">
            <h1>Add New Shoe</h1>
            <input type = "text" placeholder='id' onChange={handleChange} name = "SHOE_ID"/>
            <input type = "text" placeholder='name' onChange={handleChange} name = "SHOE_NAME"/>
            <input type = "text" placeholder='cost' onChange={handleChange} name = "SHOE_COST"/>
            <input type = "text" placeholder='price' onChange={handleChange} name = "SHOE_PRICE"/>
            <input type = "text" placeholder='quantity on hand' onChange={handleChange} name = "QUANTITY_ON_HAND"/>
            <input type = "text" placeholder='quantity on order' onChange={handleChange} name = "QUANTITY_ON_ORDER"/>
            <input type = "text" placeholder='quantity recommended' onChange={handleChange} name = "QUANTITY_RECOMMENDED"/>

        <button onClick={handleClick}>Add</button>

        </div>
    )
}

export default Add