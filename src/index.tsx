import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.module.scss'
import Navbar from './components/navbar/navbar'
import ContactMe from './components/contactMe/contactMe'
import Footer from './components/footer/footer'
import Cv from './components/info/cv'
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutMe from './components/aboutMe/aboutMe'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router> 
      <Navbar />
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='contactMe' element={<ContactMe />}></Route>
          <Route path='aboutMe' element={<AboutMe />}></Route>     
        </Routes>
      <Footer />
        <Routes>
          <Route path='cv' element={<Cv />}></Route>
        </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
