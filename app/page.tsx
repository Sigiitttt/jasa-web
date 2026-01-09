"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  LayoutTemplate,
  Layout,
  ArrowRight,
  Code2,
  Smartphone,
  Zap,
  Globe,
  ShieldCheck,
  BarChart3,
  MessageCircle,
  Rocket,
  Clock,
  Send,
  Users, // << Ini yang tadi menyebabkan error
  Menu,
  Mail,
  Instagram,
  Facebook
} from "lucide-react";
import { motion } from "framer-motion";

// --- ANIMASI REUSABLE ---
const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {

  // 1. DATA LAYANAN
  const services = [
    {
      title: "Custom Development",
      description: "Bukan template instan. Kami coding manual (Next.js) agar website cepat, aman, dan bisa dicustom sesuka hati.",
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Toko Online (E-Commerce)",
      description: "Sistem jualan lengkap dengan keranjang belanja, hitung ongkir otomatis, dan integrasi pembayaran.",
      icon: <Globe className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Premium UI/UX Design",
      description: "Tampilan website kelas dunia yang memanjakan mata pengunjung dan meningkatkan kepercayaan brand.",
      icon: <Layout className="w-8 h-8 text-pink-400" />,
    },
    {
      title: "SEO Optimization",
      description: "Struktur website yang disukai Google agar bisnis Anda mudah ditemukan di halaman pertama pencarian.",
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Mobile Friendly",
      description: "Tampilan otomatis menyesuaikan layar HP, Tablet, dan Desktop dengan sempurna.",
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "High Performance",
      description: "Loading super cepat (< 2 detik) agar pengunjung tidak kabur karena website lemot.",
      icon: <Zap className="w-8 h-8 text-orange-400" />,
    },
  ];

  // 2. DATA PORTFOLIO
  const portfolios = [
    {
      id: 1,
      client: "Urban Fashion",
      title: "E-Commerce Brand Lokal",
      desc: "Platform belanja fashion dengan fitur stok real-time dan flash sale timer.",
      tags: ["Next.js", "Midtrans", "Redux"],
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2400&auto=format&fit=crop"
    },
    {
      id: 2,
      client: "Tech Solutions",
      title: "Corporate Company Profile",
      desc: "Website perusahaan teknologi dengan animasi 3D interaktif yang elegan.",
      tags: ["React", "Three.js", "Tailwind"],
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop"
    },
    {
      id: 3,
      client: "Coffee Space",
      title: "Landing Page Cafe",
      desc: "Halaman promosi cafe dengan fitur reservasi meja dan menu digital.",
      tags: ["Framer Motion", "UI Design"],
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2400&auto=format&fit=crop"
    },
  ];

  // 3. DATA KENAPA PENTING
  const benefits = [
    { title: "Kredibilitas Bisnis", desc: "Konsumen lebih percaya bisnis yang punya website resmi.", icon: ShieldCheck },
    { title: "Buka 24 Jam", desc: "Website bekerja mempromosikan bisnis Anda saat Anda tidur.", icon: Clock },
    { title: "Jangkauan Luas", desc: "Dapatkan pelanggan baru dari luar kota bahkan luar negeri.", icon: Globe },
    { title: "Hemat Biaya Iklan", desc: "Informasi lengkap tersedia tanpa perlu cetak brosur fisik.", icon: Users },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans">

      {/* =========================================
          1. HERO SECTION (ULTIMATE UPGRADE: Glassmorphism & Valid Images)
      ========================================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-[#020617]">

        {/* --- Background Ambient Effects --- */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 opacity-50" fill="white" />

        {/* Gradient Blob Kanan Atas */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        {/* Gradient Blob Kiri Bawah */}
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] -z-10" />

        {/* Grid Pattern Halus */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* --- KOLOM KIRI (COPYWRITING) --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left order-2 lg:order-1 relative"
            >
              {/* Efek Glow di belakang teks */}
              <div className="absolute -inset-10 bg-indigo-500/20 blur-3xl rounded-full opacity-20 -z-10 pointer-events-none"></div>

              {/* Badge Premium */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-900/20 text-indigo-300 text-xs font-semibold backdrop-blur-md mb-8 mx-auto lg:mx-0 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:bg-indigo-900/40 transition-colors cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                </span>
                Partner Digital Terpercaya
              </div>

              {/* Headline High Impact */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                Website Profesional, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-gradient-x">
                  Bisnis Makin Global.
                </span>
              </h1>

              {/* Subheadline Persuasif */}
              <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
                Jangan biarkan kompetitor mendahului Anda. Kami bangun website modern, cepat, dan <i>mobile-friendly</i> yang siap mengonversi pengunjung menjadi pelanggan loyal.
              </p>

              {/* Tombol CTA Premium */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Button size="lg" className="h-14 px-8 rounded-full bg-white text-slate-950 font-bold text-base hover:bg-slate-100 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] transition-all hover:scale-105 active:scale-95">
                  Konsultasi Gratis
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-slate-700 text-slate-200 font-medium text-base hover:bg-slate-800/80 hover:text-white backdrop-blur-sm transition-all">
                  Lihat Contoh Web
                </Button>
              </div>

              {/* Social Proof (FIXED: Valid Unsplash IDs) */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 border-t border-slate-800/50 pt-8 lg:border-none lg:pt-0">
                <div className="flex -space-x-4">
                  {/* Menggunakan ID Gambar Unsplash yang PASTI VALID */}
                  {[
                    "photo-1534528741775-53994a69daeb", // Wanita Kacamata
                    "photo-1506794778202-cad84cf45f1d", // Pria Portrait
                    "photo-1494790108377-be9c29b29330", // Wanita Senyum
                    "photo-1507003211169-0a1dd7228f2d"  // Pria Jas
                  ].map((imgId, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#020617] bg-slate-800 overflow-hidden relative shadow-lg hover:z-10 hover:scale-110 transition-transform">
                      <Image
                        src={`https://images.unsplash.com/${imgId}?auto=format&fit=crop&w=100&q=80`}
                        alt="Client Avatar"
                        fill
                        sizes="50px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-yellow-400 mb-1 gap-0.5">
                    {[1, 2, 3, 4, 5].map(star => <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <p className="text-slate-400 text-sm"><span className="text-white font-bold">4.9/5.0</span> dari 100+ Bisnis</p>
                </div>
              </div>
            </motion.div>

            {/* --- KOLOM KANAN (VISUAL & ANIMATION) --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end py-10 lg:py-0"
            >
              {/* Container Utama dengan Float Animation */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-lg lg:max-w-full"
              >
                {/* Efek Glow Gradient di Belakang Gambar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

                {/* --- MAIN IMAGE CARD (Laptop Style) --- */}
                <div className="relative rounded-2xl border border-slate-700/50 bg-[#0B0F19]/80 backdrop-blur-xl p-2 shadow-2xl ring-1 ring-white/10">
                  {/* Screen Header (Dot Mac Style) */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/50">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <div className="ml-auto flex gap-2">
                      <div className="w-20 h-2 rounded-full bg-slate-800/50"></div>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="rounded-b-xl overflow-hidden aspect-[16/10] relative bg-slate-900 group">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                      alt="Modern Website Dashboard"
                      fill
                      priority={true} // Prioritas Loading (LCP)
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Overlay Gradient Halus */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* --- FLOATING WIDGET 1: SALES --- */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-8 -left-4 md:-left-12 bg-[#1e293b]/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center gap-4 max-w-[220px] ring-1 ring-white/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-900/20">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Total Sales</p>
                    <p className="text-white text-lg font-bold font-mono">IDR 125jt</p>
                  </div>
                </motion.div>

                {/* --- FLOATING WIDGET 2: PERFORMANCE --- */}
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-6 -right-6 md:-right-8 bg-[#1e293b]/80 backdrop-blur-md border border-slate-700/50 p-3 pr-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center gap-3 ring-1 ring-white/5"
                >
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                      <path className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" strokeDasharray="99, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                    <Zap className="w-4 h-4 text-cyan-400 absolute" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">99/100</p>
                    <p className="text-slate-400 text-[10px] font-medium">Performance</p>
                  </div>
                </motion.div>

              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          2. CONTOH WEBSITE (Visual Portfolio: Ultimate Upgrade)
      ========================================= */}
      <section className="py-24 md:py-32 bg-[#020617] relative overflow-hidden" id="portfolio">

        {/* Dekorasi Grid Background Halus */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:64px_64px] opacity-[0.03]"></div>

        {/* Glow Ambient Global */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-indigo-500/10 rounded-[100%] blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

          {/* --- Header Section --- */}
          <FadeIn className="mb-20 md:mb-32 text-center relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/30 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">Selected Projects</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Real Results. <br className="md:hidden" /> <span className="text-slate-600">Real Impact.</span>
            </h2>

            <p className="text-slate-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
              Kami tidak hanya membuat desain yang cantik, tapi juga sistem yang bekerja. Berikut adalah jejak digital yang telah kami bangun.
            </p>
          </FadeIn>

          {/* --- List Project --- */}
          <div className="space-y-32 md:space-y-40">
            {portfolios.map((item, idx) => (
              <FadeIn key={item.id} className={`group relative flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* =========================================
                    BAGIAN GAMBAR (3D Interactive Browser) 
                   ========================================= */}
                <div className="w-full lg:w-3/5 relative perspective-1000">

                  {/* Glow Ambient di Belakang Gambar */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-[60px] md:blur-[80px] -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Container Frame Browser */}
                  <div className="relative transform transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]">

                    {/* Browser Frame Structure */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-700/50 bg-[#0f172a] shadow-2xl">

                      {/* Browser Header Bar */}
                      <div className="h-10 md:h-12 border-b border-slate-800 bg-[#1e293b]/80 backdrop-blur-md flex items-center px-4 gap-3">
                        {/* Traffic Lights Buttons */}
                        <div className="flex gap-1.5 md:gap-2">
                          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]"></div>
                          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]"></div>
                          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]"></div>
                        </div>

                        {/* Fake Address Bar */}
                        <div className="ml-2 md:ml-4 flex-1 h-6 md:h-8 bg-slate-950/50 rounded-md border border-slate-700/50 flex items-center px-3 gap-2 justify-center md:justify-start">
                          <div className="flex items-center gap-1.5 opacity-60">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-[10px] md:text-xs text-slate-400 font-medium hidden sm:block">secure connection</span>
                          </div>
                        </div>
                      </div>

                      {/* Viewport Gambar */}
                      <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Overlay Gelap saat Hover */}
                        <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Floating Button "View" */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                          <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold flex items-center gap-2 shadow-lg cursor-pointer hover:bg-white hover:text-black transition-colors">
                            Lihat Website <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* =========================================
                    BAGIAN TEKS INFORMASI 
                   ========================================= */}
                <div className="w-full lg:w-2/5 relative mt-8 lg:mt-0">

                  {/* Angka Latar Belakang Besar (Responsive Sizing) */}
                  <span className="absolute -top-16 md:-top-24 -left-4 md:-left-10 text-[8rem] md:text-[12rem] lg:text-[14rem] font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.03)] select-none pointer-events-none z-0 leading-none font-sans">
                    0{idx + 1}
                  </span>

                  <div className="relative z-10 text-center lg:text-left">

                    {/* Badge Client */}
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
                      <span className="text-cyan-200 font-bold tracking-widest text-[10px] uppercase">{item.client}</span>
                    </div>

                    {/* Judul Project */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Deskripsi */}
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6 lg:border-l-2 lg:border-slate-800 lg:pl-6 lg:ml-1">
                      {item.desc}
                    </p>

                    {/* Tech Stack (Pill Style) */}
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                      {item.tags.map(tag => (
                        <div key={tag} className="px-3 py-1.5 rounded-md border border-slate-700 bg-slate-900/50 text-slate-300 text-xs font-medium hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default">
                          {tag}
                        </div>
                      ))}
                    </div>

                    {/* Link Action */}
                    <div>
                      <Button variant="ghost" className="group/link text-white hover:text-cyan-400 hover:bg-transparent p-0 text-base md:text-lg font-medium">
                        Pelajari Studi Kasus
                        <span className="inline-block ml-2 transition-transform duration-300 group-hover/link:translate-x-2">→</span>
                      </Button>
                    </div>

                  </div>
                </div>

              </FadeIn>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================
          3. LAYANAN WEBSITE (Premium Bento Grid)
      ========================================= */}
      <section className="py-24 md:py-32 bg-[#020617] relative overflow-hidden" id="layanan">

        {/* Dekorasi Background Halus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020617] to-[#020617]"></div>
        <div className="absolute right-0 top-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

          {/* Header Section */}
          <FadeIn className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-indigo-300 font-bold tracking-widest text-[10px] uppercase">Our Expertise</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Ecosystem <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Digital.</span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Kami tidak sekadar membuat website. Kami membangun infrastruktur digital yang siap <i>scaling</i> (berkembang) bersama bisnis Anda.
            </p>
          </FadeIn>

          {/* Grid Layanan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                <div className="group relative h-full rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/50 hover:to-indigo-500/50 transition-all duration-500 overflow-hidden">

                  {/* Card Content */}
                  <div className="relative h-full bg-[#0f172a] rounded-[23px] p-8 overflow-hidden transition-all duration-500 group-hover:bg-[#1e293b]/50">

                    {/* Background Noise Texture (Optional visual richness) */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                    {/* Icon Container */}
                    <div className="relative w-14 h-14 mb-8">
                      {/* Glow effect behind icon */}
                      <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-full h-full rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all duration-300 text-white">
                        {item.icon}
                      </div>
                    </div>

                    {/* Text Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                      {item.description}
                    </p>

                    {/* Bottom Action (Arrow appears on hover) */}
                    <div className="absolute bottom-8 left-8 flex items-center gap-2 text-sm font-bold text-cyan-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <span>Pelajari Lebih Lanjut</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Decorative Corner Light */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          4. KENAPA WEBSITE PENTING (Strategic Value)
      ========================================= */}
      <section className="py-24 md:py-32 bg-[#0B0F19] relative overflow-hidden border-y border-slate-900/50">

        {/* Dekorasi Garis Diagonal Background */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.03)_50%,transparent_75%,transparent_100%)] bg-[size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* --- BAGIAN VISUAL (KIRI di Desktop, TENGAH di Mobile) --- */}
            {/* Menggunakan order-2 di mobile agar Teks (Judul) dibaca duluan */}
            <FadeIn className="relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-lg lg:max-w-none">

                {/* Abstract Shape Background (Glow) */}
                <div className="absolute -top-12 -left-12 w-48 md:w-64 h-48 md:h-64 bg-indigo-500/30 rounded-full blur-[60px] md:blur-[80px] -z-10 animate-pulse"></div>
                <div className="absolute -bottom-12 -right-12 w-48 md:w-64 h-48 md:h-64 bg-cyan-500/30 rounded-full blur-[60px] md:blur-[80px] -z-10"></div>

                {/* Main Image Container */}
                <div className="relative rounded-2xl border border-slate-700/50 bg-slate-800/50 p-2 shadow-2xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                      alt="Growth Analytics Dashboard"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay untuk kesan mahal */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent mix-blend-overlay"></div>
                  </div>
                </div>

                {/* Floating Badge: Stats (Animated) */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-12 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 md:p-5 rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] flex items-center gap-3 md:gap-4 max-w-[220px] md:max-w-[260px] z-20"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center text-green-400 border border-green-500/20 shadow-inner">
                    <BarChart3 className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">Growth</p>
                    <p className="text-white text-lg md:text-2xl font-bold flex items-center gap-1">
                      +150%
                      <span className="text-green-500 text-[10px] md:text-sm font-normal bg-green-500/10 px-1.5 py-0.5 rounded-md">🚀</span>
                    </p>
                  </div>
                </motion.div>

                {/* Decorative Element: Pattern Dots */}
                <div className="absolute -top-6 -right-6 md:-right-10 flex gap-2">
                  {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-slate-700"></div>)}
                </div>
              </div>
            </FadeIn>

            {/* --- BAGIAN TEXT (KANAN di Desktop, ATAS di Mobile) --- */}
            <FadeIn delay={0.2} className="space-y-8 order-1 lg:order-2">

              <div className="space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3" />
                  Strategic Value
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Kenapa Bisnis Anda <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    Wajib Punya Website?
                  </span>
                </h2>

                <p className="text-slate-400 text-sm md:text-lg leading-relaxed lg:border-l-2 lg:border-indigo-500/30 lg:pl-6">
                  Di era digital, website adalah <span className="text-white font-medium">"Kantor Pusat"</span> kedua Anda. Tanpa website, Anda kehilangan ribuan potensi pelanggan yang mencari produk Anda di Google setiap harinya.
                </p>
              </div>

              {/* Grid Benefits (Interactive Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-8 pt-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5">
                    <div className="mt-1 relative flex-shrink-0">
                      {/* Icon Glow on Hover */}
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-300 shadow-lg">
                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 group-hover:text-cyan-300 transition-colors text-base md:text-lg">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional CTA Link */}
              <div className="pt-2 text-center lg:text-left">
                <Button variant="link" className="text-indigo-400 hover:text-white p-0 h-auto font-medium text-sm md:text-base group">
                  Lihat Data Statistik Digital 2025 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

            </FadeIn>

          </div>
        </div>
      </section>


      {/* =========================================
          5. CARA KERJA (Adaptive Roadmap)
      ========================================= */}
      <section className="py-24 md:py-32 bg-[#020617] relative overflow-hidden" id="cara-kerja">

        {/* Dekorasi Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] bg-indigo-900/10 rounded-[100%] blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

          {/* Header */}
          <FadeIn className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Proses <span className="text-cyan-400">Transparan.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Kami memecah proses rumit menjadi 4 langkah sederhana. Anda terima beres, kami yang urus teknisnya.
            </p>
          </FadeIn>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

            {/* --- GARIS PENGHUBUNG (CONNECTOR LINE) --- */}

            {/* Desktop Line (Horizontal) */}
            <div className="hidden md:block absolute top-10 left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-transparent via-cyan-900 to-transparent -z-10"></div>

            {/* Mobile Line (Vertical - Timeline Style) */}
            <div className="md:hidden absolute top-4 bottom-4 left-8 w-0.5 bg-gradient-to-b from-cyan-900 via-indigo-900 to-transparent -z-10"></div>

            {/* --- LANGKAH-LANGKAH --- */}
            {[
              {
                step: "01",
                title: "Konsultasi",
                desc: "Diskusi santai via WhatsApp/Zoom untuk membedah ide dan target bisnis Anda.",
                icon: <MessageCircle className="w-5 h-5 text-white" />
              },
              {
                step: "02",
                title: "Strategi & Desain",
                desc: "Kami merancang struktur website dan mockup tampilan modern sesuai brand.",
                icon: <LayoutTemplate className="w-5 h-5 text-white" />
              },
              {
                step: "03",
                title: "Development",
                desc: "Proses coding (ngoding) website agar cepat, aman, dan responsif di semua device.",
                icon: <Code2 className="w-5 h-5 text-white" />
              },
              {
                step: "04",
                title: "Peluncuran",
                desc: "Website online, terindeks Google, dan siap mendatangkan pelanggan baru.",
                icon: <Rocket className="w-5 h-5 text-white" />
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-0 group">

                {/* ICON / NUMBER CONTAINER */}
                <div className="relative flex-shrink-0 z-10">
                  {/* Glow Effect belakang nomor */}
                  <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-full bg-[#020617] border border-slate-700 group-hover:border-cyan-500 transition-colors duration-300 flex items-center justify-center shadow-xl relative md:mb-8">
                    {/* Icon (Visible on Hover/Active) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                      {item.icon}
                    </div>

                    {/* Number (Visible default) */}
                    <span className="text-xl md:text-2xl font-bold text-slate-500 group-hover:opacity-0 transition-opacity duration-300 font-mono">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="pt-2 md:pt-0 text-left md:text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </FadeIn>
            ))}

          </div>

          {/* Note Tambahan */}
          <FadeIn delay={0.8} className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs md:text-sm">
              <Clock className="w-4 h-4 text-cyan-500" />
              <span>Estimasi Waktu: <span className="text-white font-semibold">3 - 14 Hari Kerja</span> (Tergantung paket)</span>
            </div>
          </FadeIn>

        </div>
      </section>


      {/* =========================================
          6. FAQ SINGKAT (Interactive Accordion)
      ========================================= */}
      <section className="py-24 bg-[#020617] relative overflow-hidden" id="faq">

        {/* Dekorasi Background Halus */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-900/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,1)_90%)] z-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-20">

          {/* Header Section */}
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
              <span className="text-slate-400 font-medium text-xs uppercase tracking-widest">Support Center</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Sering Ditanyakan
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
              Jawaban cepat untuk pertanyaan yang paling umum diajukan oleh calon klien kami.
            </p>
          </FadeIn>

          {/* Accordion Wrapper */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Berapa lama proses pembuatan website?",
                a: "Kami bekerja cepat tanpa mengurangi kualitas. Untuk Landing Page sekitar 3-5 hari kerja. Website Company Profile 7-10 hari. Toko Online Kompleks 14-20 hari. Waktu dihitung setelah data materi kami terima lengkap."
              },
              {
                q: "Apakah saya bisa mengedit konten sendiri nanti?",
                a: "Tentu saja! 100% Kendali di tangan Anda. Kami menggunakan CMS (Content Management System) yang user-friendly. Anda bisa ubah teks, ganti gambar, atau tambah produk semudah update status di media sosial, tanpa perlu koding."
              },
              {
                q: "Apakah ada biaya bulanan yang harus dibayar?",
                a: "Tidak ada 'biaya jasa' bulanan ke kami (Sistem Jual Putus). Biaya rutin hanyalah perpanjangan Domain (.com) & Hosting server yang dibayarkan setahun sekali ke provider (pihak ketiga), kisaran Rp 300rb - 900rb/tahun tergantung paket."
              },
              {
                q: "Apakah website ini aman dan SEO Friendly?",
                a: "Keamanan prioritas kami. Website dilengkapi SSL (Gembok Hijau), Anti-Spam, dan firewall dasar. Struktur kode juga kami optimasi agar mudah dibaca Google (SEO Friendly) sehingga website Anda lebih mudah naik ranking."
              },
              {
                q: "Bagaimana jika ada error setelah website jadi?",
                a: "Tenang, kami memberikan GARANSI Maintenance Gratis selama 30 hari setelah website rilis. Jika ada error teknis atau bug, kami perbaiki tanpa biaya tambahan."
              }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <AccordionItem
                  value={`item-${i}`}
                  className="border border-slate-800 bg-slate-900/40 backdrop-blur-md rounded-2xl px-2 md:px-4 overflow-hidden data-[state=open]:border-cyan-500/30 data-[state=open]:bg-slate-900/80 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-medium text-slate-200 hover:text-cyan-400 hover:no-underline py-5 px-2 md:px-4 text-base md:text-lg transition-colors [&[data-state=open]]:text-cyan-400">
                    {faq.q}
                  </AccordionTrigger>

                  <AccordionContent className="text-slate-400 pb-6 px-2 md:px-4 text-sm md:text-base leading-relaxed border-t border-slate-800/50 pt-4 mt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>

          {/* Help CTA */}
          <FadeIn className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-900/20 to-cyan-900/20 border border-indigo-500/20 text-center">
            <p className="text-slate-300 text-sm md:text-base mb-4">
              Masih punya pertanyaan yang belum terjawab?
            </p>
            <Button variant="outline" size="sm" className="rounded-full border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800">
              Tanya Tim Support
            </Button>
          </FadeIn>

        </div>
      </section>

      {/* =========================================
          7. CALL TO ACTION (Cinematic Closing)
      ========================================= */}
      <div className="relative min-h-[80vh] w-full bg-[#020617] flex flex-col items-center justify-center overflow-hidden border-t border-slate-900/50">

        {/* --- Background Effects --- */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#020617] to-[#020617] z-0"></div>
        <BackgroundBeams className="opacity-40" />

        {/* Dekorasi Planet/Orb */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 w-full px-4 md:px-6">
          <FadeIn className="max-w-5xl mx-auto">

            {/* Glass Card Container */}
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-8 md:p-16 text-center shadow-2xl overflow-hidden">

              {/* Noise Texture Overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

              {/* Badge Terbatas */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-900/20 mb-8 relative z-10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-green-300 text-xs md:text-sm font-bold tracking-wide uppercase">Slot Terbatas Bulan Ini</span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 relative z-10">
                Wujudkan Ide Bisnis <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-400">
                  Menjadi Mesin Uang.
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
                Jangan biarkan kompetitor mengambil pasar Anda. Miliki website profesional sekarang dan ubah pengunjung menjadi pelanggan setia.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center relative z-10">
                <Button className="h-14 md:h-16 px-8 md:px-10 rounded-full bg-white text-slate-950 hover:bg-cyan-50 font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.6)] transition-all hover:scale-105 w-full sm:w-auto">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat WhatsApp
                </Button>

                <Button variant="outline" className="h-14 md:h-16 px-8 md:px-10 rounded-full border-slate-600 text-slate-200 hover:text-white hover:bg-slate-800 hover:border-white/50 font-medium text-lg w-full sm:w-auto backdrop-blur-sm transition-all">
                  <Mail className="mr-2 w-5 h-5" />
                  Minta Penawaran
                </Button>
              </div>

            </div>

            <p className="mt-8 text-slate-500 text-xs md:text-sm font-medium text-center">
              ⚡ Respon rata-rata di bawah 15 menit (Jam Kerja)
            </p>

          </FadeIn>
        </div>
      </div>

      {/* =========================================
          8. FOOTER (Agency Standard)
      ========================================= */}
      <footer className="bg-[#020617] border-t border-slate-900 pt-20 pb-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

            {/* Kolom 1: Brand (4 col) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-900/20">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">
                  Jasa<span className="text-cyan-400">Web</span>.
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Membantu bisnis visioner bertransformasi digital. Kami menggabungkan seni desain dan teknologi modern untuk hasil yang berdampak.
              </p>

              {/* Newsletter Widget */}
              <div className="pt-4">
                <p className="text-white text-sm font-semibold mb-3">Dapatkan Tips Website Gratis</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="Email Anda" className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 w-full transition-colors" />
                  <button className="bg-cyan-600 hover:bg-cyan-500 text-white p-2.5 rounded-lg transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Kolom 2: Links (2 col) */}
            <div className="lg:col-span-2 lg:pl-8">
              <h4 className="font-bold text-white mb-6">Menu</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {["Layanan", "Portfolio", "Cara Kerja", "FAQ", "Kontak"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group w-fit">
                      <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-3 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 3: Layanan (3 col) */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-white mb-6">Solusi Digital</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {["Website Company Profile", "Toko Online (E-Commerce)", "Landing Page Iklan", "Web Aplikasi Custom", "Maintenance & SEO"].map((item) => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer w-fit">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 4: Kontak (3 col) */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-white mb-6">Terhubung</h4>
              <div className="flex gap-3 mb-8">
                {[
                  { icon: <Instagram className="w-5 h-5" />, href: "#" },
                  { icon: <Facebook className="w-5 h-5" />, href: "#" },
                  { icon: <Mail className="w-5 h-5" />, href: "#" },
                  { icon: <Globe className="w-5 h-5" />, href: "#" }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-slate-500 text-xs mb-1">Butuh Bantuan Cepat?</p>
                <p className="text-white font-mono text-lg font-bold tracking-wider">0812-3456-7890</p>
              </div>
            </div>

          </div>

          {/* Copyright & Legal */}
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} JasaWeb Agency. Built with Passion in Indonesia.</p>

            {/* Status Indicator */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-semibold text-slate-300">All Systems Operational</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}