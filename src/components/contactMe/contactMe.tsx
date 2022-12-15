import React from 'react'
import styles from './contactMe.module.scss'

type ContactMeProps = {

}

const ContactMe: React.FC<ContactMeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Contact me</h1>
        <ul>
          <li>Email: <strong>lindqvist.arttu@gmail.com</strong></li>
          <li><a href="https://www.linkedin.com/in/arttu-lindqvist-257740180/">LinkedIn</a></li>
        </ul>
    </div>
  )
}

export default ContactMe
