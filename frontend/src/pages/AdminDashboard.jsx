import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useContent } from "@/context/ContentContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Field = ({ label, children }) => (
    <div className="space-y-1.5">
        <Label className="text-xs uppercase tracking-wider text-saddle">{label}</Label>
        {children}
    </div>
);

const TextInput = ({ value, onChange, placeholder }) => (
    <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-cream border-stroke"
    />
);

const TextArea = ({ value, onChange, rows = 3, placeholder }) => (
    <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="bg-cream border-stroke resize-y"
    />
);

const SectionCard = ({ title, children }) => (
    <div className="bg-cream-warm border border-stroke rounded-2xl p-6 space-y-4">
        <h3 className="font-display text-xl text-coffee-deep">{title}</h3>
        {children}
    </div>
);

const HeroEditor = ({ data, onChange }) => (
    <div className="space-y-4">
        <Field label="Title line 1">
            <TextInput value={data.titleLine1} onChange={(v) => onChange({ ...data, titleLine1: v })} />
        </Field>
        <Field label="Title line 2">
            <TextInput value={data.titleLine2} onChange={(v) => onChange({ ...data, titleLine2: v })} />
        </Field>
        <Field label="Tagline">
            <TextArea value={data.tagline} onChange={(v) => onChange({ ...data, tagline: v })} />
        </Field>
        <Field label="CTA button text">
            <TextInput value={data.ctaText} onChange={(v) => onChange({ ...data, ctaText: v })} />
        </Field>
    </div>
);

const OurStoryEditor = ({ data, onChange }) => (
    <div className="space-y-6">
        <Field label="Eyebrow">
            <TextInput value={data.eyebrow} onChange={(v) => onChange({ ...data, eyebrow: v })} />
        </Field>
        <Field label="Title (use *word* for italic)">
            <TextInput value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
        </Field>
        <div className="space-y-3">
            <Label className="text-xs uppercase tracking-wider text-saddle">Paragraphs</Label>
            {data.paragraphs.map((p, i) => (
                <TextArea
                    key={i}
                    value={p}
                    onChange={(v) => {
                        const paragraphs = [...data.paragraphs];
                        paragraphs[i] = v;
                        onChange({ ...data, paragraphs });
                    }}
                    rows={3}
                />
            ))}
        </div>
        <SectionCard title="Main image overlay">
            <Field label="Image URL">
                <TextInput
                    value={data.mainImage.url}
                    onChange={(v) => onChange({ ...data, mainImage: { ...data.mainImage, url: v } })}
                />
            </Field>
            <Field label="Overlay label">
                <TextInput
                    value={data.mainImage.overlayLabel}
                    onChange={(v) => onChange({ ...data, mainImage: { ...data.mainImage, overlayLabel: v } })}
                />
            </Field>
            <Field label="Overlay title">
                <TextInput
                    value={data.mainImage.overlayTitle}
                    onChange={(v) => onChange({ ...data, mainImage: { ...data.mainImage, overlayTitle: v } })}
                />
            </Field>
        </SectionCard>
        <SectionCard title="Our Promise">
            <Field label="Label">
                <TextInput
                    value={data.promise.label}
                    onChange={(v) => onChange({ ...data, promise: { ...data.promise, label: v } })}
                />
            </Field>
            <Field label="Quote">
                <TextArea
                    value={data.promise.quote}
                    onChange={(v) => onChange({ ...data, promise: { ...data.promise, quote: v } })}
                />
            </Field>
        </SectionCard>
        <div className="space-y-3">
            <Label className="text-xs uppercase tracking-wider text-saddle">Side images</Label>
            {data.sideImages.map((img, i) => (
                <SectionCard key={i} title={`Image ${i + 1}`}>
                    <Field label="URL">
                        <TextInput
                            value={img.url}
                            onChange={(v) => {
                                const sideImages = [...data.sideImages];
                                sideImages[i] = { ...img, url: v };
                                onChange({ ...data, sideImages });
                            }}
                        />
                    </Field>
                    <Field label="Alt text">
                        <TextInput
                            value={img.alt}
                            onChange={(v) => {
                                const sideImages = [...data.sideImages];
                                sideImages[i] = { ...img, alt: v };
                                onChange({ ...data, sideImages });
                            }}
                        />
                    </Field>
                </SectionCard>
            ))}
        </div>
    </div>
);

