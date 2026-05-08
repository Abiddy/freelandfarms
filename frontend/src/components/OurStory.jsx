import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const IMG_FAMILY =
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=85&w=1600&auto=format&fit=crop";
const IMG_TOOLS =
    "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=85&w=1200&auto=format&fit=crop";
const IMG_PORTUGAL =
    "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?q=85&w=1200&auto=format&fit=crop";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const OurStory = () => {
    return (
        <section
            id="story"
            data-testid="story-section"
            className="relative bg-cream py-20 md:py-28 lg:py-32 paper-grain"
        >
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow="Our Story"
                    title="From the Azores, *with patience*"
                    subtext="Three generations of dairy know‑how carried across an ocean. Today our herd grazes the rolling pastures of Riverside County while old Portuguese recipes simmer in the farmhouse kitchen."
                />

                <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        className="md:col-span-7 relative rounded-3xl overflow-hidden bg-parchment border border-stroke aspect-[4/5] md:aspect-[5/6]"
                    >
                        <img
                            src={IMG_FAMILY}
                            alt="Family on the farm"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 halftone opacity-[0.08] mix-blend-multiply" />
                        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                            <div className="text-cream">
                                <p className="text-[10px] uppercase tracking-[0.3em] opacity-80">
                                    Est. 2018 · Woodcrest, CA
                                </p>
                                <p className="font-display italic text-3xl md:text-4xl mt-1">
                                    The Freeland family
                                </p>
                            </div>
                            <span className="text-cream/80 text-xs">01 / 03</span>
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
                                Our Promise
                            </p>
                            <p className="font-display italic text-2xl md:text-3xl text-coffee-deep leading-snug">
                                “Slow food, kind hands, honest milk. Nothing rushed,
                                nothing spared.”
                            </p>
                            <p className="mt-5 text-sm text-saddle/85 leading-relaxed">
                                We bottle cream-top A2/A2 milk in glass, hand‑shape
                                every sourdough, and pull our cheeses fresh on bake
                                day. The whole farm runs on the same rhythm — slow,
                                steady, and just a little bit Portuguese.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeUp}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="relative rounded-2xl overflow-hidden aspect-square border border-stroke">
                                <img
                                    src={IMG_TOOLS}
                                    alt="Vintage farm tools"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 halftone opacity-[0.08] mix-blend-multiply" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden aspect-square border border-stroke">
                                <img
                                    src={IMG_PORTUGAL}
                                    alt="Portuguese tradition"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 halftone opacity-[0.08] mix-blend-multiply" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Inline timeline strip */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
                    className="mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-stroke pt-10"
                >
                    {[
                        {
                            year: "1962",
                            label: "Grandfather Joaquim begins milking on São Miguel.",
                        },
                        {
                            year: "2003",
                            label: "The family settles in Riverside County.",
                        },
                        {
                            year: "2018",
                            label: "Amber Freeland founds the farm under her name.",
                        },
                        {
                            year: "2025",
                            label: "Partnership with Batista Family Farm + Gioia Cheese.",
                        },
                    ].map((m) => (
                        <div key={m.year} className="flex flex-col gap-2">
                            <span className="font-display italic text-3xl md:text-4xl text-coffee-deep">
                                {m.year}
                            </span>
                            <span className="text-xs md:text-sm text-saddle/85 leading-relaxed max-w-[20ch]">
                                {m.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;
