import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, BookOpen, FlaskRound, Palette, Users2, CalendarDays, Sparkles, MapPin, Phone, Mail, ChevronRight, Star, ShieldCheck, GraduationCap, Award, Library, Bus, Mountain, PlayCircle } from "lucide-react";

// --- Helpers ---
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// --- Color System (Yellow Shades) ---
// Tailwind palette used primarily: amber / yellow
// Accent neutrals: zinc

export default function MCSchoolLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50 text-zinc-900">
      {/* Top Announcement Bar */}
      <div className="sticky top-0 z-50 w-full bg-amber-100/80 backdrop-blur supports-[backdrop-filter]:bg-amber-100/70 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-600" />
            <span className="font-medium">Admissions for 2025–26 are now open.</span>
          </div>
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">Apply Now</Button>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-300 blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-300 blur-3xl opacity-30" />

        {/* Nav */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 grid place-items-center shadow-lg">
              <span className="font-black text-white">MC</span>
            </div>
            <div>
              <p className="text-xl font-extrabold leading-tight">MC School</p>
              <p className="text-xs text-zinc-600 -mt-1">Learn • Grow • Lead</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#programs" className="hover:text-amber-700">Programs</a>
            <a href="#facilities" className="hover:text-amber-700">Facilities</a>
            <a href="#events" className="hover:text-amber-700">Events</a>
            <a href="#admissions" className="hover:text-amber-700">Admissions</a>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Visit Campus</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <Badge className="bg-amber-200 text-amber-900 border border-amber-300">CBSE | ICSE | State board friendly</Badge>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                A modern Indian school
                <span className="block text-amber-600">with heart and discipline.</span>
              </h1>
              <p className="text-lg text-zinc-700 max-w-prose">
                MC School blends academics, arts, and athletics with a strong values-based culture. Simple, friendly, and future-ready for every child.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Explore Admissions <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-amber-300 text-amber-900 hover:bg-amber-100">
                  Watch Campus Tour <PlayCircle className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { label: "Years of Excellence", value: "25+" },
                  { label: "Students", value: "1800+" },
                  { label: "University Acceptances", value: "400+" },
                ].map((s, i) => (
                  <Card key={i} className="border-amber-200 bg-white/70 backdrop-blur">
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-extrabold text-amber-700">{s.value}</p>
                      <p className="text-xs text-zinc-600">{s.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-200 to-yellow-100 shadow-2xl overflow-hidden p-4 md:p-6">
                <div className="grid grid-cols-3 gap-3 h-full">
                  <div className="rounded-2xl bg-white/70 backdrop-blur border border-amber-200 p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-amber-700"/><span className="text-sm font-semibold">Safe Campus</span></div>
                    <div className="text-xs text-zinc-600">CCTV • Security • ID</div>
                  </div>
                  <div className="rounded-2xl bg-white/70 backdrop-blur border border-amber-200 p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-2"><FlaskRound className="h-5 w-5 text-amber-700"/><span className="text-sm font-semibold">STEM Labs</span></div>
                    <div className="text-xs text-zinc-600">Robotics • Science • Math</div>
                  </div>
                  <div className="rounded-2xl bg-white/70 backdrop-blur border border-amber-200 p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-2"><Palette className="h-5 w-5 text-amber-700"/><span className="text-sm font-semibold">Arts & Culture</span></div>
                    <div className="text-xs text-zinc-600">Music • Dance • Drama</div>
                  </div>
                  <div className="rounded-2xl bg-white/70 backdrop-blur border border-amber-200 p-4 col-span-2 flex flex-col justify-between">
                    <div className="flex items-center gap-2"><Library className="h-5 w-5 text-amber-700"/><span className="text-sm font-semibold">Modern Library</span></div>
                    <div className="text-xs text-zinc-600">Digital • Quiet Zones • Clubs</div>
                  </div>
                  <div className="rounded-2xl bg-white/70 backdrop-blur border border-amber-200 p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-2"><Bus className="h-5 w-5 text-amber-700"/><span className="text-sm font-semibold">Transport</span></div>
                    <div className="text-xs text-zinc-600">Safe routes across city</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </header>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" id="highlights">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-center mb-10">
            Why families choose <span className="text-amber-700">MC School</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <GraduationCap className="h-6 w-6 text-amber-700" />,
                title: "Strong Academics",
                desc: "Focused teaching with small groups, regular assessments, and mentoring.",
              },
              {
                icon: <Users2 className="h-6 w-6 text-amber-700" />,
                title: "Character & Values",
                desc: "Morning assembly, house system, social responsibility projects.",
              },
              {
                icon: <Award className="h-6 w-6 text-amber-700" />,
                title: "Results that matter",
                desc: "Board toppers, olympiad medals, sports laurels across Karnataka.",
              },
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full border-amber-200 bg-white/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">{f.icon}{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 text-sm leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Programs */}
      <section id="programs" className="bg-white/60 py-16 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-black text-center mb-10">
            Programs
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Pre-Primary (Nursery–UKG)", points: ["Play-based learning", "Phonics & early math", "Parent connect"], icon: BookOpen },
              { title: "Primary (I–V)", points: ["Concept mastery", "Clubs & arts", "Field trips"], icon: FlaskRound },
              { title: "Middle & High (VI–XII)", points: ["Exam excellence", "Career & NEET/JEE prep", "Sports & leadership"], icon: Palette },
            ].map((p, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <Card className="h-full border-amber-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3"><p.icon className="h-5 w-5 text-amber-700" />{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {p.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-amber-600" />
                        <span className="text-zinc-700">{pt}</span>
                      </div>
                    ))}
                    <Button variant="outline" className="mt-4 border-amber-300 hover:bg-amber-50">Know more</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section id="facilities" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-black text-center mb-10">Facilities</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Smart Classrooms", icon: Sparkles, desc: "Interactive panels, fast Wi‑Fi, AC labs." },
              { title: "Sports", icon: Mountain, desc: "Cricket, football, kabaddi, yoga, athletics." },
              { title: "Cafeteria", icon: Star, desc: "Hygienic, veg options, fresh snacks." },
              { title: "Health & Safety", icon: ShieldCheck, desc: "Infirmary, counsellor, drills." },
            ].map((f, i) => (
              <Card key={i} className="border-amber-200 bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><f.icon className="h-5 w-5 text-amber-700" />{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-700">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 bg-white/70 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-black text-center mb-10">Upcoming Events</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <Card key={i} className="border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg"><CalendarDays className="h-5 w-5 text-amber-700" /> Sep {10+i}, 2025</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-semibold">MC Learning Fest {i}</p>
                  <p className="text-zinc-700">Workshops, exhibitions, and student performances. Parents welcome.</p>
                  <Button variant="outline" className="border-amber-300 hover:bg-amber-50">Register</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl p-8 bg-gradient-to-br from-amber-200 to-yellow-100 border border-amber-300 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-black mb-4">Admissions 2025–26</h3>
              <p className="text-zinc-700 mb-6">Fill this quick form. Our team will call you within 24 hours.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Input placeholder="Parent name" className="bg-white/80" />
                <Input placeholder="Phone number" className="bg-white/80" />
                <Input placeholder="Child name" className="bg-white/80" />
                <Input placeholder="Class seeking (e.g., Grade 5)" className="bg-white/80" />
                <Textarea placeholder="Message / Queries" className="col-span-full bg-white/80" rows={4} />
                <Button className="bg-amber-600 hover:bg-amber-700 text-white col-span-full">Request a Call Back</Button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { t: "Transparent Fee Structure", d: "Clear breakdown with term-wise schedule.", icon: ShieldCheck },
                { t: "Scholarships & Aids", d: "Merit + need based support available.", icon: Award },
                { t: "Campus Visit", d: "Book a guided tour on weekdays.", icon: MapPin },
              ].map((item, i) => (
                <Card key={i} className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3"><item.icon className="h-5 w-5 text-amber-700" />{item.t}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-700">{item.d}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-black text-center mb-10">Parent Voices</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Teachers are caring and committed.", "Campus is safe and vibrant.", "My child enjoys learning every day!"].map((q, i) => (
              <Card key={i} className="border-amber-200 bg-white/80">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-800">“{q}”</p>
                  <p className="text-xs text-zinc-600 mt-3">— Parent, Grade {i + 2}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 grid place-items-center">
                <span className="font-black text-white">MC</span>
              </div>
              <p className="font-extrabold text-lg">MC School</p>
            </div>
            <p className="text-sm text-amber-100">A joyful place to learn, grow, and lead with integrity.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Quick Links</p>
            <ul className="space-y-2 text-sm text-amber-100">
              <li><a href="#programs" className="hover:text-white">Programs</a></li>
              <li><a href="#facilities" className="hover:text-white">Facilities</a></li>
              <li><a href="#events" className="hover:text-white">Events</a></li>
              <li><a href="#admissions" className="hover:text-white">Admissions</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Contact</p>
            <ul className="space-y-2 text-sm text-amber-100">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Nagarbhavi, Bengaluru</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@mcschool.in</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Newsletter</p>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="bg-amber-800/60 border-amber-700 placeholder:text-amber-200" />
              <Button className="bg-yellow-400 text-amber-900 hover:bg-yellow-300">Join</Button>
            </div>
            <p className="text-xs mt-2 text-amber-200">By subscribing you agree to our policy.</p>
          </div>
        </div>
        <div className="border-t border-amber-800 py-4 text-center text-xs text-amber-200">© {new Date().getFullYear()} MC School. All rights reserved.</div>
      </footer>
    </div>
  );
}

/*
USAGE NOTES (Next.js + Tailwind + shadcn/ui):
1) Install deps:  
   npm i framer-motion lucide-react  
   # shadcn/ui setup as per docs, then ensure Button/Card/Input/Badge/Textarea exist.
2) Tailwind: enable classes in globals.css and config.  
3) Drop this component anywhere, e.g. app/page.tsx and export default it.
4) Replace placeholder content, hook up forms to your backend (e.g., Supabase/Email).
5) Color palette: amber-50/100/200/300/500/600/700 + yellow-50/100/300 for accents.
*/
