import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer className='clear-fix'>

      <Link to='/' className='footer-logo'><img src='/static/img/apple.svg' alt='' /><h2>Apple Store</h2></Link>
    </footer>
  )
}

export default Footer
