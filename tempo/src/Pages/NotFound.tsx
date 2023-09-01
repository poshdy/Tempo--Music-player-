import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
        <h1>This Page Not Found :(</h1>
        <Link to={'/'}>Return to Home Page</Link>
    </section>
  )
}

export default NotFound