import React from 'react'
import styles from './aboutMe.module.scss'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
    <h1>About me</h1>
    <p>My name is Arttu Lindqvist.<br/>
    <br/>I am 22 years old and currently studying software development.
    <br/>I am relatively new to coding but I am very interested to learn more.
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
        <li>HTML</li>
        <li>CSS</li>
    </ul>
    </strong>
    </div>
  )
}

export default AboutMe
