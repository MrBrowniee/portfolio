import React from 'react'
import styles from './info.module.scss';

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/MrBrowniee">cv</a>
    </div>
  )
}

export default Cv
