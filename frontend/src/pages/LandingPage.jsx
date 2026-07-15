import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import Journal from "@/components/Journal";
import WhereToBuy from "@/components/WhereToBuy";
import Testimonials from "@/components/Testimonials";
import ContactFooter from "@/components/ContactFooter";

const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isLoading]);

    return (
        <div className="App bg-cream text-coffee-deep">
            <AnimatePresence>
                {isLoading && (
                    <LoadingScreen onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            <Navbar />

            <main>
                <Hero />
                <OurStory />
                <Products />
                <Sustainability />
                <Journal />
                <WhereToBuy />
                <Testimonials />
            </main>

            <ContactFooter />
        </div>
    );
};

export default LandingPage;
