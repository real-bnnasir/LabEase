import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from '../src/Compo/Sidebar/Sidebar';
import Topbar from './Compo/Topbar/Topbar';
import Main from './Compo/Main/Main';

function App() {
  // Initialize state from localStorage
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const savedState = localStorage.getItem('sidebarOpen');
    return savedState ? JSON.parse(savedState) : false;
  });
  const [contentShift, setContentShift] = useState(() => {
    const savedState = localStorage.getItem('contentShift');
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    // Save state to localStorage whenever it changes
    localStorage.setItem('sidebarOpen', JSON.stringify(sidebarOpen));
    localStorage.setItem('contentShift', JSON.stringify(contentShift));
  }, [sidebarOpen, contentShift]);

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
