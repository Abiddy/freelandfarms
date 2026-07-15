import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useContent } from "@/context/ContentContext";

const ProductCard = ({ p, index }) => (
    <motion.article
        data-testid={`product-card-${index}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
        className={`group relative overflow-hidden rounded-3xl border border-stroke bg-cream-warm ${p.span}`}
    >
        <div className={`relative w-full ${p.aspect}`}>
            <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 halftone opacity-[0.07] mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep/55 via-transparent to-transparent" />

            {p.tag ? (
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] bg-cream/90 text-coffee-deep px-3 py-1.5 rounded-full backdrop-blur">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    {p.tag}
                </span>
            ) : null}

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                    <h3 className="font-display text-cream text-2xl md:text-3xl leading-tight">
                        {p.title}
                    </h3>
                    <p className="text-cream/80 text-xs md:text-sm mt-1">
                        {p.subtitle}
                    </p>
                </div>
                <span className="shrink-0 font-display italic text-cream text-lg md:text-xl bg-coffee-deep/40 backdrop-blur-md px-3 py-1 rounded-full border border-cream/20">
                    {p.price}
                </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cream/40 backdrop-blur-[2px]">
                <span className="relative inline-flex rounded-full p-[2px]">
                    <span className="absolute inset-0 rounded-full gradient-ring" />
                    <span className="relative inline-flex items-center gap-2 bg-cream text-coffee-deep px-5 py-2 rounded-full text-sm">
                        View — <span className="font-display italic">{p.title}</span>
                    </span>
                </span>
            </div>
        </div>
    </motion.article>
);

const Products = () => {
    const { content } = useContent();
    const { products } = content;

    return (
        <section
            id="products"
            data-testid="products-section"
            className="relative bg-cream-warm py-20 md:py-28"
        >
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow={products.eyebrow}
                    title={products.title}
                    subtext={products.subtext}
                />

                <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-fr">
                    {products.items.map((p, i) => (
                        <ProductCard p={p} key={p.title} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
