import React from 'react';
import styles from './info.module.scss';

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <nav>
        <h2><ul>
          <li>Age: 22</li>
          <li></li>
          <li></li>
        </ul></h2>
      </nav>
    </div>
  )
}

export default Main
