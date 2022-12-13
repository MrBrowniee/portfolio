import React from 'react'
import styles from './homepage.module.scss'

type HomepageProps = {

}

const Homepage: React.FC<HomepageProps> = () => {
  return (
  <div className={styles.container}>
    <h1>Portfolio</h1>
      <h2>About me</h2>
        <p>My name is Arttu Lindqvist.
        <br/>I am a 22-year-old software developer.
        <br/>My github page linked above has some projects that I have made in the past.
        <br/>Coding languages I have used: <br/>
        <strong>
          C<br/>
          C#<br/>
          C++<br/>
          Python<br/>
          Javascript + Typescript<br/>
        </strong></p>
  </div>
  )
}

export default Homepage
