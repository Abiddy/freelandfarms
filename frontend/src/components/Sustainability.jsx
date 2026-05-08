import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const PRACTICES = [
    {
        n: "01",
        title: "Pasture-raised, always",
        body: "Our cows graze open fields year-round. No feedlots, no shortcuts — just sun, grass, and time.",
    },
    {
        n: "02",
        title: "A2/A2 protein only",
        body: "Single-protein milk that's gentler on digestion. We test each cow before she joins the herd.",
    },
    {
        n: "03",
        title: "Glass over plastic",
        body: "Returnable glass bottles, beeswax wraps, and compostable bakery liners. Less landfill, more love.",
    },
    {
        n: "04",
        title: "Slow ferment, real flavor",
        body: "Every sourdough rests 24–28 hours. The wild yeast does the work — we just keep the kitchen warm.",
    },
    {
        n: "05",
        title: "Local-only sourcing",
        body: "Wheat, salt, and cultures sourced within 200 miles. Our partners’ names are on the label.",
    },
    {
        n: "06",
        title: "Carbon-aware delivery",
        body: "Sunday-morning farmer's-market drop‑offs and electric runs across Riverside, San Bernardino & LA County.",
    },
];

const Sustainability = () => {
    return (
        <section
            id="sustainability"
            data-testid="sustainability-section"
            className="relative bg-coffee-deep text-cream py-20 md:py-28 overflow-hidden"
        >
            {/* warm grain */}
            <div className="absolute inset-0 opacity-[0.12] mix-blend-screen pointer-events-none paper-grain" />
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="max-w-3xl"
                >
                    <p className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-honey/80 mb-5">
                        <span className="w-8 h-px bg-honey/50" />
                        Animal Welfare & Sustainability
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                        Kindness is the{" "}
                        <span className="italic text-honey">first ingredient.</span>
                    </h2>
                    <p className="mt-5 text-cream/75 text-sm md:text-base max-w-xl leading-relaxed">
                        Every pour, every loaf, every wheel begins with how the
                        animals are treated and how the land is cared for. Here is
                        how we keep that promise.
                    </p>
                </motion.div>

                <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-3xl overflow-hidden">
                    {PRACTICES.map((p, i) => (
                        <motion.div
                            key={p.n}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.05,
                                ease: "easeOut",
                            }}
                            data-testid={`practice-${i}`}
                            className="bg-coffee-deep p-7 md:p-9 group hover:bg-coffee transition-colors duration-500"
                        >
                            <div className="flex items-start gap-5">
                                <span className="font-display italic text-3xl md:text-4xl text-honey shrink-0">
                                    {p.n}
                                </span>
                                <div>
                                    <h3 className="font-display text-2xl md:text-3xl mb-2">
                                        {p.title}
                                    </h3>
                                    <p className="text-cream/70 text-sm leading-relaxed">
                                        {p.body}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
