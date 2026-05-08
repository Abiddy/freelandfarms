import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const STOCKISTS = [
    {
        name: "Frangipani Winery Market",
        city: "Temecula, CA",
        when: "Sat · 10am – 3pm",
    },
    {
        name: "Riverside Farmer's Market",
        city: "Riverside, CA",
        when: "Sun · 8am – 1pm",
    },
    {
        name: "Clover Coffee Roastery",
        city: "Pasadena, CA",
        when: "Daily · pastry case",
    },
    {
        name: "Old Town Pasadena Mkt",
        city: "Pasadena, CA",
        when: "Sat · 8am – 12pm",
    },
    {
        name: "Hollywood Farmer's Mkt",
        city: "Los Angeles, CA",
        when: "Sun · 8am – 1pm",
    },
    {
        name: "Farmhouse Pickup",
        city: "Woodcrest, CA",
        when: "Sun · 11am – 2pm",
    },
];

const EVENTS = [
    {
        date: "Dec 14, 2025",
        title: "Vendor Market — Frangipani Winery",
        partner: "Partnership with Clover Coffee",
    },
    {
        date: "Jan 11, 2026",
        title: "Sourdough Workshop · Farmhouse Kitchen",
        partner: "8 seats · BYO apron",
    },
    {
        date: "Feb 22, 2026",
        title: "Cheese Pull · Gioia + Freeland",
        partner: "Live burrata pulling at Hollywood Mkt",
    },
];

const WhereToBuy = () => {
    return (
        <section
            id="where"
            data-testid="where-section"
            className="relative bg-cream py-20 md:py-28 paper-grain"
        >
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow="Find Us"
                    title="Where the *bread lands*"
                    subtext="Catch us at markets across Riverside, San Bernardino, and LA County — or come straight to the farmhouse on Sundays."
                />

                <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    {/* Stockists */}
                    <div className="lg:col-span-7">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-saddle mb-5">
                            Markets & Stockists
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stroke border border-stroke rounded-3xl overflow-hidden">
                            {STOCKISTS.map((s, i) => (
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

                    {/* Events */}
                    <div className="lg:col-span-5">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-saddle mb-5">
                            Upcoming Events
                        </p>
                        <div className="rounded-3xl bg-coffee-deep text-cream overflow-hidden border border-coffee-deep">
                            {EVENTS.map((ev, i) => (
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
                                        i !== EVENTS.length - 1
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
