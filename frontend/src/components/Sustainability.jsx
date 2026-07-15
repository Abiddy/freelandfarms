import { motion } from "framer-motion";
import { useContent } from "@/context/ContentContext";

const Sustainability = () => {
    const { content } = useContent();
    const { sustainability } = content;

    return (
        <section
            id="sustainability"
            data-testid="sustainability-section"
            className="relative bg-coffee-deep text-cream py-20 md:py-28 overflow-hidden"
        >
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
                        {sustainability.eyebrow}
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                        {sustainability.title.split("*").map((part, i) =>
                            i % 2 === 1 ? (
                                <span key={i} className="italic text-honey">
                                    {part}
                                </span>
                            ) : (
                                <span key={i}>{part}</span>
                            ),
                        )}
                    </h2>
                    <p className="mt-5 text-cream/75 text-sm md:text-base max-w-xl leading-relaxed">
                        {sustainability.subtext}
                    </p>
                </motion.div>

                <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-3xl overflow-hidden">
                    {sustainability.practices.map((p, i) => (
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
