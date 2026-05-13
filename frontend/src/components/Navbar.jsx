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
                className={`flex max-w-[min(100%,calc(100vw-1.5rem))] items-center gap-3 rounded-full border border-stroke/70 bg-cream/80 px-3 py-2.5 backdrop-blur-xl transition-shadow duration-500 md:max-w-none md:gap-0 md:px-2 md:py-2 ${
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
                    className="group relative h-9 w-9 shrink-0 rounded-full p-[1.5px] transition-transform hover:scale-110"
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

                <span className="mx-1.5 hidden h-5 w-px bg-stroke md:block" />

                <ul className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:flex-initial md:justify-start md:gap-0.5 md:overflow-visible [&::-webkit-scrollbar]:hidden">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.id} className="shrink-0">
                            <a
                                data-testid={`nav-link-${item.id}`}
                                href={`#${item.id}`}
                                onClick={handleNav(item.id)}
                                className={`whitespace-nowrap rounded-full px-2.5 py-1.5 text-[11px] font-medium transition-all duration-300 sm:px-3 sm:text-xs md:px-3 md:py-1.5 md:text-xs lg:px-4 lg:py-2 lg:text-sm ${
                                    active === item.id
                                        ? "bg-parchment/70 text-coffee-deep"
                                        : "text-saddle hover:bg-parchment/50 hover:text-coffee-deep"
                                }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <span className="mx-1.5 hidden h-5 w-px bg-stroke md:block" />

                {/* Shop here */}
                <a
                    data-testid="navbar-cta"
                    href="#products"
                    onClick={handleNav("products")}
                    className="group relative shrink-0 rounded-full text-xs sm:text-sm"
                >
                    <span className="absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100 gradient-ring" />
                    <span className="relative flex items-center gap-1 rounded-full bg-coffee-deep px-3 py-2 text-cream sm:gap-1.5 sm:px-4 sm:py-2">
                        Shop here
                    </span>
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
