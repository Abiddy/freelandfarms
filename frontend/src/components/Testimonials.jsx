import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const QUOTES = [
    {
        quote:
            "The cream-top milk is unreal. My kids fight over the last glass like it’s dessert.",
        name: "Sarah K.",
        from: "Riverside, CA",
    },
    {
        quote:
            "Their sourdough has actual texture and tang — finally a loaf that tastes like someone bothered.",
        name: "Diego R.",
        from: "Pasadena, CA",
    },
    {
        quote:
            "Watching Amber pull burrata at the market is its own kind of therapy. The cheese is just bonus.",
        name: "Linnea T.",
        from: "Hollywood Farmer's Mkt",
    },
];

const Testimonials = () => {
    return (
        <section
            data-testid="testimonials-section"
            className="relative bg-cream-warm py-20 md:py-28"
        >
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow="Kind words"
                    title="Spoken at the *kitchen table*"
                    subtext="Honest reactions from the families who eat what we bake."
                />

                <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {QUOTES.map((q, i) => (
                        <motion.figure
                            key={q.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.85,
                                delay: i * 0.08,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            data-testid={`testimonial-${i}`}
                            className="relative rounded-3xl border border-stroke bg-cream p-7 md:p-9 flex flex-col gap-6"
                        >
                            <span className="font-display italic text-honey text-7xl leading-none -mt-2 -mb-4">
                                “
                            </span>
                            <blockquote className="font-display text-2xl md:text-[1.65rem] leading-snug text-coffee-deep">
                                {q.quote}
                            </blockquote>
                            <figcaption className="mt-auto pt-5 border-t border-stroke flex items-center justify-between">
                                <span className="text-sm text-coffee-deep font-medium">
                                    {q.name}
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.25em] text-saddle">
                                    {q.from}
                                </span>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
