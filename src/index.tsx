import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './components/homepage/homepage';
import styles from './index.module.scss'
import Navbar from './components/navbar/navbar';
import Projects from './components/info/projects';

const Index = () => {
  return (
    <div className={styles.container}>
      Index
    </div>
  )
}

export default Index


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='home' element={<Homepage />} />
        <Route path='projects' element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
