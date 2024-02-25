import React from 'react'
import { Link } from 'react-router-dom' 
import home from '../scss/home.module.scss'

export default function Home() {

    return (
        <div className={home.container}>
            <h1>Welcome to the Home Page</h1>                
            <div className={home.row} >
                <button className={home.btn}>
                    <Link to='/send-message' className={home.link}>Send Message</Link>
                </button>
                <button className={home.btn}>
                    <Link to="/recieve-message" className={home.link}>Recieve Message</Link>
                </button>
            </div>
        </div>  
    )
}