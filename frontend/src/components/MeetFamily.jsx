import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const PEOPLE = [
    {
        name: "Amber Freeland",
        role: "Founder · Head Baker",
        bio: "Carries her grandmother's bolos levedos recipe in a stained linen notebook. Wakes at 4am to start the levain.",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=85&w=900&auto=format&fit=crop",
    },
    {
        name: "Zach Batista",
        role: "Partner · Batista Family Farm",
        bio: "Tends our A2/A2 herd. Third-generation Portuguese-American dairyman with a soft spot for stubborn cows.",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=85&w=900&auto=format&fit=crop",
    },
    {
        name: "Maria & Joaquim",
        role: "Cheesemakers · Gioia",
        bio: "Father-and-son team pulling burrata and oaxaca by hand, using methods unchanged since their family left Naples.",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=85&w=900&auto=format&fit=crop",
    },
];

const MeetFamily = () => {
    return (
        <section
            id="family"
            data-testid="family-section"
            className="relative bg-cream py-20 md:py-28 paper-grain"
        >
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow="Meet the Family"
                    title="Hands behind *every loaf*"
                    subtext="A small circle of growers, bakers, and cheesemakers — most of us related, the rest close enough that it doesn't matter."
                />

                <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {PEOPLE.map((person, i) => (
                        <motion.div
                            key={person.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.85,
                                delay: i * 0.08,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            data-testid={`family-card-${i}`}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-3xl border border-stroke bg-cream-warm aspect-[4/5]">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 halftone opacity-[0.08] mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep/35 via-transparent" />
                            </div>
                            <div className="mt-5">
                                <h3 className="font-display text-3xl text-coffee-deep">
                                    {person.name}
                                </h3>
                                <p className="text-xs uppercase tracking-[0.25em] text-saddle mt-1">
                                    {person.role}
                                </p>
                                <p className="text-sm text-saddle/85 mt-3 leading-relaxed">
                                    {person.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetFamily;
