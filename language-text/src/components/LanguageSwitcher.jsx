import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { switchLanguage, language } = useLanguage();

  return (
    <div>
      <button onClick={() => switchLanguage('en')} disabled={language === 'en'}>
        English
      </button>
      <button onClick={() => switchLanguage('es')} disabled={language === 'es'}>
        Spanish
      </button>
    </div>
  );
};

export default LanguageSwitcher;
