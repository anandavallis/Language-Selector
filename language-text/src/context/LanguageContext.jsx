import { createContext, useContext, useState } from 'react';

// Supported languages
const translations = {
  en: {
    welcome: 'Welcome',
    login: 'Login',
  },
  es: {
    welcome: 'Bienvenido',
    login: 'Iniciar sesión',
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  const value = {
    language,
    switchLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
