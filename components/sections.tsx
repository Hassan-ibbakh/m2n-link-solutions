import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { ArrowLink, Reveal } from "@/components/site-shell";
import { projects, services, testimonials } from "@/lib/content";

export function SectionIntro({ eyebrow, title, copy, dark = false }: { eyebrow: string; title: string; copy?: string; dark?: boolean }) {
  return <Reveal><div className={`grid gap-5 lg:grid-cols-[.85fr_1.5fr] lg:items-end ${dark ? "text-paper" : ""}`}><p className={`label ${dark ? "text-coral" : "text-coral"}`}>{eyebrow}</p><div><h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>{copy && <p className={`mt-6 max-w-xl text-lg leading-relaxed ${dark ? "text-paper/60" : "text-ink/60"}`}>{copy}</p>}</div></div></Reveal>;
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">{items.map((service, index) => { const Icon = service.icon; return <Reveal key={service.title} className="h-full" delay={index * 0.07}><article className="service-card group flex h-full min-h-70 flex-col bg-paper p-6 transition-colors hover:bg-mint"><div className="flex items-start justify-between"><span className="text-sm text-ink/40">{service.eyebrow}</span><Icon className="text-coral transition-transform group-hover:rotate-6" size={27} strokeWidth={1.5} /></div><h3 className="mt-auto font-display text-2xl leading-tight">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-ink/60">{service.description}</p><div className="mt-5 flex items-center gap-1 text-sm font-semibold">Explore <ArrowUpRight size={15} /></div></article></Reveal>; })}</div>;
}

export function MetricsStrip() {
  return <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper/15 bg-paper/15 sm:grid-cols-3"><div className="bg-ink p-6"><p className="font-display text-4xl text-coral">10+</p><p className="mt-2 text-sm text-paper/55">years making complex products useful</p></div><div className="bg-ink p-6"><p className="font-display text-4xl text-coral">3.2M</p><p className="mt-2 text-sm text-paper/55">records unified in one data platform</p></div><div className="bg-ink p-6"><p className="font-display text-4xl text-coral">42%</p><p className="mt-2 text-sm text-paper/55">faster response cycles for operations teams</p></div></div>;
}

export function ProjectsGrid() {
  return <div className="mt-14 grid gap-6 lg:grid-cols-3">{projects.map((project, index) => <Reveal key={project.title} delay={index * 0.1}><Link href="/projects" className="group block"><div className={`project-visual ${project.accent}`}><span className="label absolute left-5 top-5 text-ink/50">{project.category}</span><div className="project-lines" /><span className="absolute bottom-5 left-5 font-display text-3xl">{project.title}</span><ArrowUpRight className="absolute bottom-5 right-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><div className="flex items-start justify-between gap-4 pt-5"><div><h3 className="font-display text-2xl">{project.title}</h3><p className="mt-2 text-sm leading-relaxed text-ink/60">{project.description}</p></div><span className="shrink-0 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-paper">{project.result}</span></div></Link></Reveal>)}</div>;
}

export function Process() {
  const steps = [["01", "Listen closely", "We start with the real context: your people, constraints, customers, and the change you want to create."], ["02", "Find the signal", "We make the opportunity concrete, test the riskiest assumptions, and shape an opinionated path forward."], ["03", "Build with intent", "Small senior teams turn the strategy into a product that is useful now and ready for what comes next."], ["04", "Keep improving", "We measure what matters, learn from use, and stay close enough to make the next version better."]];
  return <div className="mt-14 grid border-t border-ink/20 md:grid-cols-4">{steps.map(([number, title, copy], index) => <Reveal key={number} delay={index * 0.08}><div className="border-b border-ink/20 py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"><span className="text-sm text-coral">{number}</span><h3 className="mt-10 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink/60">{copy}</p></div></Reveal>)}</div>;
}

export function TrustSection() {
  return <section className="overflow-hidden bg-ink py-24 text-paper sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionIntro dark eyebrow="A considered partnership" title="Technology is the tool. Better work is the point." copy="We bring senior product thinking, engineering craft, and a clear-eyed view of AI to every engagement." /><MetricsStrip /><div className="mt-16 grid gap-8 lg:grid-cols-2">{testimonials.map((item) => <Reveal key={item.name}><blockquote className="border-t border-paper/20 pt-6"><Sparkles className="text-coral" size={20} /><p className="mt-8 max-w-xl font-display text-2xl leading-snug sm:text-3xl">“{item.quote}”</p><footer className="mt-8 text-sm text-paper/50"><strong className="text-paper">{item.name}</strong> · {item.role}</footer></blockquote></Reveal>)}</div></div></section>;
}

export function Callout() {
  return <section className="bg-coral px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"><Reveal><p className="label text-ink/60">Your next chapter</p><h2 className="mt-5 max-w-2xl font-display text-5xl leading-[.95] tracking-tight sm:text-7xl">Make the complicated useful.</h2></Reveal><Reveal delay={0.15}><ArrowLink href="/contact">Start a conversation</ArrowLink></Reveal></div></section>;
}

export function ValueList() {
  return <div className="grid gap-4 sm:grid-cols-2">{["Senior thinking, close to the work", "Useful AI over impressive AI", "Clarity in every decision", "Built to last beyond launch"].map((item) => <div key={item} className="flex items-center gap-3 border-t border-ink/15 py-4"><Check size={18} className="text-coral" /><span className="font-medium">{item}</span></div>)}</div>;
}
