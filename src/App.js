import React, { useState } from 'react';
import './App.css';
import Sidebar from '../src/Compo/Sidebar/Sidebar';
import Topbar from './Compo/Topbar/Topbar';
import Main from './Compo/Main/Main';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contentShift, setContentShift] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setContentShift(!contentShift);
  };

  return (
    <div className="app">
      <Topbar onToggleSidebar={toggleSidebar} isOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} />
      <Main contentShift={contentShift} />
    </div>
  );
}

export default App;
