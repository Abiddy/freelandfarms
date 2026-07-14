import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

// Photos from the current Freeland Family Farms website
const IMG_FAMILY =
    "https://img1.wsimg.com/isteam/ip/2f2689ca-b6b0-4c09-8e6a-f128711be214/IMG_1787-d25b71d.jpg/:/rs=w:1600";
const IMG_MILK =
    "https://img1.wsimg.com/isteam/ip/2f2689ca-b6b0-4c09-8e6a-f128711be214/IMG_2740.jpg/:/rs=w:1200";
const IMG_SOURDOUGH =
    "https://img1.wsimg.com/isteam/ip/2f2689ca-b6b0-4c09-8e6a-f128711be214/IMG_8100.jpg/:/rs=w:1200";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const STORY_PARAGRAPHS = [
    "At Freeland Family Farms, we are committed to producing exceptional dairy products and baked goods, thoughtfully crafted with care, tradition, and an unwavering dedication to quality. Owner Amber Freeland has dedicated a decade of her career to higher education and agriculture, which fueled her dream for this business. Her insight regarding agriculture and food systems revealed a need for farm fresh products in our local communities.",
    "We are proud to collaborate with Zach Batista, owner of Batista Family Farm, to provide our cream-top A2/A2 milk. Together, we support and strengthen local food systems throughout Riverside, San Bernardino, Orange and Los Angeles Counties.",
    "In 2025 we partnered with Gioia Cheese, a family-owned Italian father-and-son operation whose cheeses are made without preservatives using traditional Italian methods. Through this partnership, we are expanding our presence into farmers' markets and community events, allowing us to reach customers beyond Los Angeles County and share our products with a broader community.",
    "We have also partnered with Drake Family Farms and Tres Bien Creamery and proudly sell their farm fresh flavored cow, goat and sheep cheeses.",
    "Amber Freeland and Zach Batista, both of Portuguese heritage, share a deep passion for honoring and preserving their cultural roots. Through our partnership, we are honored to bring the richness of Portuguese tradition from our farms to your table.",
];

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
                />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
                    className="mt-10 md:mt-12 max-w-3xl space-y-5"
                >
                    {STORY_PARAGRAPHS.map((paragraph, i) => (
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
                                    src={IMG_MILK}
                                    alt="Cream-top A2/A2 milk being bottled"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 halftone opacity-[0.08] mix-blend-multiply" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden aspect-square border border-stroke">
                                <img
                                    src={IMG_SOURDOUGH}
                                    alt="Fresh-baked sourdough loaves"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 halftone opacity-[0.08] mix-blend-multiply" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
