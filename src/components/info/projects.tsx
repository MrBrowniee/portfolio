import React from 'react';
import { Link } from 'react-router-dom';
import styles from './info.module.scss';

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/MrBrowniee?tab=repositories" target="_blank">github link</a>  
    </div>
  )
}

export default Projects
