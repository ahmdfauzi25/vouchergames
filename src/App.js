import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import FlashSale from './components/FlashSale';
import CategoryPills from './components/CategoryPills';
import Tabs from './components/Tabs';
import ProductGrid from './components/ProductGrid';
import AccountGrid from './components/AccountGrid';
import Footer from './components/Footer';
// Removed Benefits and HowItWorks for a cleaner aesthetic landing

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8000/api';
const ADMIN_WHATSAPP = process.env.REACT_APP_ADMIN_WA || '6281617591039';

function currency(idr) {
  try {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(idr);
  } catch (_) {
    return `Rp ${idr}`;
  }
}

function App() {
  const [products, setProducts] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('topup');
  const [home, setHome] = useState({ banners: [], flashsaleEndsAt: null });

  useEffect(() => {
    async function fetchData() {
      try {
        const [pRes, aRes, hRes] = await Promise.all([
          fetch(`${API_BASE}/products`),
          fetch(`${API_BASE}/jual-accounts`),
          fetch(`${API_BASE}/home`),
        ]);
        if (!pRes.ok || !aRes.ok || !hRes.ok) throw new Error('Gagal memuat data');
        const [pJson, aJson, hJson] = await Promise.all([pRes.json(), aRes.json(), hRes.json()]);
        setProducts(pJson);
        setAccounts(aJson);
        setHome(hJson);
      } catch (e) {
        setError(e.message || 'Terjadi kesalahan');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Dev-only auto refresh every 5 seconds
  // useEffect(() => {
  //   if (process.env.NODE_ENV !== 'development') return;
  //   const intervalId = setInterval(() => {
  //     window.location.reload();
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, []);

  const handleBuyVoucher = () => {
    window.location.href = '/login';
  };

  const handleBuyAccount = (item) => {
    const message = encodeURIComponent(`Halo Admin, saya ingin beli akun: ${item.title}${item.price ? ' (' + currency(item.price) + ')' : ''}`);
    window.location.href = `https://wa.me/${ADMIN_WHATSAPP}?text=${message}`;
  };

  if (loading) return <div style={{ padding: 24 }}>Memuat...</div>;
  if (error) return <div style={{ padding: 24, color: 'red' }}>{error}</div>;

  return (
    <>
      <Navbar />
      <Banner slides={home.banners} />
      <Hero />
      <CategoryPills />
      <FlashSale endsAt={home.flashsaleEndsAt || new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()}>
        <ProductGrid items={products.slice(0, 3)} onBuy={handleBuyVoucher} />
      </FlashSale>
      <div className="container">
        <Tabs active={activeTab} onChange={setActiveTab} />

        <section id="topup" className="section">
          <div className="section-head">
            <h2>PRODUCT POPULER<img src="http://localhost:8000/img/fire.gif" alt="Thunder" className="flashsale-icon-thunder" style={{ marginLeft: '-20px' }} /></h2>
          </div>
          <ProductGrid items={products} onBuy={handleBuyVoucher} />
        </section>

        <section id="jual" className="section">
          <div className="section-head">
            <h2>Akun Dijual</h2>
          </div>
          <AccountGrid items={accounts} onContact={handleBuyAccount} />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
