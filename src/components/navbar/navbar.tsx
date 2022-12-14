import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
        <button><Link to="/">Home</Link></button>
        <button><Link to="contactme">Contact information</Link></button>
    </div>
  
  )
}

export default Navbar
