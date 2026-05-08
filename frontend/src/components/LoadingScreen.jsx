import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATING_WORDS = ["Heritage", "Craft", "Family"];

const LoadingScreen = ({ onComplete }) => {
    const [count, setCount] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const startRef = useRef(null);
    const rafRef = useRef(null);

    // Counter 0 -> 100 over ~2700ms
    useEffect(() => {
        const DURATION = 2700;
        const tick = (ts) => {
            if (startRef.current === null) startRef.current = ts;
            const elapsed = ts - startRef.current;
            const next = Math.min(100, Math.round((elapsed / DURATION) * 100));
            setCount(next);
            if (next < 100) {
                rafRef.current = requestAnimationFrame(tick);
            } else {
                setTimeout(() => onComplete && onComplete(), 420);
            }
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [onComplete]);

    // Rotating words every 900ms
    useEffect(() => {
        const id = setInterval(() => {
            setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
        }, 900);
        return () => clearInterval(id);
    }, []);

    return (
        <motion.div
            data-testid="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-cream paper-grain overflow-hidden"
        >
            {/* Top-left label */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute top-6 md:top-10 left-6 md:left-10 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-saddle/70"
            >
                Freeland · Est. 2018
            </motion.div>

            {/* Top-right small mark */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                className="absolute top-6 md:top-10 right-6 md:right-10 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-saddle/70"
            >
                Woodcrest · CA
            </motion.div>

            {/* Center rotating word */}
            <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={wordIndex}
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -24, opacity: 0 }}
                        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                        className="font-display italic text-5xl md:text-7xl lg:text-8xl text-coffee-deep/80"
                    >
                        {ROTATING_WORDS[wordIndex]}
                    </motion.h1>
                </AnimatePresence>
            </div>

            {/* Bottom-right counter */}
            <div className="absolute bottom-12 md:bottom-16 right-6 md:right-12 lg:right-16">
                <span
                    data-testid="loading-counter"
                    className="font-display text-6xl md:text-8xl lg:text-9xl text-coffee-deep tabular-nums leading-none"
                >
                    {String(count).padStart(3, "0")}
                </span>
            </div>

            {/* Bottom progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/60">
                <div
                    className="h-full accent-gradient origin-left"
                    style={{
                        transform: `scaleX(${count / 100})`,
                        boxShadow: "0 0 12px rgba(194, 142, 92, 0.55)",
                        transition: "transform 80ms linear",
                    }}
                />
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
