import React, { createContext, useState } from 'react';

// Creazione del Context
export const ThemeContext = createContext();

// Componente Provider
export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    // Funzione per cambiare il tema
    const toggleTheme = () => {
        setIsDark(prevTheme => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Esportazione predefinita (opzionale, se necessario)
export default ThemeContext;