import React from 'react'
import styles from './contactMe.module.scss';

type ContactMeProps = {

}

const ContactMe: React.FC<ContactMeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Contact information</h1>
      <h2><ul>
        <li>Email: lindqvist.arttu@gmail.com</li>
        <li><a href="https://www.linkedin.com/in/arttu-lindqvist-257740180/">LinkedIn</a></li>
      </ul></h2>
    </div>
  )
}

export default ContactMe
