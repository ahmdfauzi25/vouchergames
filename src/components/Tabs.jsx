import React from 'react';

export default function Tabs({ active, onChange }) {
  return (
    <div className="tabs">
      <button className={active === 'topup' ? 'tab active' : 'tab'} onClick={() => onChange('topup')}>Top Up</button>
      <button className={active === 'jual' ? 'tab active' : 'tab'} onClick={() => onChange('jual')}>Jual Akun</button>
    </div>
  );
}


