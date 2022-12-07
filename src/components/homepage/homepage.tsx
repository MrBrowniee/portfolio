import React from 'react'
import styles from './homepage.module.scss'

type HomepageProps = {

}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div className={styles.container}>
    <h1>Portfolio</h1>
      <h2>About me</h2>
      <p>My name is Arttu Lindqvist.<br></br>I am a 22-year-old software developer.<br></br>
        My github page linked above has some projects that I have made in the past.<br></br>Coding languages I have used:      
        <strong><ul>
          <li>C</li>
          <li>C#</li>
          <li>C++</li>
          <li>Python</li>
          <li>Javascript + Typescript</li>
        </ul></strong></p>
  </div>
  )
}

export default Homepage
