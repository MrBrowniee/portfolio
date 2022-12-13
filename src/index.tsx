import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import styles from './index.module.scss'
import Navbar from './components/navbar/navbar'
import ContactMe from './components/contactMe/contactMe'
import Projects from './components/info/projects'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const Index = () => {
  return (
    <div className={styles.body}>
      index
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
      <Navbar />
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='projects' element={<Projects />}></Route>
        <Route path='contactMe' element={<ContactMe />}></Route>     
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
