import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false); // Close the sidebar if clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    
  }, []);

  return (
    <div className={`sidebar-container ${isOpen ? 'active' : ''}`} ref={sidebarRef}>
      <div className="sidebar">
        <h2>Floriguia</h2>
        <hr />
        
      </div>
      <div className="sidebarButton" onClick={() => setIsOpen(true)}>
        <span>⫶</span>
      </div>
    </div>
  );
};

export default Sidebar;
