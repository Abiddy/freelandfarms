import { useEffect, useState } from "react";

const NAV_ITEMS = [
    { id: "home", label: "Home" },
    { id: "story", label: "Story" },
    { id: "products", label: "Products" },
    { id: "journal", label: "Journal" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 100);
            // simple active section detection
            const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
            const y = window.scrollY + window.innerHeight * 0.3;
            for (let i = sections.length - 1; i >= 0; i--) {
                const s = sections[i];
                if (s && s.offsetTop <= y) {
                    setActive(NAV_ITEMS[i].id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (id) => (e) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.getBoundingClientRect().top + window.scrollY - 24,
                behavior: "smooth",
            });
        }
    };

    return (
        <header
            data-testid="navbar"
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 md:pt-5 px-3"
        >
            <nav
                className={`inline-flex items-center rounded-full border border-stroke/70 backdrop-blur-xl bg-cream/80 px-2 py-2 transition-shadow duration-500 ${
                    scrolled
                        ? "shadow-[0_10px_40px_-15px_rgba(45,28,17,0.25)]"
                        : "shadow-sm"
                }`}
            >
                {/* Logo */}
                <a
                    data-testid="navbar-logo"
                    href="#home"
                    onClick={handleNav("home")}
                    aria-label="Freeland Family Farms — Home"
                    className="group relative w-9 h-9 rounded-full p-[1.5px] transition-transform hover:scale-110"
                >
                    <span className="absolute inset-0 rounded-full gradient-ring" />
                    <span className="relative block h-full w-full overflow-hidden rounded-full bg-cream">
                        <img
                            src={`${process.env.PUBLIC_URL ?? ""}/media/freeland-logo.png`}
                            alt=""
                            width={36}
                            height={36}
                            decoding="async"
                            className="h-full w-full object-contain object-center"
                        />
                    </span>
                </a>

                <span className="w-px h-5 bg-stroke mx-1.5 hidden md:block" />

                {/* Nav links */}
                <ul className="hidden md:flex items-center gap-0.5">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.id}>
                            <a
                                data-testid={`nav-link-${item.id}`}
                                href={`#${item.id}`}
                                onClick={handleNav(item.id)}
                                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 ${
                                    active === item.id
                                        ? "text-coffee-deep bg-parchment/70"
                                        : "text-saddle hover:text-coffee-deep hover:bg-parchment/50"
                                }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <span className="w-px h-5 bg-stroke mx-1.5 hidden md:block" />

                {/* Shop here */}
                <a
                    data-testid="navbar-cta"
                    href="#products"
                    onClick={handleNav("products")}
                    className="group relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
                >
                    <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity gradient-ring" />
                    <span className="relative flex items-center gap-1.5 rounded-full bg-coffee-deep text-cream px-3 sm:px-4 py-1.5 sm:py-2 -m-3 sm:-m-4">
                        Shop here
                        <span className="text-[11px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            ↗
                        </span>
                    </span>
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
