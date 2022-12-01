import React from 'react'
import styles from './contactMe.module.scss';

type ContactMeProps = {

}

const ContactMe: React.FC<ContactMeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Contact me</h1>
      <h2></h2>
    </div>
  )
}

export default ContactMe
