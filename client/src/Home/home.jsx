import React from 'react'
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {

    return(
        <div className = "home">
            <button>
                <Link to ={"/customer"}>
                    I'm a Customer
                </Link>
            </button>
            <button>
                <Link to ={"/inventory"}>
                    I'm a Store Owner
                </Link>
            </button>
            <button>
                <Link to ={"/supplier"}>
                    I'm a Supplier
                </Link>
            </button>
        </div>
    )
}
export default Home;
