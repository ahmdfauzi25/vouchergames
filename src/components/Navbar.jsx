import React from 'react';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <span className="brand-logo">HG</span>
          <span className="brand-name">HiddenGame</span>
        </div>

        <div className="nav-search">
          <span className="search-prefix">Cari game atau voucher</span>
          <input className="search-input" type="text" placeholder="Mobile Legends, FF, Steam..." />
        </div>

        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/orders" className="nav-link">Cek Pesanan</a>
          <a href="/leaderboard" className="nav-link">Leaderboard</a>
          <a href="/register" className="btn btn-sm btn-outline">Daftar Member</a>
          <a href="/login" className="btn btn-sm btn-primary">Login Member</a>
        </div>
      </div>
    </nav>
  );
}

// import React from 'react';

// export default function Navbar() {
//   return (
//     <header className="nav">
//       <div className="container nav-inner">
//         <div className="brand">
//           <span className="brand-logo">HG</span>
//           <span className="brand-name">HiddenGame</span>
//         </div>
//         <nav className="nav-links">
//           <a href="#topup">Top Up</a>
//           <a href="#jual">Jual Akun</a>
//           <a href="/login" className="btn btn-primary btn-sm">Login</a>
//         </nav>
//       </div>
//     </header>
//   );
// }


