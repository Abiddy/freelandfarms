import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const SectionHeader = ({
    eyebrow,
    title,
    italicWord,
    subtext,
    cta,
    align = "left",
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className={`flex flex-col md:flex-row md:items-end gap-6 md:gap-10 ${
                align === "center" ? "items-center text-center" : ""
            }`}
        >
            <div className="flex-1">
                <p className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-saddle mb-5">
                    <span className="w-8 h-px bg-saddle/50" />
                    {eyebrow}
                </p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-coffee-deep leading-[1.05] tracking-tight">
                    {title.split("*").map((part, i) =>
                        i % 2 === 1 ? (
                            <span key={i} className="italic text-saddle">
                                {part}
                            </span>
                        ) : (
                            <span key={i}>{part}</span>
                        ),
                    )}
                </h2>
                {italicWord ? (
                    <span className="font-display italic text-saddle text-4xl md:text-5xl lg:text-6xl">
                        {italicWord}
                    </span>
                ) : null}
                {subtext ? (
                    <p className="mt-4 text-sm md:text-base text-saddle/85 max-w-xl leading-relaxed">
                        {subtext}
                    </p>
                ) : null}
            </div>
            {cta ? <div className="md:pb-2">{cta}</div> : null}
        </motion.div>
    );
};

export default SectionHeader;
