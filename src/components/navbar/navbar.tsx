import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
        <Link to="/">Home</Link>
        <Link to="contactme">Contact information</Link>      
        <a href="https://github.com/MrBrowniee?tab=repositories">Github</a>
    </div>
  
  )
}

export default Navbar
