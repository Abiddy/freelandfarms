import {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
} from "react";
import { defaultContent } from "@/data/defaultContent";

const ContentContext = createContext(null);
const CONTENT_KEY = "freeland_site_content";

const deepMerge = (defaults, saved) => {
    if (!saved) return defaults;
    const result = { ...defaults };
    for (const key of Object.keys(defaults)) {
        if (
            typeof defaults[key] === "object" &&
            defaults[key] !== null &&
            !Array.isArray(defaults[key])
        ) {
            result[key] = deepMerge(defaults[key], saved[key]);
        } else if (Array.isArray(defaults[key])) {
            result[key] = saved[key] ?? defaults[key];
        } else {
            result[key] = saved[key] ?? defaults[key];
        }
    }
    return result;
};

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(() => {
        try {
            const saved = localStorage.getItem(CONTENT_KEY);
            return deepMerge(defaultContent, saved ? JSON.parse(saved) : null);
        } catch {
            return defaultContent;
        }
    });

    useEffect(() => {
        localStorage.setItem(CONTENT_KEY, JSON.stringify(content));
    }, [content]);

    const updateSection = useCallback((section, data) => {
        setContent((prev) => ({ ...prev, [section]: data }));
    }, []);

    const resetContent = useCallback(() => {
        setContent(defaultContent);
        localStorage.removeItem(CONTENT_KEY);
    }, []);

    return (
        <ContentContext.Provider
            value={{ content, updateSection, resetContent }}
        >
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const ctx = useContext(ContentContext);
    if (!ctx) throw new Error("useContent must be used within ContentProvider");
    return ctx;
};
