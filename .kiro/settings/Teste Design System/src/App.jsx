import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { navigationData } from './data/navigation';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <Sidebar 
        navigationData={navigationData}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <MainContent activeSection={activeSection} />
    </div>
  );
}

export default App;