import React from 'react'
import styles from './homepage.module.scss'

type HomepageProps = {

}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div className={styles.container}>
    <h1>Portfolio</h1>
    <p>My name is Arttu Lindqvist. I have studied a little bit of C#, C and C++, React, Python. 
      I have done projects in Unity. </p>
    <nav>
      <h2><ul>
        <li><a href="./main">About me</a></li>
        <li><a href="./projects">Portfolio</a></li>
        <li><a href="./cv">Education and work experience</a></li>
      </ul></h2>
    </nav>
  </div>
  )
}

export default Homepage
