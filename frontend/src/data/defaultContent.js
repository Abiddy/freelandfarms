const VIDEO_URL = `${process.env.PUBLIC_URL ?? ""}/media/hero-dairy-farm.mp4`;
const VIDEO_FALLBACK =
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=85&w=2400&auto=format&fit=crop";

export const defaultContent = {
    hero: {
        titleLine1: "Freeland",
        titleLine2: "Family Farms",
        tagline:
            "Farm fresh A2A2 cream top milk, farm fresh cheeses, hand made sourdough and baked goods.",
        ctaText: "Shop Now",
        videoUrl: VIDEO_URL,
        videoFallback: VIDEO_FALLBACK,
    },
    ourStory: {
        eyebrow: "Our Story",
        title: "From the Azores, *with patience*",
        paragraphs: [
            "At Freeland Family Farms, we are committed to producing exceptional dairy products and baked goods, thoughtfully crafted with care, tradition, and an unwavering dedication to quality. Owner Amber Freeland has dedicated a decade of her career to higher education and agriculture, which fueled her dream for this business. Her insight regarding agriculture and food systems revealed a need for farm fresh products in our local communities.",
            "We are proud to collaborate with Zach Batista, owner of Batista Family Farm, to provide our cream-top A2/A2 milk. Together, we support and strengthen local food systems throughout Riverside, San Bernardino, Orange and Los Angeles Counties.",
            "In 2025 we partnered with Gioia Cheese, a family-owned Italian father-and-son operation whose cheeses are made without preservatives using traditional Italian methods. Through this partnership, we are expanding our presence into farmers' markets and community events, allowing us to reach customers beyond Los Angeles County and share our products with a broader community.",
            "We have also partnered with Drake Family Farms and Tres Bien Creamery and proudly sell their farm fresh flavored cow, goat and sheep cheeses.",
            "Amber Freeland and Zach Batista, both of Portuguese heritage, share a deep passion for honoring and preserving their cultural roots. Through our partnership, we are honored to bring the richness of Portuguese tradition from our farms to your table.",
        ],
        mainImage: {
            url: "https://img1.wsimg.com/isteam/ip/2f2689ca-b6b0-4c09-8e6a-f128711be214/IMG_1787-d25b71d.jpg/:/rs=w:1600",
            alt: "Family on the farm",
            overlayLabel: "Est. 2018 · Woodcrest, CA",
            overlayTitle: "The Freeland family",
            counter: "01 / 03",
        },
        promise: {
            label: "Our Promise",
            quote: "Slow food, kind hands, honest milk. Nothing rushed, nothing spared.",
        },
        sideImages: [
            {
                url: "https://img1.wsimg.com/isteam/ip/2f2689ca-b6b0-4c09-8e6a-f128711be214/IMG_2740.jpg/:/rs=w:1200",
                alt: "Cream-top A2/A2 milk being bottled",
            },
            {
                url: "https://img1.wsimg.com/isteam/ip/2f2689ca-b6b0-4c09-8e6a-f128711be214/IMG_8100.jpg/:/rs=w:1200",
                alt: "Fresh-baked sourdough loaves",
            },
        ],
    },
    products: {
        eyebrow: "Our Larder",
        title: "From the *bake bench*",
        subtext:
            "Pulled, baked, and bottled by hand each week. Pre-orders open every Friday — pick-up Sunday at the farmhouse door.",
        items: [
            {
                title: "Cream-Top A2/A2 Milk",
                subtitle: "1 gal · glass",
                price: "Coming soon",
                tag: "Signature",
                image:
                    "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=85&w=1400&auto=format&fit=crop",
                span: "md:col-span-7 md:row-span-2",
                aspect: "aspect-[4/5] md:aspect-auto md:h-full",
            },
            {
                title: "Traditional Sourdough",
                subtitle: "Slow-fermented · 28h",
                price: "$10",
                tag: "Bake day",
                image:
                    "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=85&w=1200&auto=format&fit=crop",
                span: "md:col-span-5",
                aspect: "aspect-[5/4]",
            },
            {
                title: "Cinnamon Honey Butter",
                subtitle: "Sourdough loaf",
                price: "$13",
                tag: "",
                image:
                    "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=85&w=1200&auto=format&fit=crop",
                span: "md:col-span-5",
                aspect: "aspect-[5/4]",
            },
            {
                title: "Burrata",
                subtitle: "4 oz · pulled fresh",
                price: "$5",
                tag: "Gioia Cheese",
                image:
                    "https://images.unsplash.com/photo-1559561853-08451507cbe7?q=85&w=1200&auto=format&fit=crop",
                span: "md:col-span-4",
                aspect: "aspect-square",
            },
            {
                title: "Oaxaca",
                subtitle: "1 lb · stretched",
                price: "$15",
                tag: "",
                image:
                    "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=85&w=1200&auto=format&fit=crop",
                span: "md:col-span-4",
                aspect: "aspect-square",
            },
            {
                title: "Queso Fresco · Panela",
                subtitle: "1 lb each",
                price: "$15",
                tag: "",
                image:
                    "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=85&w=1200&auto=format&fit=crop",
                span: "md:col-span-4",
                aspect: "aspect-square",
            },
            {
                title: "Bolos Levedos",
                subtitle: "Portuguese Azorean muffin",
                price: "Coming soon",
                tag: "Heritage",
                image:
                    "https://images.unsplash.com/photo-1534432182912-63863115e106?q=85&w=1400&auto=format&fit=crop",
                span: "md:col-span-7",
                aspect: "aspect-[16/10]",
            },
            {
                title: "Jalapeño & Cheddar Sourdough",
                subtitle: "Seasonal",
                price: "$13",
                tag: "",
                image:
                    "https://images.unsplash.com/photo-1568471173242-461f0a730452?q=85&w=1200&auto=format&fit=crop",
                span: "md:col-span-5",
                aspect: "aspect-[5/4]",
            },
        ],
    },
    sustainability: {
        eyebrow: "Animal Welfare & Sustainability",
        title: "Kindness is the *first ingredient.*",
        subtext:
            "Every pour, every loaf, every wheel begins with how the animals are treated and how the land is cared for. Here is how we keep that promise.",
        practices: [
            {
                n: "01",
                title: "Pasture-raised, always",
                body: "Our cows graze open fields year-round. No feedlots, no shortcuts — just sun, grass, and time.",
            },
            {
                n: "02",
                title: "A2/A2 protein only",
                body: "Single-protein milk that's gentler on digestion. We test each cow before she joins the herd.",
            },
            {
                n: "03",
                title: "Glass over plastic",
                body: "Returnable glass bottles, beeswax wraps, and compostable bakery liners. Less landfill, more love.",
            },
            {
                n: "04",
                title: "Slow ferment, real flavor",
                body: "Every sourdough rests 24–28 hours. The wild yeast does the work — we just keep the kitchen warm.",
            },
            {
                n: "05",
                title: "Local-only sourcing",
                body: "Wheat, salt, and cultures sourced within 200 miles. Our partners' names are on the label.",
            },
            {
                n: "06",
                title: "Carbon-aware delivery",
                body: "Sunday-morning farmer's-market drop‑offs and electric runs across Riverside, San Bernardino & LA County.",
            },
        ],
    },
    journal: {
        eyebrow: "Field Notes",
        title: "From the *farmhouse desk*",
        subtext:
            "Slow journal entries about animals, recipes, and the small daily decisions that shape a farm.",
        entries: [
            {
                title: "Why we bottle in glass (and what it costs us).",
                excerpt:
                    "A small farm's case for the heavier, breakable, beautiful choice.",
                body: "Glass costs more to ship, breaks in the wash, and weighs down every delivery run. We still choose it because milk tastes better from glass, and because returnable bottles keep plastic out of the landfill. It's a small decision that shapes how we think about every product we sell.",
                date: "Nov 18, 2025",
                read: "5 min read",
                image:
                    "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=85&w=900&auto=format&fit=crop",
            },
            {
                title: "Bake day, in nine smells.",
                excerpt:
                    "Levain, butter melting on cast iron, cinnamon hitting warm honey…",
                body: "Bake day starts before sunrise. The levain wakes first, then the oven, then the whole kitchen fills with smells — butter on cast iron, cinnamon in warm honey, flour dust in the air. By the time the first loaf comes out, the farmhouse smells like Sunday all week long.",
                date: "Oct 30, 2025",
                read: "4 min read",
                image:
                    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=85&w=900&auto=format&fit=crop",
            },
            {
                title: "Bolos Levedos: a recipe in my grandmother's hand.",
                excerpt: "How an Azorean muffin made the trip from São Miguel to Riverside.",
                body: "My grandmother's recipe traveled in a notebook, in Portuguese, with measurements by feel rather than cup. We've adapted it for our kitchen in Woodcrest, but the spirit is the same — a slow-rise muffin that tastes like home, whether home is the Azores or California.",
                date: "Oct 12, 2025",
                read: "7 min read",
                image:
                    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=85&w=900&auto=format&fit=crop",
            },
            {
                title: "What 'A2/A2 milk' actually means.",
                excerpt: "We explain it once, plainly, with no marketing in the cream.",
                body: "A2/A2 refers to a single type of beta-casein protein in milk. Some people find it easier to digest than the more common A1 variant. We test our herd, breed for A2 genetics, and bottle what we know — no marketing spin, just honest milk from cows we know by name.",
                date: "Sep 26, 2025",
                read: "6 min read",
                image:
                    "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=85&w=900&auto=format&fit=crop",
            },
        ],
    },
    whereToBuy: {
        eyebrow: "Find Us",
        title: "Where the *bread lands*",
        subtext:
            "Catch us at markets across Riverside, San Bernardino, and LA County — or come straight to the farmhouse on Sundays.",
        stockistsLabel: "Markets & Stockists",
        eventsLabel: "Upcoming Events",
        stockists: [
            {
                name: "Frangipani Winery Market",
                city: "Temecula, CA",
                when: "Sat · 10am – 3pm",
            },
            {
                name: "Riverside Farmer's Market",
                city: "Riverside, CA",
                when: "Sun · 8am – 1pm",
            },
            {
                name: "Clover Coffee Roastery",
                city: "Pasadena, CA",
                when: "Daily · pastry case",
            },
            {
                name: "Old Town Pasadena Mkt",
                city: "Pasadena, CA",
                when: "Sat · 8am – 12pm",
            },
            {
                name: "Hollywood Farmer's Mkt",
                city: "Los Angeles, CA",
                when: "Sun · 8am – 1pm",
            },
            {
                name: "Farmhouse Pickup",
                city: "Woodcrest, CA",
                when: "Sun · 11am – 2pm",
            },
        ],
        events: [
            {
                date: "Dec 14, 2025",
                title: "Vendor Market — Frangipani Winery",
                partner: "Partnership with Clover Coffee",
            },
            {
                date: "Jan 11, 2026",
                title: "Sourdough Workshop · Farmhouse Kitchen",
                partner: "8 seats · BYO apron",
            },
            {
                date: "Feb 22, 2026",
                title: "Cheese Pull · Gioia + Freeland",
                partner: "Live burrata pulling at Hollywood Mkt",
            },
        ],
    },
    testimonials: {
        eyebrow: "Kind words",
        title: "Spoken at the *kitchen table*",
        subtext: "Honest reactions from the families who eat what we bake.",
        quotes: [
            {
                quote:
                    "The cream-top milk is unreal. My kids fight over the last glass like it's dessert.",
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
        ],
    },
    contact: {
        eyebrow: "Stay in the loop",
        titleLine1: "Pull up a *chair.*",
        titleLine2: "Bring your *appetite.*",
        description:
            "Drop us a note about a market visit, a wholesale order, or tell us which loaf you'd like to see next. We read every message at the farmhouse table.",
        email: "freelandfamilyfarmsca@gmail.com",
        farmhouse: "Woodcrest, CA",
        hours: "Sun · 11–2",
        insurance: "via FLIP",
        marqueePhrase: "From our farm to your table — ",
        footerNote: "Pre-orders open · Sundays at the farmhouse",
        instagramUrl: "https://www.instagram.com/freelandfamilyfarms",
    },
};
