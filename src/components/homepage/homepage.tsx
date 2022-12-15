import React from 'react'
import styles from './homepage.module.scss'

type HomepageProps = {

}

const Homepage: React.FC<HomepageProps> = () => {
  return (
  <div className={styles.container}>
      <h1>Welcome to my portfolio site.</h1>
      <p><strong>My name is Arttu Lindqvist.</strong>
      <br/>On this site you can find information about my experience with software development.
      <br/>On the <em>about me</em> page you can find above has more information about me.
      <br/>Above you can also find my contact links that include my email address and LinkedIn profile.
      <br/>Below you can find my Github profile to see projects I have made. 
      <br/>There you can also find my CV if you are interested.
      </p>
  </div>
  )
}

export default Homepage
