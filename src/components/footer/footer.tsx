import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.scss'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
<div className={styles.container}>
  <a href="https://github.com/MrBrowniee?tab=repositories">Github</a>
  <Link to="cv">CV</Link>
</div>
  )
}

export default Footer
