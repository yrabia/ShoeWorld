import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './inventory.css';

const Inventory = () => {

    const [inventory, setInventory] = useState ([])

    useEffect(()=> {
        const fetchInventory = async () => {
            try {
                const res = await axios.get("http://localhost:8800/inventory")
                setInventory(res.data);
            } catch(err){
                console.log(err)
            }
        }
        fetchInventory()
    } ,[])

    const handleDelete = async (SHOE_ID)=>{
        try{
            await axios.delete(`http://localhost:8800/inventory/${SHOE_ID}`);
            window.location.reload()
        }catch (err){
            console.log(err)
        }
    }

    return <div className= "shoeworld">
            <h1>Shoe World- Store Inventory</h1>
            <div className="inventory">
                    <table>
                        <tbody>
                            <tr >
                                <th>ID</th>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Price</th>
                                <th>Quantity on hand</th>
                                <th>Quantity on order</th>
                                <th>Quantity recommended</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            {inventory.map(shoe =>(
                            <tr className="shoe" key = {shoe.SHOE_ID}>
                                <td> {shoe.SHOE_ID} </td>
                                <td>{shoe.SHOE_NAME}</td>
                                <td>{shoe.SHOE_COST}</td>
                                <td>{shoe.SHOE_PRICE}</td>
                                <td>{shoe.QUANTITY_ON_HAND}</td>
                                <td>{shoe.QUANTITY_ON_ORDER}</td>
                                <td>{shoe.QUANTITY_RECOMMENDED}</td>
                                <td><button className = "updatebutton">
                                    <Link to ={`/update/${shoe.SHOE_ID}`}>
                                    Update
                                    </Link>
                                    </button>
                                </td>
                                <td><button className = "deletebutton" onClick={ ()=>handleDelete(shoe.SHOE_ID)}>Delete</button></td>
                            </tr> 
                            ))}
                        </tbody>
                    </table>
                    <div className="buttonshoe">
                        <button className= "addshoe">
                            <Link to={"/add"}>Add New Shoe</Link>
                        </button>
                    </div>
            </div>
        </div>
    
}

export default Inventory