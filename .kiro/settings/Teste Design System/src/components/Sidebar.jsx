import React from 'react';

const Sidebar = ({ navigationData, activeSection, onSectionChange }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Design System</h1>
        <p className="sidebar-subtitle">Documentação v1.0</p>
      </div>
      
      <nav>
        {navigationData.map((section, index) => (
          <div key={index} className="nav-section">
            <h3 className="nav-section-title">{section.title}</h3>
            {section.items.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => onSectionChange(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;