import React, { useEffect, useState } from 'react';

function formatHHMMSS(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(total / 3600)).padStart(2, '0');
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
  const s = String(total % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

export default function FlashSale({ children, endsAt }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const remaining = endsAt ? new Date(endsAt).getTime() - now : 0;
  return (
    <section className="flashsale section">
      <div className="container">
        <div className="flashsale-head">
          <div className="flashsale-title">
            <img src="http://localhost:8000/img/flashsale.gif" alt="Flash Sale" className="flashsale-icon" />
            <img src="http://localhost:8000/img/thunder.gif" alt="Thunder" className="flashsale-icon-thunder" style={{ marginLeft: '-45px' }} />
          </div>
          <div className="flashsale-timer">{formatHHMMSS(remaining)}</div>
        </div>
        <div className="flashsale-body">
          {children}
        </div>
      </div>
    </section>
  );
}


