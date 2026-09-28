import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  X, 
  ChevronDown, 
  ArrowDown, 
  Facebook, 
  Share, 
  Copy, 
  Check, 
  Twitter, 
  Info, 
  History, 
  DollarSign, 
  HelpCircle, 
  Star, 
  Quote, 
  Leaf, 
  Droplets, 
  Truck, 
  Sprout, 
  Store, 
  MessageCircle 
} from 'lucide-react';

const pageData = {
  name: "PureGreen Logistik",
  phone: "6289529605601", // Ganti dengan nomor WhatsApp aktif
  address: "Kawasan Pertanian Modern, Jl. Agrikultur No. 12, Palangka Raya, Kalimantan Tengah.",
  title: "Premium Hydroponic Distributor",
  description: "Penyedia sayuran hidroponik segar, bebas pestisida, dan berkualitas tinggi. Solusi pasokan sayur harian yang andal untuk kebutuhan bisnis HORECA (Hotel, Restoran, Cafe) dan Supermarket Anda.",
  logoImg: "./logo.png", // Logo resmi PureGreen Logistik
  heroImg: "./hero-bg.jpg", // Background hidroponik & logistik PureGreen
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    tiktok: "https://www.tiktok.com/@solusilokal.id",
    maps: "https://www.google.com/maps/place/Palangka+Raya,+Kota+Palangka+Raya,+Kalimantan+Tengah/", 
    facebook: "https://facebook.com/", 
    twitter: "https://twitter.com/"
  },
  catalog: [
    { 
      name: "Selada Romaine", 
      type: "Premium Salad",
      yield: "Panen Harian", 
      shelfLife: "7-10 Hari",
      img: "./catalog-romaine.webp"
    },
    { 
      name: "Pakcoy Green", 
      type: "Sayur Masak",
      yield: "Panen Harian", 
      shelfLife: "5-7 Hari",
      img: "./catalog-pakcoy.webp"
    },
    { 
      name: "Selada Kriting", 
      type: "Garnish & Burger",
      yield: "Panen Harian", 
      shelfLife: "7 Hari",
      img: "./catalog-selada-keriting.webp"
    },
    { 
      name: "Bayam Brazil", 
      type: "Superfood",
      yield: "Panen Mingguan", 
      shelfLife: "5 Hari",
      img: "./catalog-bayam-brazil.webp"
    }
  ],
  pricing: [
    { route: "Paket Starter (Resto Kecil)", type: "Campur (Max 3 Jenis)", price: "Rp 150rb / 10kg" },
    { route: "Paket Reguler (Cafe/Catering)", type: "Campur Bebas", price: "Rp 350rb / 25kg" },
    { route: "Paket Enterprise (Supermarket)", type: "Sesuai Kontrak", price: "Rp 650rb / 50kg" },
    { route: "Permintaan Khusus / Eceran", type: "Semua Jenis Sayur", price: "Hubungi Sales" }
  ],
  faqs: [
    { q: "Apakah ada minimum order untuk pengiriman?", a: "Ya, untuk gratis ongkos kirim di dalam kota Palangka Raya, minimum pemesanan adalah 10kg. Untuk pemesanan di bawah itu, dapat diambil langsung ke lokasi kami atau dikenakan biaya kirim flat." },
    { q: "Apakah sayuran PureGreen benar-benar bebas pestisida?", a: "100% bebas pestisida kimia. Kami menggunakan sistem hidroponik tertutup di dalam green house dan mengandalkan pest control alami serta nutrisi AB Mix standar food-grade." },
    { q: "Bagaimana sistem pembayaran untuk mitra B2B?", a: "Untuk bulan pertama kemitraan, kami menerapkan sistem Cash on Delivery (COD) atau transfer di muka. Setelah penandatanganan kontrak kerja sama bulanan, pembayaran dapat dilakukan dengan termin Net-14 atau Net-30." },
    { q: "Apakah bisa request jenis sayuran tertentu untuk ditanam?", a: "Sangat bisa! Kami melayani sistem 'Contract Farming' di mana kami akan menanam spesifik sesuai kebutuhan restoran/bisnis Anda dengan komitmen pengambilan tertentu." }
  ],
  testimonials: [
    { name: "Chef Junaedi", role: "Head Chef, Resto Bintang", rating: 5, text: "Kualitas selada romaine dari PureGreen sangat konsisten. Sangat renyah, daunnya utuh tidak berlubang, dan tahan lama disimpan di chiller. Pasokan selalu tepat waktu setiap pagi." },
    { name: "Siska Amelia", role: "Manager Supermarket Lokal", rating: 5, text: "Sayuran hidroponik PureGreen selalu menjadi best-seller di rak fresh produce kami. Packaging rapi, bersih dari akar, dan pelanggan sangat menyukainya." },
    { name: "Budi Prakoso", role: "Owner Cafe Senja", rating: 4, text: "Sangat membantu operasional cafe kami. Sayur datang sudah dalam keadaan bersih siap potong. Menghemat waktu prep di dapur." }
  ]
};

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const business = formData.get('business');
    const address = formData.get('address');
    const volume = formData.get('volume');
    const vegType = formData.get('vegType');
    
    const text = `Halo Tim Sales *${pageData.name}*,\n\nSaya tertarik untuk memesan pasokan sayur hidroponik. Berikut detail kebutuhan saya:\n\n👤 Nama: ${name}\n🏢 Nama Usaha: ${business}\n📍 Alamat Pengiriman: ${address}\n🥬 Pilihan Sayur: ${vegType}\n📦 Estimasi Kebutuhan: ${volume} kg/minggu\n\nMohon informasi ketersediaan stok dan penawaran harganya. Terima kasih.`;
    
    const waUrl = `https://wa.me/${pageData.phone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try { await navigator.share(shareData); } catch (err) { console.error('Error sharing:', err); }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        body {
          background-color: #f8fafc;
          color: #0f172a;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 px-6">
          <button onClick={handleShare} aria-label="Share this page" className="absolute top-6 right-6 z-20 p-3 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 text-slate-700 hover:bg-white transition-all shadow-sm">
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0 bg-white">
            <img src={pageData.heroImg} alt={pageData.name} className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-3xl p-2 bg-white/95 backdrop-blur-md mb-6 shadow-xl border border-[#4CAF50]/30 overflow-hidden flex items-center justify-center">
               <img src={pageData.logoImg} alt={pageData.name} className="w-full h-full object-contain" />
            </div>

            <h1 className="text-4xl font-extrabold text-[#4CAF50] mb-2 leading-tight tracking-tight drop-shadow-sm">
              PUREGREEN
            </h1>
            <h2 className="text-2xl font-bold text-[#1E5641] mb-2 tracking-widest drop-shadow-sm -mt-3">
              LOGISTIK
            </h2>
            <p className="text-[#4CAF50] font-bold mb-4 tracking-wider text-sm uppercase mt-2">{pageData.title}</p>
            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8 max-w-[95%]">
              {pageData.description}
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm mb-8">
              <div className="grid grid-cols-2 gap-3 w-full">
                <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-[#4CAF50]/30 hover:bg-white transition-all text-slate-700 shadow-sm text-sm font-medium">
                  <Instagram size={18} className="text-[#4CAF50]" /> Instagram
                </a>
                <a href={pageData.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-[#4CAF50]/30 hover:bg-white transition-all text-slate-700 shadow-sm text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#4CAF50]">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <button onClick={() => scrollToSection('location')} className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-[#1E5641]/30 hover:bg-white transition-all text-slate-700 text-sm font-medium shadow-[0_0_15px_rgba(30,86,65,0.05)]">
                <MapPin size={18} className="text-[#1E5641]" /> Lokasi Farm & Distribusi
              </button>
            </div>

            <button onClick={() => scrollToSection('booking-form')} className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#4CAF50] text-white rounded-2xl font-bold text-sm uppercase tracking-wider hover:bg-[#3d8c40] transition-all shadow-[0_8px_20px_rgba(76,175,80,0.3)]">
              Mulai Berlangganan
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-12 px-6 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100">
               <Info className="text-[#4CAF50]" size={24} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Tentang Kami</h2>
          </div>
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 text-emerald-100/50 pointer-events-none">
              <Sprout size={140} />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10 mb-4 font-medium">
              PureGreen Logistik hadir menjembatani jarak antara kebun hidroponik modern dengan dapur komersial Anda. Kami percaya bahwa sayuran segar adalah fondasi dari setiap sajian lezat.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10 font-medium">
              Dengan kontrol kualitas yang ketat, air bernutrisi optimal, dan pemanenan di waktu yang tepat, kami memastikan setiap helai daun yang sampai ke tangan Anda masih dalam kondisi prima, renyah, dan kaya nutrisi.
            </p>
          </div>
        </section>

        {/* HISTORY SECTION */}
        <section id="history" className="pb-12 px-6 bg-white">
          <div className="flex items-center gap-3 mt-4 mb-6">
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100">
              <History className="text-[#4CAF50]" size={24} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Perjalanan Kami</h2>
          </div>
          <div className="pl-4 border-l-2 border-emerald-200 flex flex-col gap-8 ml-2">
            <div className="relative">
              <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[#4CAF50] ring-4 ring-white"></div>
              <h4 className="text-slate-800 font-bold text-sm mb-1">2020 - Green House Pertama</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Berawal dari green house 200m² dengan sistem DFT, fokus memenuhi permintaan pasar lokal dan komunitas.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[#4CAF50] ring-4 ring-white"></div>
              <h4 className="text-slate-800 font-bold text-sm mb-1">2022 - Skala Komersial B2B</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Ekspansi lahan hingga 1000m² dan meresmikan layanan khusus suplai restoran dengan komitmen pasokan harian.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[#4CAF50] ring-4 ring-white"></div>
              <h4 className="text-slate-800 font-bold text-sm mb-1">2024 - Integrasi Cold Chain</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Meluncurkan armada truk pendingin sendiri untuk memastikan sayuran tetap segar 100% sampai ke lokasi pelanggan.</p>
            </div>
          </div>
        </section>

        {/* CATALOG SECTION */}
        <section id="catalog" className="py-12 bg-slate-50 border-y border-slate-200 overflow-hidden">
          <div className="px-6 mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-slate-900">Katalog Sayuran</h2>
            <p className="text-[#4CAF50] text-sm font-medium">Panen segar setiap hari, siap antar ke lokasi Anda.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 pb-8 no-scrollbar">
            {pageData.catalog.map((item, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                <div className="h-44 overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#4CAF50] shadow-sm border border-slate-100">
                    {item.type}
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                  <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <div className="flex flex-col gap-1.5 items-center w-1/2">
                      <Sprout size={18} className="text-[#1E5641]" />
                      <span className="text-[11px] font-semibold text-slate-500 text-center">{item.yield}</span>
                    </div>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="flex flex-col gap-1.5 items-center w-1/2">
                      <Store size={18} className="text-[#1E5641]" />
                      <span className="text-[11px] font-semibold text-slate-500 text-center">Tahan {item.shelfLife}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-12 px-6 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100">
              <DollarSign className="text-[#4CAF50]" size={24} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Estimasi Harga Grosir</h2>
          </div>
          <p className="text-slate-500 text-sm mb-6 font-medium">Penawaran harga terbaik untuk pembelian rutin dan skala besar. Harga dapat menyesuaikan musim.</p>
          
          <div className="flex flex-col gap-3">
            {pageData.pricing.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm gap-2 hover:border-[#4CAF50] transition-colors">
                <div className="flex flex-col gap-1.5 flex-1">
                  <span className="text-[14px] font-bold text-slate-800">{item.route}</span>
                  <span className="text-[12px] font-medium text-[#4CAF50] bg-emerald-50 w-fit px-2 py-0.5 rounded-md border border-emerald-100">{item.type}</span>
                </div>
                <div className="text-[12px] font-bold bg-[#1E5641] py-2.5 rounded-xl text-white shadow-sm w-[135px] text-center shrink-0 border border-[#1E5641]/50">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOCATION SECTION */}
        <section id="location" className="py-12 px-6 bg-slate-50 border-y border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100">
              <MapPin className="text-[#4CAF50]" size={24} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Pusat Distribusi</h2>
          </div>
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 text-[16px] mb-2">PureGreen Main Farm & Hub</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">{pageData.address}</p>
            <a 
              href={pageData.links.maps} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-50 text-[#1E5641] font-bold text-sm rounded-xl hover:bg-emerald-100 transition-colors border border-emerald-200"
            >
              <MapPin size={18} /> Buka Arah di Google Maps
            </a>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-12 px-6 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100">
              <HelpCircle className="text-[#4CAF50]" size={24} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Tanya Jawab</h2>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-[14px] text-slate-800 pr-4">{faq.q}</span>
                  <ChevronDown size={20} className={`text-[#4CAF50] shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="p-5 pt-0 text-slate-600 text-[13px] font-medium leading-relaxed border-t border-slate-200 mt-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-12 px-6 bg-slate-50 border-y border-slate-200">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-slate-900">Ulasan Klien</h2>
            <p className="text-[#4CAF50] text-sm font-medium">Dipercaya oleh berbagai pelaku bisnis kuliner.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <Quote className="text-[#1E5641]" size={32} />
                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#4CAF50] text-[#4CAF50]" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">"{testi.text}"</p>
                <div className="mt-auto pt-5 border-t border-slate-100 flex flex-col">
                  <span className="text-[14px] font-bold text-slate-800">{testi.name}</span>
                  <span className="text-[12px] font-medium text-[#4CAF50] mt-0.5">{testi.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING FORM SECTION */}
        <section id="booking-form" className="py-12 px-6 bg-white">
          <div className="bg-white border border-[#4CAF50]/30 rounded-[2rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 mb-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Ajukan Permintaan Suplai</h2>
              <p className="text-[#4CAF50] text-[14px] leading-relaxed font-medium">Dapatkan penawaran harga grosir terbaik untuk bisnis Anda.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Nama Pemesan</label>
                <input type="text" name="name" required placeholder="Cth: Bpk. Andi" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Nama Usaha / Restoran</label>
                <input type="text" name="business" required placeholder="Cth: Warung Makan Sehat" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Alamat Pengiriman</label>
                <input type="text" name="address" required placeholder="Cth: Jl. Sudirman No.10" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Pilihan Sayur</label>
                  <select name="vegType" required defaultValue="" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all appearance-none">
                    <option value="" disabled className="text-slate-400">Pilih...</option>
                    <option value="Selada Romaine">Selada Romaine</option>
                    <option value="Pakcoy">Pakcoy Green</option>
                    <option value="Selada Kriting">Selada Kriting</option>
                    <option value="Campur (Mix)">Campur (Mix)</option>
                    <option value="Lainnya">Lainnya (Bisa diinfo via WA)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Estimasi Kebutuhan</label>
                  <input type="number" name="volume" min="1" required placeholder="Kg / Minggu" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all" />
                </div>
              </div>

              <button type="submit" className="w-full mt-4 bg-[#4CAF50] text-white font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#3d8c40] transition-colors shadow-[0_4px_14px_rgba(76,175,80,0.2)]">
                Kirim via WhatsApp
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center bg-slate-50 border-t border-slate-200">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 border border-slate-200 shadow-sm overflow-hidden p-2">
            <img src={pageData.logoImg} alt={pageData.name} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col gap-1 items-center px-6">
            <span className="font-extrabold text-[#4CAF50] text-lg tracking-wide">{pageData.name}</span>
            <span className="text-slate-500 text-xs mt-1 font-medium max-w-[280px]">{pageData.address}</span>
          </div>
          <p className="text-slate-400 text-[12px] mt-8 mb-2 font-medium">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] tracking-wide font-medium hover:text-[#4CAF50] transition-colors mt-2"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
          <button onClick={() => scrollToSection('booking-form')} className="w-full flex items-center justify-between px-5 py-3.5 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl text-slate-900 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:bg-slate-50 active:scale-[0.98] transition-all">
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm text-slate-900">Pesan Pasokan Sayur</span>
              <span className="text-[11px] font-medium text-[#4CAF50] mt-0.5">Diskon untuk kemitraan</span>
            </div>
            <div className="bg-[#4CAF50] text-white p-2.5 rounded-xl shadow-sm">
              <MessageCircle size={20} />
            </div>
          </button>
        </div>

      </main>

      {/* SHARE MODAL */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity" onClick={() => setShowShareModal(false)}>
          <div className="w-full max-w-[480px] bg-white border-t border-slate-200 sm:border sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-slate-900 font-bold text-[16px]">Bagikan {pageData.name}</h3>
              <button onClick={() => setShowShareModal(false)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-all"><X size={20} /></button>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[75px]">
                <button onClick={copyToClipboard} className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-all border border-slate-200 shadow-sm">
                  {copied ? <Check size={24} className="text-[#4CAF50]" /> : <Copy size={24} />}
                </button>
                <span className="text-[12px] font-semibold text-slate-500 text-center">{copied ? 'Tersalin' : 'Salin Tautan'}</span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[75px]">
                <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank')} className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-all shadow-sm">
                  <Twitter size={24} />
                </button>
                <span className="text-[12px] font-semibold text-slate-500 text-center">X</span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[75px]">
                <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')} className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm">
                  <Facebook size={24} className="fill-current" />
                </button>
                <span className="text-[12px] font-semibold text-slate-500 text-center">Facebook</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}