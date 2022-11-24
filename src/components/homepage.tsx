import React from 'react'
import styles from './homepage.module.scss'

type HomepageProps = {

}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div className={styles.container}>
        <h1>Header</h1>
        <p>My supercool component</p>
    </div>
  )
}

export default Homepage
