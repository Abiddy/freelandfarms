import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useContent } from "@/context/ContentContext";

const VIDEO_URL =
    "https://videos.pexels.com/video-files/4828208/4828208-hd_1920_1080_25fps.mp4";

const renderItalicTitle = (text) =>
    text.split("*").map((part, i) =>
        i % 2 === 1 ? (
            <span key={i} className="italic text-honey">
                {part}
            </span>
        ) : (
            <span key={i}>{part}</span>
        ),
    );

const ContactFooter = () => {
    const { content } = useContent();
    const { contact } = content;
    const marqueeRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const el = marqueeRef.current;
        if (!el) return;
        const tween = gsap.to(el, {
            xPercent: -50,
            duration: 40,
            ease: "none",
            repeat: -1,
        });
        return () => tween.kill();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSubmitted(false), 4000);
    };

    const repeated = Array.from({ length: 20 }, (_, i) => i);

    return (
        <footer
            id="contact"
            data-testid="contact-footer"
            className="relative pt-20 md:pt-28 pb-8 overflow-hidden bg-coffee-deep text-cream"
        >
            <div className="absolute inset-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] opacity-50"
                >
                    <source src={VIDEO_URL} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-coffee-deep/85" />
                <div className="absolute inset-0 paper-grain opacity-30" />
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
                >
                    <div className="lg:col-span-7">
                        <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-honey mb-6">
                            <span className="w-8 h-px bg-honey/60" />
                            {contact.eyebrow}
                        </p>
                        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                            {renderItalicTitle(contact.titleLine1)}
                            <br />
                            {renderItalicTitle(contact.titleLine2)}
                        </h2>
                        <p className="mt-6 text-cream/75 max-w-xl leading-relaxed">
                            {contact.description}
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                data-testid="footer-email-cta"
                                href={`mailto:${contact.email}`}
                                className="group relative inline-flex items-center rounded-full text-sm md:text-base px-7 py-3.5 transition-transform hover:scale-[1.03]"
                            >
                                <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity gradient-ring" />
                                <span className="relative inline-flex items-center gap-2 rounded-full bg-honey text-coffee-deep px-7 py-3.5 -m-7 -my-3.5 font-medium">
                                    {contact.email}
                                    <span className="transition-transform group-hover:translate-x-0.5">
                                        ↗
                                    </span>
                                </span>
                            </a>
                        </div>

                        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.25em] text-honey/80">
                                    Farmhouse
                                </p>
                                <p className="font-display italic text-xl mt-1.5">
                                    {contact.farmhouse}
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.25em] text-honey/80">
                                    Open
                                </p>
                                <p className="font-display italic text-xl mt-1.5">
                                    {contact.hours}
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.25em] text-honey/80">
                                    Insurance
                                </p>
                                <p className="font-display italic text-xl mt-1.5">
                                    {contact.insurance}
                                </p>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        data-testid="contact-form"
                        className="lg:col-span-5 rounded-3xl bg-cream/[0.06] backdrop-blur-md border border-cream/15 p-7 md:p-8 flex flex-col gap-5"
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] text-honey">
                            Drop us a line
                        </p>

                        <label className="flex flex-col gap-2 text-sm">
                            <span className="text-cream/70 text-xs uppercase tracking-[0.2em]">
                                Name
                            </span>
                            <input
                                data-testid="contact-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="bg-transparent border-b border-cream/30 focus:border-honey outline-none py-2 text-cream placeholder:text-cream/30 transition-colors"
                                placeholder="Sarah Freeland"
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-sm">
                            <span className="text-cream/70 text-xs uppercase tracking-[0.2em]">
                                Email
                            </span>
                            <input
                                data-testid="contact-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-transparent border-b border-cream/30 focus:border-honey outline-none py-2 text-cream placeholder:text-cream/30 transition-colors"
                                placeholder="you@kitchen.com"
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-sm">
                            <span className="text-cream/70 text-xs uppercase tracking-[0.2em]">
                                Message
                            </span>
                            <textarea
                                data-testid="contact-message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={3}
                                className="bg-transparent border-b border-cream/30 focus:border-honey outline-none py-2 text-cream placeholder:text-cream/30 resize-none transition-colors"
                                placeholder="Two loaves of jalapeño-cheddar this Sunday?"
                            />
                        </label>

                        <button
                            type="submit"
                            data-testid="contact-submit"
                            className="group relative mt-2 inline-flex items-center justify-center rounded-full px-7 py-3.5 transition-transform hover:scale-[1.02]"
                        >
                            <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity gradient-ring" />
                            <span className="relative inline-flex items-center justify-center gap-2 rounded-full bg-cream text-coffee-deep px-7 py-3.5 -m-7 -my-3.5 font-medium w-full">
                                {submitted ? "Sent — thank you!" : "Send"}
                                <span className="transition-transform group-hover:translate-x-0.5">
                                    →
                                </span>
                            </span>
                        </button>
                    </form>
                </motion.div>

                <div className="mt-20 md:mt-28 -mx-6 md:-mx-10 lg:-mx-16 overflow-hidden border-y border-cream/10 py-6 md:py-8">
                    <div ref={marqueeRef} className="marquee-track whitespace-nowrap">
                        {repeated.map((i) => (
                            <span
                                key={`m-${i}`}
                                className="inline-flex items-center gap-6 px-6 font-display italic text-5xl md:text-7xl lg:text-8xl text-cream/85"
                            >
                                {contact.marqueePhrase}
                                <span className="inline-block w-2 h-2 rounded-full bg-honey shrink-0" />
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-10 md:mt-14 flex flex-col items-center gap-6 pb-2 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center justify-center gap-3 md:justify-start">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-honey opacity-60 animate-soft-pulse" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-honey" />
                        </span>
                        <p className="text-sm text-cream/85">
                            {contact.footerNote}
                        </p>
                    </div>

                    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:justify-end">
                        <li>
                            <a
                                data-testid="social-instagram"
                                href={contact.instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Freeland Family Farms on Instagram"
                                className="group flex items-center gap-1.5 text-cream/75 transition-colors hover:text-honey"
                            >
                                <Instagram
                                    className="h-[1.35rem] w-[1.35rem] shrink-0"
                                    strokeWidth={1.65}
                                    aria-hidden
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                data-testid="social-email"
                                href={`mailto:${contact.email}`}
                                className="group flex items-center gap-1.5 text-cream/75 transition-colors hover:text-honey"
                            >
                                Email
                            </a>
                        </li>
                    </ul>

                    <p className="text-center text-xs text-cream/50 md:text-left">
                        © {new Date().getFullYear()} Freeland Family Farms · Crafted in Woodcrest, CA
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
