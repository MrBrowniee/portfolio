import React from 'react';
import styles from './info.module.scss';

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/MrBrowniee?tab=repositories">github link</a>  
    </div>
  )
}

export default Projects
