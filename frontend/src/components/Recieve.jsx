import React, { useState } from 'react'
import axios from 'axios'
import recieve from '../scss/recieve.module.scss'
import { Link } from 'react-router-dom';

export default function Receive() {
    const [code, setCode] = useState('')
    const [message, setMessage] = useState(false)

    const getMessage = async e => {
        e.preventDefault()
        const result = await axios.get(`http://localhost:4000/${code}`);
        setMessage(result.data)
    }

    return (
      <>
        <form onSubmit={getMessage} className={recieve.forom}>
          <input
            className={recieve.input}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={4}
            pattern="\d+"
          />
          <button className={recieve.button} type="submit">
            Get message
          </button>
        </form>
        <h1 className={recieve.code}>{message.message}</h1>
        <button className={recieve.home}>
          <Link to="/" className={recieve.link}>
            Back to home
          </Link>
        </button>
      </>
    );
}