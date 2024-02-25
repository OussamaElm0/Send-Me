import React, { useState } from 'react'
import axios from 'axios'
import send from '../scss/send.module.scss'
import { Link } from 'react-router-dom'

export default function Send() {
    const [message, setMessage] = useState('')
    const [currentCode, setCurrentCode] = useState('')
    const [status, setStatus] = useState(false)

    const generateCode = () => {
        let randomCode = ""
        for (let i = 0; i < 4; i++) {
            if (i == 0) {
              randomCode += String(Math.round(Math.random() * 8));
            } else {
              randomCode += String(Math.floor(Math.random() * 9));
            }
        }
        setCurrentCode(randomCode)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        generateCode()
       try {
            await axios.post("http://localhost:4000/create", {
                code: currentCode,
                message: message
            });
            setMessage('')  
       } catch (e) {
            console.log(e.message);
       }
    }

    const code = <h3>Your code is: {currentCode}</h3>

    return (
      <>
        <form onSubmit={handleSubmit} className={send.form}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={send.text}
            required={true}
          ></textarea>
          <button type="submit" className={send.button}>
            Send Message
          </button>
          <button className={send.button}>
            <Link to="/" className={send.link}>
              Back to home
            </Link>
          </button>
        </form>
        <div className={send.code}>{status && code}</div>
      </>
    );
}