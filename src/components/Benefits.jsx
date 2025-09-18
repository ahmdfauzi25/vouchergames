import React from 'react';

export default function Benefits() {
  const items = [
    { title: 'Proses Cepat', desc: 'Top up instan, tanpa ribet.' },
    { title: 'Harga Terbaik', desc: 'Harga bersaing, banyak promo.' },
    { title: 'Support 24/7', desc: 'Tim kami siap membantu kapan saja.' },
  ];

  return (
    <section className="section">
      <div className="section-head">
        <h2>Mengapa Pilih Kami</h2>
      </div>
      <div className="benefits">
        {items.map((b, idx) => (
          <div key={idx} className="benefit">
            <div className="benefit-icon" aria-hidden="true" />
            <div className="benefit-title">{b.title}</div>
            <div className="benefit-desc">{b.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


