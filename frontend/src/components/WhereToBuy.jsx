import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useContent } from "@/context/ContentContext";

const WhereToBuy = () => {
    const { content } = useContent();
    const { whereToBuy } = content;

    return (
        <section
            id="where"
            data-testid="where-section"
            className="relative bg-cream py-20 md:py-28 paper-grain"
        >
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow={whereToBuy.eyebrow}
                    title={whereToBuy.title}
                    subtext={whereToBuy.subtext}
                />

                <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    <div className="lg:col-span-7">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-saddle mb-5">
                            {whereToBuy.stockistsLabel}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stroke border border-stroke rounded-3xl overflow-hidden">
                            {whereToBuy.stockists.map((s, i) => (
                                <motion.div
                                    key={s.name}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.55,
                                        delay: i * 0.04,
                                        ease: "easeOut",
                                    }}
                                    data-testid={`stockist-${i}`}
                                    className="bg-cream-warm p-6 md:p-7 hover:bg-parchment transition-colors duration-300"
                                >
                                    <h4 className="font-display text-2xl text-coffee-deep leading-tight">
                                        {s.name}
                                    </h4>
                                    <p className="text-sm text-saddle/85 mt-2">
                                        {s.city}
                                    </p>
                                    <p className="text-xs uppercase tracking-[0.2em] text-terracotta mt-3">
                                        {s.when}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-saddle mb-5">
                            {whereToBuy.eventsLabel}
                        </p>
                        <div className="rounded-3xl bg-coffee-deep text-cream overflow-hidden border border-coffee-deep">
                            {whereToBuy.events.map((ev, i) => (
                                <motion.div
                                    key={ev.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.6,
                                        delay: i * 0.08,
                                        ease: "easeOut",
                                    }}
                                    data-testid={`event-${i}`}
                                    className={`p-6 md:p-7 ${
                                        i !== whereToBuy.events.length - 1
                                            ? "border-b border-cream/10"
                                            : ""
                                    } group hover:bg-coffee transition-colors`}
                                >
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-honey">
                                        {ev.date}
                                    </p>
                                    <h4 className="font-display text-2xl mt-2 leading-snug">
                                        {ev.title}
                                    </h4>
                                    <p className="text-sm text-cream/70 mt-2">
                                        {ev.partner}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-xs text-honey mt-4 group-hover:translate-x-1 transition-transform">
                                        Add to calendar →
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhereToBuy;
