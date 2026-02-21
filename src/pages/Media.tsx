import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Copy, Check, Palette, Image, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import heroRecycling from "@/assets/hero-recycling.jpg";
import appInHand from "@/assets/app-in-hand.jpg";
import collectorSorting from "@/assets/collector-sorting.jpg";
import communityTeam from "@/assets/community-team.jpg";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button onClick={handleCopy} className="p-1 rounded hover:bg-muted transition-colors" aria-label="Copy">
      {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground" />}
    </button>
  );
};

const ColorSwatch = ({ name, token, hsl, hex, description }: { name: string; token: string; hsl: string; hex: string; description: string }) => (
  <div className="rounded-xl overflow-hidden border border-border shadow-soft">
    <div className="h-24 w-full" style={{ backgroundColor: hex }} />
    <div className="p-4 bg-card space-y-2">
      <h4 className="font-semibold text-foreground">{name}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
      <div className="space-y-1 text-xs font-mono">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">HEX</span>
          <span className="flex items-center gap-1">{hex} <CopyButton text={hex} /></span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">HSL</span>
          <span className="flex items-center gap-1">{hsl} <CopyButton text={hsl} /></span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Token</span>
          <span className="flex items-center gap-1">{token} <CopyButton text={token} /></span>
        </div>
      </div>
    </div>
  </div>
);

const primaryColors = [
  { name: "Leaf Green", token: "--primary", hsl: "152 55% 38%", hex: "#2B8B5E", description: "Growth, sustainability, hope — our core brand color" },
  { name: "Earth Orange", token: "--secondary", hsl: "32 60% 50%", hex: "#CC8533", description: "Community, warmth, South African earth" },
  { name: "Sky Teal", token: "--accent", hsl: "168 70% 42%", hex: "#20B2A0", description: "Vibrant accent for calls to action" },
  { name: "Sand", token: "--recoza-sand", hsl: "45 30% 92%", hex: "#EDE8DC", description: "Soft neutral background tone" },
  { name: "Bark", token: "--recoza-bark", hsl: "25 30% 25%", hex: "#533D2D", description: "Deep grounding dark tone" },
];

const semanticColors = [
  { name: "Background", token: "--background", hsl: "45 30% 98%", hex: "#FDFCF9", description: "Page background" },
  { name: "Foreground", token: "--foreground", hsl: "152 30% 15%", hex: "#1B3028", description: "Primary text" },
  { name: "Muted", token: "--muted", hsl: "45 20% 94%", hex: "#F2F0EB", description: "Subtle backgrounds" },
  { name: "Muted Text", token: "--muted-foreground", hsl: "152 15% 45%", hex: "#627A6E", description: "Secondary text" },
  { name: "Border", token: "--border", hsl: "45 20% 88%", hex: "#E4E0D6", description: "Dividers and borders" },
  { name: "Destructive", token: "--destructive", hsl: "0 84% 60%", hex: "#EF4444", description: "Error and destructive actions" },
];

const mediaAssets = [
  { src: heroRecycling, title: "Hero — Recycling in Action", description: "Primary hero image showing community recycling activity" },
  { src: appInHand, title: "App in Hand", description: "User interacting with the Recoza mobile app" },
  { src: collectorSorting, title: "Collector Sorting", description: "A collector sorting recyclable materials" },
  { src: communityTeam, title: "Community Team", description: "The Recoza community working together" },
];

