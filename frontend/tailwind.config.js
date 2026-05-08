/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                display: ["'Instrument Serif'", "serif"],
                body: ["'Work Sans'", "sans-serif"],
            },
            colors: {
                cream: "hsl(var(--cream))",
                "cream-warm": "hsl(var(--cream-warm))",
                parchment: "hsl(var(--parchment))",
                coffee: "hsl(var(--coffee))",
                "coffee-deep": "hsl(var(--coffee-deep))",
                saddle: "hsl(var(--saddle))",
                caramel: "hsl(var(--caramel))",
                honey: "hsl(var(--honey))",
                terracotta: "hsl(var(--terracotta))",
                "muted-brown": "hsl(var(--muted-brown))",
                stroke: "hsl(var(--stroke))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "scroll-down": {
                    "0%": { transform: "translateY(-100%)", opacity: "0" },
                    "30%": { opacity: "1" },
                    "70%": { opacity: "1" },
                    "100%": { transform: "translateY(200%)", opacity: "0" },
                },
                "role-fade-in": {
                    "0%": { opacity: "0", transform: "translateY(8px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "gradient-shift": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
                "soft-pulse": {
                    "0%, 100%": { opacity: "1", transform: "scale(1)" },
                    "50%": { opacity: "0.6", transform: "scale(0.85)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "scroll-down": "scroll-down 1.8s ease-in-out infinite",
                "role-fade-in": "role-fade-in 0.45s ease-out",
                "gradient-shift": "gradient-shift 6s ease infinite",
                "soft-pulse": "soft-pulse 2s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
