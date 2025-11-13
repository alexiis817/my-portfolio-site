import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';
import translations from '../utils/translations';
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // Importa Link per il routing
import '../styles/Navbar.css';

const Navbar = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext); // Consuma il Context
    const { language, changeLanguage } = useContext(LanguageContext); // Usa il LanguageContext

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value; // Ottieni la lingua selezionata
        changeLanguage(selectedLanguage); // Aggiorna la lingua nel context
    };

    const t = translations[language];

    return (
        <div className={`navbarContainer ${isDark ? 'dark' : ''}`}>
            {/* Left Side */}
            <div className='leftSide'>
                <button id='themeButton' onClick={toggleTheme}>
                    {isDark ? <IoSunny/> : <FaRegMoon/>}</button>
                    <select value={language} onChange={handleLanguageChange}>                    <option value="it">Italiano</option>
                    <option value="en">English</option>
                    <option value="es">Espanol</option>
                    <option value="pt">Portoguese</option>
                    <option value="fr">French</option>
                </select>
            </div>

            {/* Right Side */}
            <div className='rightSide'>
                <div className='navInfo'>
                    <h2>{t.chiSono}</h2>
                    <div className={`dropdown ${isDark ? 'dark' : ''}`}>
                        <Link to= '/la-mia-storia'><h3>{t.laMiaStoria}</h3></Link>
                        <Link to= '/curriculum'><h3>{t.curriculum}</h3></Link>
                        <Link to= '/linguaggi'><h3>{t.linguaggiDiProgrammazione}</h3></Link>
                        <Link to= '/skills'><h3>{t.skills}</h3></Link>
                    </div>
                </div>
                <div className='navInfo'>
                    <h2>{t.contatti}</h2>
                    <div className={`dropdown ${isDark ? 'dark' : ''}`}>
                        <h3>{t.email}</h3>
                        <h3>3299588411</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;