const Media = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header */}
        <div className="container px-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Brand & Media Kit
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Everything you need to represent Recoza consistently — colors, imagery, and voice guidelines.
          </p>
        </div>

        <div className="container px-4">
          <Tabs defaultValue="colors" className="space-y-8">
            <TabsList className="bg-muted/80 backdrop-blur-sm">
              <TabsTrigger value="colors" className="gap-2">
                <Palette className="h-4 w-4" /> Colors
              </TabsTrigger>
              <TabsTrigger value="media" className="gap-2">
                <Image className="h-4 w-4" /> Media
              </TabsTrigger>
              <TabsTrigger value="tone" className="gap-2">
                <MessageSquare className="h-4 w-4" /> Tone & Voice
              </TabsTrigger>
            </TabsList>

            {/* COLORS */}
            <TabsContent value="colors" className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-2">Primary Palette</h2>
                <p className="text-muted-foreground mb-6">Core brand colors inspired by South African landscapes — from lush greens to warm earth tones.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {primaryColors.map((c) => <ColorSwatch key={c.token} {...c} />)}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-2">Semantic Tokens</h2>
                <p className="text-muted-foreground mb-6">Functional colors used across the UI for text, surfaces, and state.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {semanticColors.map((c) => <ColorSwatch key={c.token} {...c} />)}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-2">Gradients</h2>
                <p className="text-muted-foreground mb-6">Signature gradient combinations.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-xl overflow-hidden border border-border shadow-soft">
                    <div className="h-24 bg-gradient-hero" />
                    <div className="p-4 bg-card">
                      <h4 className="font-semibold text-foreground">Hero Gradient</h4>
                      <p className="text-xs text-muted-foreground mt-1">Leaf Green → Sky Teal</p>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border shadow-soft">
                    <div className="h-24 bg-gradient-warm" />
                    <div className="p-4 bg-card">
                      <h4 className="font-semibold text-foreground">Warm Gradient</h4>
                      <p className="text-xs text-muted-foreground mt-1">Earth Orange → Golden Sand</p>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border shadow-soft">
                    <div className="h-24 bg-gradient-earth" />
                    <div className="p-4 bg-card">
                      <h4 className="font-semibold text-foreground">Earth Gradient</h4>
                      <p className="text-xs text-muted-foreground mt-1">Warm White → Sand</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-2">Typography</h2>
                <p className="text-muted-foreground mb-6">We use <strong>Plus Jakarta Sans</strong> across all touchpoints.</p>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-4xl font-extrabold text-foreground">Recoza — Recycling for Everyone</p>
                    <p className="text-2xl font-bold text-foreground">Empowering communities through recycling</p>
                    <p className="text-lg font-semibold text-foreground">Connecting households with collectors</p>
                    <p className="text-base text-muted-foreground">Body text in regular weight for readability across all devices and screen sizes.</p>
                    <p className="text-sm text-muted-foreground">Small caption text for secondary information.</p>
                    <div className="pt-4 border-t border-border text-xs text-muted-foreground font-mono">
                      Font: Plus Jakarta Sans · Weights: 400, 500, 600, 700, 800
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* MEDIA */}
            <TabsContent value="media" className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-2">Photography</h2>
                <p className="text-muted-foreground mb-6">
                  Authentic imagery of South African people engaged in recycling. Warm, hopeful, and grounded.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mediaAssets.map((asset) => (
                    <div key={asset.title} className="rounded-xl overflow-hidden border border-border shadow-card group">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={asset.src}
                          alt={asset.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 bg-card">
                        <h4 className="font-semibold text-foreground">{asset.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{asset.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-2">Logo Usage</h2>
                <p className="text-muted-foreground mb-6">The Recoza wordmark uses the recycling emoji ♻️ paired with bold Plus Jakarta Sans text.</p>
                <Card>
                  <CardContent className="p-8 flex flex-col items-center gap-6">
                    <div className="flex items-center gap-3 text-4xl">
                      <span>♻️</span>
                      <span className="font-extrabold text-foreground">Recoza</span>
                    </div>
                    <div className="flex items-center gap-3 text-4xl bg-foreground rounded-xl px-8 py-4">
                      <span>♻️</span>
                      <span className="font-extrabold text-background">Recoza</span>
                    </div>
                    <p className="text-sm text-muted-foreground text-center max-w-md">
                      Maintain clear space around the logo equal to the height of the ♻️ icon. Do not distort, recolour, or add effects.
                    </p>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* TONE & VOICE */}
            <TabsContent value="tone" className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-2">Brand Voice</h2>
                <p className="text-muted-foreground mb-6">
                  Recoza speaks with warmth, clarity, and empowerment — always grounded in community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { trait: "Warm & Welcoming", desc: "We speak like a neighbour, not a corporation. Friendly, approachable, and inclusive.", do: "\"Join your neighbours in making a difference.\"", dont: "\"Register your account to initiate waste management protocols.\"" },
                    { trait: "Empowering", desc: "We lift people up. Every action matters, every person counts.", do: "\"You're turning waste into opportunity.\"", dont: "\"Users must comply with sorting requirements.\"" },
                    { trait: "Clear & Simple", desc: "No jargon. We explain complex systems in plain language anyone can understand.", do: "\"Separate your plastics, paper, and glass.\"", dont: "\"Categorise recyclable substrates by polymer classification.\"" },
                    { trait: "Hopeful & Grounded", desc: "Optimistic but realistic. We celebrate progress without ignoring the challenge.", do: "\"Together, we've diverted 2 tonnes from landfill this month.\"", dont: "\"We're saving the planet!!!\"" },
                  ].map((item) => (
                    <Card key={item.trait}>
                      <CardHeader>
                        <CardTitle className="text-lg">{item.trait}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                        <div className="rounded-lg bg-primary/10 p-3">
                          <p className="text-xs font-semibold text-primary mb-1">✓ Do</p>
                          <p className="text-sm text-foreground italic">{item.do}</p>
                        </div>
                        <div className="rounded-lg bg-destructive/10 p-3">
                          <p className="text-xs font-semibold text-destructive mb-1">✗ Don't</p>
                          <p className="text-sm text-foreground italic">{item.dont}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-2">Writing Principles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "People First", body: "Always lead with the human impact. Technology is the tool — community is the story." },
                    { title: "South African Context", body: "Use local language nuances. Reference Ubuntu, community spirit, and local geography when appropriate." },
                    { title: "Action-Oriented", body: "End with a clear next step. Every message should inspire the reader to do something meaningful." },
                  ].map((p) => (
                    <Card key={p.title}>
                      <CardContent className="p-6">
                        <h4 className="font-bold text-foreground mb-2">{p.title}</h4>
                        <p className="text-sm text-muted-foreground">{p.body}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Media;
