"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Code2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Pastikan path ini benar (biasanya ada di utils.ts)

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    // Deteksi Scroll untuk mengubah style navbar
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Layanan", href: "#layanan" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Cara Kerja", href: "#cara-kerja" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300 border-b",
                isScrolled
                    ? "bg-[#020617]/80 backdrop-blur-md border-slate-800/50 shadow-lg shadow-indigo-500/5"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

                {/* --- LOGO --- */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                        <Code2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-100">
                        Jasa<span className="text-cyan-400">Web</span>.
                    </span>
                </Link>

                {/* --- DESKTOP MENU --- */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
                        >
                            {link.name}
                            {/* Underline Animation */}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}

                    <Button
                        size="sm"
                        className="bg-white text-slate-950 hover:bg-cyan-50 font-bold rounded-full px-6 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Konsultasi
                    </Button>
                </div>

                {/* --- MOBILE MENU (HAMBURGER) --- */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-slate-200 hover:bg-slate-800 hover:text-white">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>

                        {/* Sheet Content Dark Theme */}
                        <SheetContent side="right" className="bg-[#020617] border-slate-800 text-slate-200 w-[300px]">
                            <SheetHeader className="text-left border-b border-slate-800 pb-4 mb-4">
                                <SheetTitle className="flex items-center gap-2">
                                    <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-1.5 rounded-md">
                                        <Code2 className="h-4 w-4 text-white" />
                                    </div>
                                    <span className="text-slate-100 font-bold">Menu</span>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-slate-400 hover:text-white hover:bg-slate-900 px-4 py-3 rounded-xl transition-all flex items-center justify-between group"
                                    >
                                        {link.name}
                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                                    </Link>
                                ))}

                                <div className="mt-6 border-t border-slate-800 pt-6">
                                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold h-12 rounded-xl">
                                        Hubungi via WhatsApp
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </nav>
    );
}