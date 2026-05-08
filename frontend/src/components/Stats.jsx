import { motion } from "framer-motion";

const STATS = [
    { value: "8", suffix: "yrs", label: "Tending the herd" },
    { value: "120", suffix: "ac", label: "Open pasture" },
    { value: "A2/A2", suffix: "", label: "Single-protein milk" },
    { value: "100%", suffix: "", label: "Glass-bottled" },
];

const Stats = () => {
    return (
        <section
            data-testid="stats-section"
            className="relative bg-cream py-16 md:py-20 border-y border-stroke"
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-12">
                    {STATS.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.1,
                                ease: "easeOut",
                            }}
                            data-testid={`stat-${i}`}
                            className="flex flex-col gap-2 border-l-2 border-caramel/40 pl-5 md:pl-7"
                        >
                            <span className="font-display text-5xl md:text-6xl lg:text-7xl text-coffee-deep leading-none">
                                {s.value}
                                {s.suffix ? (
                                    <span className="font-display italic text-2xl md:text-3xl text-saddle ml-1">
                                        {s.suffix}
                                    </span>
                                ) : null}
                            </span>
                            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-saddle">
                                {s.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
