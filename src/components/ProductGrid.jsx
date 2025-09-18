import React from 'react';

function currency(idr) {
  try {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(idr);
  } catch (_) {
    return `Rp ${idr}`;
  }
}

export default function ProductGrid({ items, onBuy }) {
  return (
    <div className="grid">
      {items.map((p) => (
        <div key={p.id} className="card">
          {p.image_url ? (
            <img src={p.image_url} alt={p.name} className="card-img" />
          ) : (
            <div className="card-img placeholder" />
          )}
          <div className="card-body">
            <div className="card-title">{p.name}</div>
            <div className="card-price">{currency(p.price)}</div>
            <button className="btn btn-primary w-full" onClick={() => onBuy(p)}>Beli</button>
          </div>
        </div>
      ))}
    </div>
  );
}


