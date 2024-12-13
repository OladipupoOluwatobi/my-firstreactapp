import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div  className='App'>
        <p>Page Not Found</p>
        <button>
            <Link to={"/"}>Go to Home</Link>
        </button>
    </div>
   
  )
}

export default NotFound