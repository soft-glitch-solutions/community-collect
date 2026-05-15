import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, BookOpen, LifeBuoy, Github, Send } from "lucide-react";
import { toast } from "sonner";

const faqs = [
  {
    q: "How do I sign up as a household?",
    a: "Download the Recoza app, create an account with your phone number, and complete the short onboarding. You can start logging recyclables immediately.",
  },
  {
    q: "How do I become a collector?",
    a: "Any household can apply to become a collector from within the app. Tap your profile → 'Become a collector', fill in your area and motivation, and our team will review your application within a few business days.",
  },
  {
    q: "How are collector earnings calculated?",
    a: "Earnings are estimated based on the type and weight of recyclables collected, using current South African buy-back rates. Final payouts depend on the buy-back centre the collector chooses.",
  },
  {
    q: "Why doesn't Recoza have in-app chat or payments?",
    a: "Recoza is intentionally simple. We don't host messaging, GPS tracking, or money transfers — collectors and households arrange pickup details and payouts directly, off-platform. This keeps the app lightweight, low-data, and safe.",
  },
  {
    q: "How do I delete my account?",
    a: "You can request account deletion from the Delete Account page in the footer. Your data will be removed within 30 days in line with POPIA.",
  },
  {
    q: "Is Recoza really free?",
    a: "Yes. Recoza is open source and not-for-profit. There are no fees, no ads, and no commission on collections.",
  },
  {
    q: "Why does the app feel so light on data?",
    a: "We optimise heavily for low-end Android devices and slow connections. No videos, no maps, minimal images — most actions use less than 10KB of data.",
  },
];

const Help = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    window.location.href = `mailto:hello@recoza.org?subject=Support%20from%20${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    toast.success("Opening your email client...");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
              <LifeBuoy className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Help & Support</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions or reach out to our team. We're here to help.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">FAQs</h3>
                <p className="text-sm text-muted-foreground">Quick answers below</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Email Us</h3>
                <a href="mailto:hello@recoza.org" className="text-sm text-primary hover:underline">
                  hello@recoza.org
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Github className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Report a Bug</h3>
                <a
                  href="https://github.com/soft-glitch-solutions/recoza/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Open an issue
                </a>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Still need help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your name</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your issue or question..."
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
