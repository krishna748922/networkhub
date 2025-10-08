import React, { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [active, setActive] = useState(0);
  const sidebarItems = [
    { label: 'Dashboard', icon: '🏠' },
    { label: 'Devices', icon: '🖥️' },
    { label: 'Connections', icon: '🔗' },
    { label: 'Settings', icon: '⚙️' }
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        items={sidebarItems}
        activeIndex={active}
        onItemClick={setActive}
      />
      <div style={{ flex: 1, padding: 30 }}>
        {/* Main content based on active sidebar item */}
        <h1>{sidebarItems[active].label}</h1>
        <p>Content for {sidebarItems[active].label}</p>
      </div>
    </div>
  );
}

export default App;