import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <div className="min-h-[90vh] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

            {/* Efek Spotlight */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <div className="text-center max-w-3xl mx-auto space-y-6">

                    {/* Judul Utama */}
                    <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
                        Website Profesional <br /> untuk Bisnis Anda
                    </h1>

                    {/* Subjudul */}
                    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto leading-relaxed">
                        Kami membantu membuat website yang rapi, mudah dipahami, dan siap digunakan untuk berbagai kebutuhan — bisnis, instansi, maupun personal.
                    </p>

                    {/* Tombol CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                            Konsultasi Gratis
                        </Button>
                        <Button size="lg" variant="outline" className="text-black border-neutral-700 hover:bg-neutral-800 hover:text-white w-full sm:w-auto">
                            Lihat Contoh Website
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}