const ProductsEditor = ({ data, onChange }) => (
    <div className="space-y-6">
        <Field label="Eyebrow">
            <TextInput value={data.eyebrow} onChange={(v) => onChange({ ...data, eyebrow: v })} />
        </Field>
        <Field label="Title (use *word* for italic)">
            <TextInput value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
        </Field>
        <Field label="Subtext">
            <TextArea value={data.subtext} onChange={(v) => onChange({ ...data, subtext: v })} />
        </Field>
        <div className="space-y-4">
            <Label className="text-xs uppercase tracking-wider text-saddle">Product cards</Label>
            {data.items.map((item, i) => (
                <SectionCard key={i} title={item.title || `Product ${i + 1}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Field label="Title">
                            <TextInput
                                value={item.title}
                                onChange={(v) => {
                                    const items = [...data.items];
                                    items[i] = { ...item, title: v };
                                    onChange({ ...data, items });
                                }}
                            />
                        </Field>
                        <Field label="Subtitle">
                            <TextInput
                                value={item.subtitle}
                                onChange={(v) => {
                                    const items = [...data.items];
                                    items[i] = { ...item, subtitle: v };
                                    onChange({ ...data, items });
                                }}
                            />
                        </Field>
                        <Field label="Price">
                            <TextInput
                                value={item.price}
                                onChange={(v) => {
                                    const items = [...data.items];
                                    items[i] = { ...item, price: v };
                                    onChange({ ...data, items });
                                }}
                            />
                        </Field>
                        <Field label="Tag (optional)">
                            <TextInput
                                value={item.tag}
                                onChange={(v) => {
                                    const items = [...data.items];
                                    items[i] = { ...item, tag: v };
                                    onChange({ ...data, items });
                                }}
                            />
                        </Field>
                    </div>
                    <Field label="Image URL">
                        <TextInput
                            value={item.image}
                            onChange={(v) => {
                                const items = [...data.items];
                                items[i] = { ...item, image: v };
                                onChange({ ...data, items });
                            }}
                        />
                    </Field>
                </SectionCard>
            ))}
        </div>
    </div>
);

const SustainabilityEditor = ({ data, onChange }) => (
    <div className="space-y-6">
        <Field label="Eyebrow">
            <TextInput value={data.eyebrow} onChange={(v) => onChange({ ...data, eyebrow: v })} />
        </Field>
        <Field label="Title (use *word* for italic)">
            <TextInput value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
        </Field>
        <Field label="Subtext">
            <TextArea value={data.subtext} onChange={(v) => onChange({ ...data, subtext: v })} />
        </Field>
        <div className="space-y-4">
            {data.practices.map((p, i) => (
                <SectionCard key={i} title={`Practice ${p.n}`}>
                    <Field label="Title">
                        <TextInput
                            value={p.title}
                            onChange={(v) => {
                                const practices = [...data.practices];
                                practices[i] = { ...p, title: v };
                                onChange({ ...data, practices });
                            }}
                        />
                    </Field>
                    <Field label="Body">
                        <TextArea
                            value={p.body}
                            onChange={(v) => {
                                const practices = [...data.practices];
                                practices[i] = { ...p, body: v };
                                onChange({ ...data, practices });
                            }}
                        />
                    </Field>
                </SectionCard>
            ))}
        </div>
    </div>
);

const JournalEditor = ({ data, onChange }) => (
    <div className="space-y-6">
        <Field label="Eyebrow">
            <TextInput value={data.eyebrow} onChange={(v) => onChange({ ...data, eyebrow: v })} />
        </Field>
        <Field label="Title (use *word* for italic)">
            <TextInput value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
        </Field>
        <Field label="Subtext">
            <TextArea value={data.subtext} onChange={(v) => onChange({ ...data, subtext: v })} />
        </Field>
        <div className="space-y-4">
            {data.entries.map((entry, i) => (
                <SectionCard key={i} title={entry.title || `Entry ${i + 1}`}>
                    <Field label="Title">
                        <TextInput
                            value={entry.title}
                            onChange={(v) => {
                                const entries = [...data.entries];
                                entries[i] = { ...entry, title: v };
                                onChange({ ...data, entries });
                            }}
                        />
                    </Field>
                    <Field label="Excerpt (shown collapsed)">
                        <TextArea
                            value={entry.excerpt}
                            onChange={(v) => {
                                const entries = [...data.entries];
                                entries[i] = { ...entry, excerpt: v };
                                onChange({ ...data, entries });
                            }}
                        />
                    </Field>
                    <Field label="Full content (shown expanded)">
                        <TextArea
                            value={entry.body}
                            onChange={(v) => {
                                const entries = [...data.entries];
                                entries[i] = { ...entry, body: v };
                                onChange({ ...data, entries });
                            }}
                            rows={4}
                        />
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Date">
                            <TextInput
                                value={entry.date}
                                onChange={(v) => {
                                    const entries = [...data.entries];
                                    entries[i] = { ...entry, date: v };
                                    onChange({ ...data, entries });
                                }}
                            />
                        </Field>
                        <Field label="Read time">
                            <TextInput
                                value={entry.read}
                                onChange={(v) => {
                                    const entries = [...data.entries];
                                    entries[i] = { ...entry, read: v };
                                    onChange({ ...data, entries });
                                }}
                            />
                        </Field>
                    </div>
                    <Field label="Image URL">
                        <TextInput
                            value={entry.image}
                            onChange={(v) => {
                                const entries = [...data.entries];
                                entries[i] = { ...entry, image: v };
                                onChange({ ...data, entries });
                            }}
                        />
                    </Field>
                </SectionCard>
            ))}
        </div>
    </div>
);

const WhereToBuyEditor = ({ data, onChange }) => (
    <div className="space-y-6">
        <Field label="Eyebrow">
            <TextInput value={data.eyebrow} onChange={(v) => onChange({ ...data, eyebrow: v })} />
        </Field>
        <Field label="Title (use *word* for italic)">
            <TextInput value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
        </Field>
        <Field label="Subtext">
            <TextArea value={data.subtext} onChange={(v) => onChange({ ...data, subtext: v })} />
        </Field>
        <div className="space-y-4">
            <Label className="text-xs uppercase tracking-wider text-saddle">Stockists</Label>
            {data.stockists.map((s, i) => (
                <SectionCard key={i} title={s.name}>
                    <Field label="Name">
                        <TextInput
                            value={s.name}
                            onChange={(v) => {
                                const stockists = [...data.stockists];
                                stockists[i] = { ...s, name: v };
                                onChange({ ...data, stockists });
                            }}
                        />
                    </Field>
                    <Field label="City">
                        <TextInput
                            value={s.city}
                            onChange={(v) => {
                                const stockists = [...data.stockists];
                                stockists[i] = { ...s, city: v };
                                onChange({ ...data, stockists });
                            }}
                        />
                    </Field>
                    <Field label="When">
                        <TextInput
                            value={s.when}
                            onChange={(v) => {
                                const stockists = [...data.stockists];
                                stockists[i] = { ...s, when: v };
                                onChange({ ...data, stockists });
                            }}
                        />
                    </Field>
                </SectionCard>
            ))}
        </div>
        <div className="space-y-4">
            <Label className="text-xs uppercase tracking-wider text-saddle">Events</Label>
            {data.events.map((ev, i) => (
                <SectionCard key={i} title={ev.title}>
                    <Field label="Date">
                        <TextInput
                            value={ev.date}
                            onChange={(v) => {
                                const events = [...data.events];
                                events[i] = { ...ev, date: v };
                                onChange({ ...data, events });
                            }}
                        />
                    </Field>
                    <Field label="Title">
                        <TextInput
                            value={ev.title}
                            onChange={(v) => {
                                const events = [...data.events];
                                events[i] = { ...ev, title: v };
                                onChange({ ...data, events });
                            }}
                        />
                    </Field>
                    <Field label="Partner / details">
                        <TextInput
                            value={ev.partner}
                            onChange={(v) => {
                                const events = [...data.events];
                                events[i] = { ...ev, partner: v };
                                onChange({ ...data, events });
                            }}
                        />
                    </Field>
                </SectionCard>
            ))}
        </div>
    </div>
);

const TestimonialsEditor = ({ data, onChange }) => (
    <div className="space-y-6">
        <Field label="Eyebrow">
            <TextInput value={data.eyebrow} onChange={(v) => onChange({ ...data, eyebrow: v })} />
        </Field>
        <Field label="Title (use *word* for italic)">
            <TextInput value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
        </Field>
        <Field label="Subtext">
            <TextArea value={data.subtext} onChange={(v) => onChange({ ...data, subtext: v })} />
        </Field>
        <div className="space-y-4">
            {data.quotes.map((q, i) => (
                <SectionCard key={i} title={q.name}>
                    <Field label="Quote">
                        <TextArea
                            value={q.quote}
                            onChange={(v) => {
                                const quotes = [...data.quotes];
                                quotes[i] = { ...q, quote: v };
                                onChange({ ...data, quotes });
                            }}
                        />
                    </Field>
                    <Field label="Name">
                        <TextInput
                            value={q.name}
                            onChange={(v) => {
                                const quotes = [...data.quotes];
                                quotes[i] = { ...q, name: v };
                                onChange({ ...data, quotes });
                            }}
                        />
                    </Field>
                    <Field label="From">
                        <TextInput
                            value={q.from}
                            onChange={(v) => {
                                const quotes = [...data.quotes];
                                quotes[i] = { ...q, from: v };
                                onChange({ ...data, quotes });
                            }}
                        />
                    </Field>
                </SectionCard>
            ))}
        </div>
    </div>
);

const ContactEditor = ({ data, onChange }) => (
    <div className="space-y-4">
        <Field label="Eyebrow">
            <TextInput value={data.eyebrow} onChange={(v) => onChange({ ...data, eyebrow: v })} />
        </Field>
        <Field label="Title line 1 (use *word* for italic)">
            <TextInput value={data.titleLine1} onChange={(v) => onChange({ ...data, titleLine1: v })} />
        </Field>
        <Field label="Title line 2 (use *word* for italic)">
            <TextInput value={data.titleLine2} onChange={(v) => onChange({ ...data, titleLine2: v })} />
        </Field>
        <Field label="Description">
            <TextArea value={data.description} onChange={(v) => onChange({ ...data, description: v })} />
        </Field>
        <Field label="Email">
            <TextInput value={data.email} onChange={(v) => onChange({ ...data, email: v })} />
        </Field>
        <Field label="Farmhouse location">
            <TextInput value={data.farmhouse} onChange={(v) => onChange({ ...data, farmhouse: v })} />
        </Field>
        <Field label="Hours">
            <TextInput value={data.hours} onChange={(v) => onChange({ ...data, hours: v })} />
        </Field>
        <Field label="Marquee phrase">
            <TextInput value={data.marqueePhrase} onChange={(v) => onChange({ ...data, marqueePhrase: v })} />
        </Field>
        <Field label="Footer note">
            <TextInput value={data.footerNote} onChange={(v) => onChange({ ...data, footerNote: v })} />
        </Field>
    </div>
);

const SECTIONS = [
    { id: "hero", label: "Hero", Editor: HeroEditor },
    { id: "ourStory", label: "Our Story", Editor: OurStoryEditor },
    { id: "products", label: "Products", Editor: ProductsEditor },
    { id: "sustainability", label: "Sustainability", Editor: SustainabilityEditor },
    { id: "journal", label: "Journal", Editor: JournalEditor },
    { id: "whereToBuy", label: "Where to Buy", Editor: WhereToBuyEditor },
    { id: "testimonials", label: "Testimonials", Editor: TestimonialsEditor },
    { id: "contact", label: "Contact", Editor: ContactEditor },
];

const AdminDashboard = () => {
    const { logout } = useAuth();
    const { content, updateSection, resetContent } = useContent();
    const navigate = useNavigate();
    const [saved, setSaved] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/admin");
    };

    const showSaved = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="min-h-screen bg-cream">
            <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-stroke">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="font-display text-2xl text-coffee-deep">Content Editor</h1>
                        <p className="text-xs text-saddle mt-0.5">Changes save automatically</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {saved && (
                            <span className="text-sm text-green-700">Saved!</span>
                        )}
                        <Button
                            variant="outline"
                            onClick={() => {
                                if (window.confirm("Reset all content to defaults?")) {
                                    resetContent();
                                }
                            }}
                            className="rounded-full border-stroke text-saddle"
                        >
                            Reset defaults
                        </Button>
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-saddle hover:text-coffee-deep px-3"
                        >
                            View site ↗
                        </a>
                        <Button
                            onClick={handleLogout}
                            variant="outline"
                            className="rounded-full border-stroke"
                        >
                            Log out
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                <Tabs defaultValue="hero">
                    <TabsList className="flex flex-wrap h-auto gap-1 bg-cream-warm border border-stroke p-1 rounded-2xl mb-8">
                        {SECTIONS.map((s) => (
                            <TabsTrigger
                                key={s.id}
                                value={s.id}
                                className="rounded-xl data-[state=active]:bg-coffee-deep data-[state=active]:text-cream"
                            >
                                {s.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {SECTIONS.map(({ id, Editor }) => (
                        <TabsContent key={id} value={id} className="mt-0">
                            <Editor
                                data={content[id]}
                                onChange={(data) => {
                                    updateSection(id, data);
                                    showSaved();
                                }}
                            />
                        </TabsContent>
                    ))}
                </Tabs>
            </main>
        </div>
    );
};

export default AdminDashboard;
