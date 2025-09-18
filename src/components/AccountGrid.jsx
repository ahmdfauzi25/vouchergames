import React from 'react';

function currency(idr) {
  try {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(idr);
  } catch (_) {
    return `Rp ${idr}`;
  }
}

export default function AccountGrid({ items, onContact }) {
  return (
    <div className="grid">
      {items.map((a) => (
        <div key={a.id} className="card">
          <div className="card-body">
            <div className="card-title">{a.title}</div>
            {a.price != null && <div className="card-price">{currency(a.price)}</div>}
            {a.description && <div className="card-desc">{a.description}</div>}
            <button className="btn btn-success w-full" onClick={() => onContact(a)}>Hubungi Admin</button>
          </div>
        </div>
      ))}
    </div>
  );
}


