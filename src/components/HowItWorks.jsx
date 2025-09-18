import React from 'react';

export default function HowItWorks() {
  const steps = [
    { n: 1, title: 'Pilih Layanan', desc: 'Pilih top up atau akun dijual.' },
    { n: 2, title: 'Masuk/Hubungi', desc: 'Top up butuh login, akun dijual via WhatsApp.' },
    { n: 3, title: 'Pembayaran', desc: 'Selesaikan pembayaran sesuai instruksi.' },
  ];

  return (
    <section className="section">
      <div className="section-head">
        <h2>Cara Kerja</h2>
      </div>
      <div className="steps">
        {steps.map((s) => (
          <div key={s.n} className="step">
            <div className="step-n">{s.n}</div>
            <div className="step-title">{s.title}</div>
            <div className="step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


