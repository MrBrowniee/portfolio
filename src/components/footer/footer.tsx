import React from 'react'
import styles from './footer.module.scss'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
<div className={styles.container}>
    <h1>Footer</h1>
    <p>footer</p>
</div>
  )
}

export default Footer
