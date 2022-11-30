import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.scss'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
<div className={styles.container}>
    <Link to="contactme">Contact Me</Link>
</div>
  )
}

export default Footer
