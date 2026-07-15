import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useContent } from "@/context/ContentContext";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const OurStory = () => {
    const { content } = useContent();
    const { ourStory } = content;

    return (
        <section
            id="story"
            data-testid="story-section"
            className="relative bg-cream py-20 md:py-28 lg:py-32 paper-grain"
        >
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow={ourStory.eyebrow}
                    title={ourStory.title}
                />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
                    className="mt-10 md:mt-12 max-w-3xl space-y-5"
                >
                    {ourStory.paragraphs.map((paragraph, i) => (
                        <p
                            key={i}
                            className="text-sm md:text-base text-saddle/90 leading-relaxed"
                        >
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        className="md:col-span-7 relative rounded-3xl overflow-hidden bg-parchment border border-stroke aspect-[4/5] md:aspect-[5/6]"
                    >
                        <img
                            src={ourStory.mainImage.url}
                            alt={ourStory.mainImage.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 halftone opacity-[0.08] mix-blend-multiply" />
                        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                            <div className="text-cream">
                                <p className="text-[10px] uppercase tracking-[0.3em] opacity-80">
                                    {ourStory.mainImage.overlayLabel}
                                </p>
                                <p className="font-display italic text-3xl md:text-4xl mt-1">
                                    {ourStory.mainImage.overlayTitle}
                                </p>
                            </div>
                            <span className="text-cream/80 text-xs">
                                {ourStory.mainImage.counter}
                            </span>
                        </div>
                    </motion.div>

                    <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeUp}
                            className="rounded-3xl bg-cream-warm border border-stroke p-7 md:p-8 lg:p-10"
                        >
                            <p className="text-[10px] uppercase tracking-[0.3em] text-saddle mb-4">
                                {ourStory.promise.label}
                            </p>
                            <p className="font-display italic text-2xl md:text-3xl text-coffee-deep leading-snug">
                                &ldquo;{ourStory.promise.quote}&rdquo;
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeUp}
                            className="grid grid-cols-2 gap-4"
                        >
                            {ourStory.sideImages.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative rounded-2xl overflow-hidden aspect-square border border-stroke"
                                >
                                    <img
                                        src={img.url}
                                        alt={img.alt}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 halftone opacity-[0.08] mix-blend-multiply" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
