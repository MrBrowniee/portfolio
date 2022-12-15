import React from 'react'
import styles from './aboutMe.module.scss'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
    <h1>About me</h1>
    <p>My name is Arttu Lindqvist.
    <br/>I am 22 years old and studying software development.
    </p>
    <h2>I have used the following languages: </h2>
    <strong>
    <ul>
        <li>C</li>
        <li>C#</li>
        <li>C++</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>Typescript</li>
    </ul>
    </strong>
    </div>
  )
}

export default AboutMe
