import React from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import WelcomeText from './components/WelcomeText';

const App = () => {
  return (
    <div>
      <h1>Language Context Example</h1>
      <LanguageSwitcher />
      <WelcomeText />
    </div>
  );
};

export default App;
