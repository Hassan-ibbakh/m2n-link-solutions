import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Footer, Header, Reveal } from "@/components/site-shell";
import { site } from "@/lib/content";

export const metadata = { title: "Contact", description: "Start a conversation with Nexa Intelligence about your next AI or digital product." };

export default function ContactPage() { return <><Header /><main><section className="bg-coral px-5 pb-24 pt-40 sm:px-8 sm:pb-32 sm:pt-52"><div className="mx-auto max-w-7xl"><p className="label text-ink/60">Start a project</p><h1 className="mt-6 max-w-5xl font-display text-6xl leading-[.92] tracking-tight sm:text-8xl">Tell us what you are trying to make possible.</h1></div></section><section className="px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.7fr_1.3fr]"><Reveal><p className="max-w-sm text-xl leading-relaxed">Bring us the hard question, the half-formed idea, or the thing that is already moving and needs a better system around it.</p><div className="mt-12 grid gap-5 text-sm"><a className="flex items-center gap-3 text-ink/60 hover:text-coral" href={`mailto:${site.email}`}><Mail size={18} />{site.email}</a><p className="flex items-center gap-3 text-ink/60"><MapPin size={18} />{site.location}</p></div></Reveal><Reveal><ContactForm /></Reveal></div></section></main><Footer /></> }
