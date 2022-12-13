import React from 'react'
import styles from './contactMe.module.scss'

type ContactMeProps = {

}

const ContactMe: React.FC<ContactMeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Contact me and additional information</h1>
        <ul>
          <li>Email: lindqvist.arttu@gmail.com</li>
          <li><a href="https://www.linkedin.com/in/arttu-lindqvist-257740180/">LinkedIn</a></li>
          <li>Open CV here</li>
        </ul>
    </div>
  )
}

export default ContactMe
