import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.scss'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
<div className={styles.container}>
  <button><a href="https://github.com/MrBrowniee?tab=repositories">Github</a></button>
  <button><Link to="cv">CV</Link></button>
</div>
  )
}

export default Footer
