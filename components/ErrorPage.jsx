import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <Link to='errorPage'>
          <h1>Error 404 page not found</h1>
        </Link>
    </div>
  )
}

export default ErrorPage