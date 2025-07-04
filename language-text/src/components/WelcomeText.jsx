import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const WelcomeText = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h2>{t.welcome}</h2>
      <p>{t.login}</p>
    </div>
  );
};

export default WelcomeText;
