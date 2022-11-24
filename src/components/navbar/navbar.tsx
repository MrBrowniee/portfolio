import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <h1><Link to="/">Home</Link></h1>
      <h1><Link to="main">My Information</Link></h1>
    </div>
  
  )
}

export default Navbar
