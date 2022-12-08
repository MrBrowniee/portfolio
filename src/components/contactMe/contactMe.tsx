import React from 'react'
import styles from './contactMe.module.scss';

type ContactMeProps = {

}

const ContactMe: React.FC<ContactMeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Contact me</h1>
        <h2>Email: lindqvist.arttu@gmail.com</h2>
        <h2><a href="https://www.linkedin.com/in/arttu-lindqvist-257740180/">LinkedIn</a></h2>
    </div>
  )
}

export default ContactMe
