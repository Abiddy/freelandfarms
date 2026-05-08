import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const ENTRIES = [
    {
        title: "Why we bottle in glass (and what it costs us).",
        excerpt:
            "A small farm's case for the heavier, breakable, beautiful choice.",
        date: "Nov 18, 2025",
        read: "5 min read",
        image:
            "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=85&w=900&auto=format&fit=crop",
    },
    {
        title: "Bake day, in nine smells.",
        excerpt:
            "Levain, butter melting on cast iron, cinnamon hitting warm honey…",
        date: "Oct 30, 2025",
        read: "4 min read",
        image:
            "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=85&w=900&auto=format&fit=crop",
    },
    {
        title: "Bolos Levedos: a recipe in my grandmother’s hand.",
        excerpt: "How an Azorean muffin made the trip from São Miguel to Riverside.",
        date: "Oct 12, 2025",
        read: "7 min read",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=85&w=900&auto=format&fit=crop",
    },
    {
        title: "What 'A2/A2 milk' actually means.",
        excerpt: "We explain it once, plainly, with no marketing in the cream.",
        date: "Sep 26, 2025",
        read: "6 min read",
        image:
            "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=85&w=900&auto=format&fit=crop",
    },
];

const Journal = () => {
    return (
        <section
            id="journal"
            data-testid="journal-section"
            className="relative bg-cream-warm py-20 md:py-28"
        >
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow="Field Notes"
                    title="From the *farmhouse desk*"
                    subtext="Slow journal entries about animals, recipes, and the small daily decisions that shape a farm."
                    cta={
                        <a
                            data-testid="journal-view-all"
                            href="#contact"
                            className="hidden md:inline-flex group relative items-center rounded-full px-5 py-2.5 text-sm"
                        >
                            <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity gradient-ring" />
                            <span className="relative inline-flex items-center gap-2 bg-cream text-coffee-deep border border-stroke rounded-full px-5 py-2.5 -m-5 -my-2.5">
                                All notes
                                <span className="transition-transform group-hover:translate-x-0.5">
                                    →
                                </span>
                            </span>
                        </a>
                    }
                />

                <div className="mt-12 md:mt-14 grid gap-4 md:gap-5">
                    {ENTRIES.map((e, i) => (
                        <motion.a
                            key={e.title}
                            href="#"
                            data-testid={`journal-entry-${i}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.06,
                                ease: "easeOut",
                            }}
                            className="group flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 p-4 sm:p-4 bg-cream/70 hover:bg-cream border border-stroke rounded-[28px] sm:rounded-full transition-all"
                        >
                            <div className="relative w-full sm:w-32 md:w-40 aspect-[16/10] sm:aspect-square shrink-0 overflow-hidden rounded-[20px] sm:rounded-full border border-stroke">
                                <img
                                    src={e.image}
                                    alt={e.title}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 halftone opacity-[0.07] mix-blend-multiply" />
                            </div>
                            <div className="flex-1 min-w-0 sm:py-2">
                                <p className="text-[10px] uppercase tracking-[0.25em] text-saddle">
                                    {e.date} · {e.read}
                                </p>
                                <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-coffee-deep mt-1.5 leading-snug">
                                    {e.title}
                                </h3>
                                <p className="hidden md:block text-sm text-saddle/85 mt-1.5 truncate">
                                    {e.excerpt}
                                </p>
                            </div>
                            <span className="hidden sm:inline-flex shrink-0 mr-4 w-10 h-10 items-center justify-center rounded-full border border-stroke text-saddle group-hover:bg-coffee-deep group-hover:text-cream group-hover:border-coffee-deep transition-all">
                                →
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journal;
