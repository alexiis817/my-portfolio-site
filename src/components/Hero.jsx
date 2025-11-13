import React from 'react'
import translation from '../utils/translations'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import LanguageContext from '../context/LanguageContext'
import '../styles/Hero.css';



const Hero = () => {
  const {isDark} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const t = translation[language];
  return (
    <div>
    <div className = {`heroImage ${isDark ? 'dark' : ''}`}>
      <div className='benvenuto'>
        <h1> {t.benvenuto}</h1>
        <div className='logos'>
          <img src="/logo/html-1.svg" alt="" />
          <img src="/logo/css-3.svg" alt="" />
          <img src="/logo/logo-javascript.svg" alt="" />
          <img src="/logo/react-2.svg" alt="" />
          <img src="/logo/nodejs-1.svg" alt="" />
          <img src="/logo/mongodb-icon-2.svg" alt="" />
          <img src="/logo/python-4.svg" alt="" />
        </div>
       
      </div>
    
    
    </div>
        
      
    </div>
  )
}

export default Hero