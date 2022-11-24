import React from 'react'
import styles from './homepage.module.scss'

type HomepageProps = {

}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div className={styles.container}>
    <h1>Home page</h1>
    <nav>
      <ul>
        <li><a href="./main">My information</a></li>
        <li><a href="./projects">Portfolio</a></li>
        <li><a href="./cv">Education and work experience</a></li>
      </ul>
    </nav>
  </div>
  )
}

export default Homepage
