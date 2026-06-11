import { useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Mail, Phone, User, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  message: z.string().trim().max(1000).optional(),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({ title: "Please check your details", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", phone: "", message: "" });
      toast({ title: "Message sent", description: "Thanks for reaching out — we'll be in touch shortly." });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-44 md:pt-52 pb-20">
        <section className="container-news max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Contact</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-4 text-glow">Get in touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Have a story tip, partnership idea, or want to advertise with Glow TV? Send us a message.
          </p>

          <div className="grid lg:grid-cols-5 gap-10">
            <form onSubmit={onSubmit} className="lg:col-span-3 news-card p-6 md:p-8 space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                  <User size={13} /> Name
                </label>
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                    <Mail size={13} /> Email
                  </label>
                  <input
                    required
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                    <Phone size={13} /> Phone number
                  </label>
                  <input
                    required
                    type="tel"
                    maxLength={30}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                    placeholder="+61 ..."
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Message (optional)</label>
                <textarea
                  rows={5}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider amber-glow-sm hover:amber-glow transition-all disabled:opacity-60"
              >
                {submitting ? "Sending..." : <>Send Message <Send size={14} /></>}
              </button>
            </form>

            <aside className="lg:col-span-2 space-y-4">
              <div className="news-card p-6">
                <Mail className="text-primary mb-3" size={22} />
                <h3 className="font-display font-bold mb-1">Email</h3>
                <a href="mailto:newsroom@glowtv.com.au" className="text-sm text-muted-foreground hover:text-primary transition">newsroom@glowtv.com.au</a>
              </div>
              <div className="news-card p-6">
                <Phone className="text-primary mb-3" size={22} />
                <h3 className="font-display font-bold mb-1">Phone</h3>
                <a href="tel:+61290000000" className="text-sm text-muted-foreground hover:text-primary transition">+61 2 9000 0000</a>
              </div>
              <div className="news-card p-6">
                <MapPin className="text-primary mb-3" size={22} />
                <h3 className="font-display font-bold mb-1">Studio</h3>
                <p className="text-sm text-muted-foreground">Level 12, 1 Martin Place<br />Sydney NSW 2000</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
