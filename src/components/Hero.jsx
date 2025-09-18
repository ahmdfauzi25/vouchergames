import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Top Up Voucher Games & Jual Akun</h1>
          <p>Cepat, aman, dan terpercaya. Harga termurah, layanan 24/7.</p>
          <div className="hero-actions">
            <a href="#topup" className="btn btn-primary">Top Up Sekarang</a>
            <a href="#jual" className="btn btn-outline">Lihat Akun Dijual</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true" />
      </div>
    </section>
  );
}


