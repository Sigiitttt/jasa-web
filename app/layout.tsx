import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // 1. Kita pakai font ini
import "./globals.css";
import { Navbar } from "@/components/layout/navbar"; 

// 2. Konfigurasi Font Plus Jakarta Sans
const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// ... imports (biarkan import font dan css yang sudah benar)

// UPDATE BAGIAN INI:
export const metadata: Metadata = {
  metadataBase: new URL('https://jasaweb-premium.vercel.app'), // Ganti dengan domain asli nanti
  title: {
    default: "JasaWeb - Jasa Pembuatan Website Premium & Profesional",
    template: "%s | JasaWeb Agency"
  },
  description: "Jasa pembuatan website profesional, landing page, dan toko online UMKM. Desain modern, cepat, SEO friendly, dan bergaransi. Konsultasi gratis!",
  keywords: ["jasa website", "buat website", "web developer indonesia", "jasa landing page", "website umkm", "toko online"],
  authors: [{ name: "JasaWeb Team" }],
  creator: "JasaWeb Agency",
  
  // Pengaturan Open Graph (Tampilan saat share di WA/FB)
  openGraph: {
    title: "JasaWeb - Ubah Ide Bisnis Jadi Mesin Uang Digital",
    description: "Miliki website premium sekarang. Desain sinematik, performa tinggi, dan siap meningkatkan omzet bisnis Anda.",
    url: 'https://jasaweb-premium.vercel.app',
    siteName: 'JasaWeb Agency',
    images: [
      {
        url: '/og-image.jpg', // Pastikan Anda punya gambar ini di folder public
        width: 1200,
        height: 630,
        alt: 'JasaWeb Agency Preview',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  // Pengaturan Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "JasaWeb - Jasa Pembuatan Website Premium",
    description: "Solusi digital untuk bisnis modern. Cepat, Elegan, Menjual.",
    images: ['/og-image.jpg'], // Sama dengan gambar di atas
  },
  
  // Icon di Tab Browser
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* 3. Gunakan fontSans.className disini, BUKAN Inter.className */}
      <body className={`${fontSans.className} antialiased bg-[#020617] text-slate-200`}>
        
        <Navbar /> 
        
        {children}
        
      </body>
    </html>
  );
}