import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ROLES = ["family", "heritage", "craft", "kindness"];
const VIDEO_URL = `${process.env.PUBLIC_URL ?? ""}/media/hero-dairy-farm.mp4`;
const VIDEO_FALLBACK =
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=85&w=2400&auto=format&fit=crop";

const ease = [0.25, 0.1, 0.25, 1];

const Hero = () => {
    const videoRef = useRef(null);
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setRoleIndex((i) => (i + 1) % ROLES.length);
        }, 2200);
        return () => clearInterval(id);
    }, []);

    return (
        <section
            id="home"
            data-testid="hero-section"
            className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-cream"
        >
            {/* Background video */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={VIDEO_FALLBACK}
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
                >
                    <source src={VIDEO_URL} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/55 to-cream/15" />
                <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream/75" />
                <div className="absolute inset-0 halftone opacity-[0.07] mix-blend-multiply" />
                <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-cream to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-center">
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.9, delay: 0.4, ease }}
                        className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-saddle mb-6 md:mb-8 flex items-center gap-3"
                    >
                        <span className="w-8 h-px bg-saddle/60" />
                        Collection · Season ’26
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease }}
                        className="font-display italic text-coffee-deep text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.9] tracking-tight mb-6"
                    >
                        Freeland
                        <span className="block gradient-text not-italic font-display italic">
                            Family Farms
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.9, delay: 0.7, ease }}
                        className="text-base md:text-lg text-coffee-deep/85 mb-3 max-w-xl"
                    >
                        A dairy of{" "}
                        <span
                            key={roleIndex}
                            className="font-display italic text-terracotta animate-role-fade-in inline-block"
                        >
                            {ROLES[roleIndex]}
                        </span>{" "}
                        — rooted in California, raised on Portuguese tradition.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.9, delay: 0.85, ease }}
                        className="text-sm md:text-base text-saddle max-w-md mb-9 md:mb-11 leading-relaxed"
                    >
                        Cream‑top A2/A2 milk, slow‑fermented sourdoughs, and
                        fresh‑pulled cheeses — crafted in Woodcrest, California.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 1, ease }}
                        className="inline-flex flex-wrap gap-3 md:gap-4"
                    >
                        <a
                            data-testid="hero-cta-shop"
                            href="#products"
                            className="group relative inline-flex items-center rounded-full text-sm md:text-base transition-transform hover:scale-[1.03]"
                        >
                            <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity gradient-ring" />
                            <span className="relative inline-flex items-center gap-2 rounded-full bg-coffee-deep text-cream px-7 py-3.5">
                                Shop the larder
                                <span className="transition-transform group-hover:translate-x-0.5">
                                    →
                                </span>
                            </span>
                        </a>

                        <a
                            data-testid="hero-cta-contact"
                            href="#contact"
                            className="group relative inline-flex items-center rounded-full text-sm md:text-base transition-transform hover:scale-[1.03]"
                        >
                            <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity gradient-ring" />
                            <span className="relative inline-flex items-center gap-2 rounded-full border-2 border-coffee-deep/80 bg-cream/70 backdrop-blur-md text-coffee-deep px-7 py-3 group-hover:border-transparent">
                                Visit the farm
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-saddle">
                    Scroll
                </span>
                <span className="relative block w-px h-12 bg-stroke overflow-hidden">
                    <span className="absolute inset-x-0 top-0 h-1/3 bg-coffee-deep animate-scroll-down" />
                </span>
            </div>
        </section>
    );
};

export default Hero;
