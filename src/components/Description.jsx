import React, {useContext} from 'react'
import translation from '../utils/translations'
import LanguageContext from '../context/LanguageContext'
import ThemeContext from '../context/ThemeContext'
import '../styles/Description.css'

const Description = () => {
    const {isDark} = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);
    const t = translation[language];
  return (
    <div className = {`descriptionContainer ${isDark ? 'dark' : ''}`}>
       <div className='descrizione'>
       <div className='imageContainer'>
       <img src="./images/pexels-shkrabaanthony-5816299.jpg" alt="" />
       <h3>{t.miaStoriaPage}</h3>
        
        <img src="./images/pexels-googledeepmind-18069697.jpg" alt="" />
        </div> 
       </div>
    </div>
  )
}

export default Description