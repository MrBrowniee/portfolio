import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <h2><Link to="main">About me</Link></h2>
      <h2><Link to="/">Home</Link></h2>
      <h2><Link to="projects">Projects</Link></h2>
      <h2><Link to="cv">CV</Link></h2>
    </div>
  
  )
}

export default Navbar
