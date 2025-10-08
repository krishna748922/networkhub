import React from 'react';

const SidebarItem = ({ label, icon, active, onClick }) => (
  <div
    className={`sidebar-item${active ? ' active' : ''}`}
    onClick={onClick}
    style={{
      padding: '12px 20px',
      cursor: 'pointer',
      background: active ? '#e0e0e0' : 'transparent',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    {icon && <span style={{ marginRight: 10 }}>{icon}</span>}
    {label}
  </div>
);

const Sidebar = ({ items, activeIndex, onItemClick }) => (
  <div
    className="sidebar"
    style={{
      width: 220,
      background: '#f5f5f5',
      height: '100vh',
      boxShadow: '2px 0 5px rgba(0,0,0,0.05)'
    }}
  >
    <h2 style={{ padding: '20px 20px 10px', margin: 0 }}>Network Hub</h2>
    {items.map((item, idx) => (
      <SidebarItem
        key={item.label}
        label={item.label}
        icon={item.icon}
        active={activeIndex === idx}
        onClick={() => onItemClick(idx)}
      />
    ))}
  </div>
);

export default Sidebar;