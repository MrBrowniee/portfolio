import React from 'react'
import styles from './footer.module.scss'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
<div className={styles.container}>
    <a href="https://github.com/MrBrowniee?tab=repositories" target="_blank">Github</a>
    <a href="https://github.com/MrBrowniee?tab=repositories" target="_blank">LinkedIn</a>  
</div>
  )
}

export default Footer
