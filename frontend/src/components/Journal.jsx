import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useContent } from "@/context/ContentContext";

const Journal = () => {
    const { content } = useContent();
    const { journal } = content;

    return (
        <section
            id="journal"
            data-testid="journal-section"
            className="relative bg-cream-warm py-20 md:py-28"
        >
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow={journal.eyebrow}
                    title={journal.title}
                    subtext={journal.subtext}
                />

                <Accordion.Root
                    type="single"
                    collapsible
                    className="mt-12 md:mt-14 grid gap-4 md:gap-5"
                >
                    {journal.entries.map((e, i) => (
                        <Accordion.Item
                            key={e.title}
                            value={`entry-${i}`}
                            data-testid={`journal-entry-${i}`}
                            className="group"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: i * 0.06,
                                    ease: "easeOut",
                                }}
                                className="bg-cream/70 hover:bg-cream border border-stroke rounded-[28px] sm:rounded-full transition-all overflow-hidden data-[state=open]:rounded-3xl"
                            >
                                <Accordion.Header className="flex">
                                    <Accordion.Trigger className="flex flex-1 flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 p-4 sm:p-4 text-left w-full group/trigger [&[data-state=open]>div>.chevron]:rotate-180">
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
                                        <div className="hidden sm:flex shrink-0 mr-4 w-10 h-10 items-center justify-center rounded-full border border-stroke text-saddle group-hover/trigger:bg-coffee-deep group-hover/trigger:text-cream group-hover/trigger:border-coffee-deep transition-all">
                                            <ChevronDown className="chevron h-4 w-4 transition-transform duration-200" />
                                        </div>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                    <div className="px-4 sm:px-6 pb-6 sm:pl-[calc(8rem+1.5rem)] md:pl-[calc(10rem+1.5rem)]">
                                        <p className="text-sm md:text-base text-saddle/90 leading-relaxed max-w-2xl">
                                            {e.body || e.excerpt}
                                        </p>
                                    </div>
                                </Accordion.Content>
                            </motion.div>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </section>
    );
};

export default Journal;
