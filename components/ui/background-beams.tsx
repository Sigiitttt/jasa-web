"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950 overflow-hidden",
                className
            )}
        >
            <div className="absolute h-full w-full inset-0 pointer-events-none opacity-[0.4]">
                {/* Efek visual beams */}
                <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_400px_at_50%_300px,#1d4ed8,transparent)]" />
            </div>
        </div>
    );
};