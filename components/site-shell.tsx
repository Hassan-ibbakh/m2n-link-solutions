"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

const nav = ["About", "Services", "Projects", "Blog", "Contact"];

function subscribeToTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getThemeSnapshot() {
  return document.documentElement.dataset.theme ?? "light";
}

function getServerThemeSnapshot() {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
  const dark = theme === "dark";

  function toggleTheme() {
    const nextTheme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  return <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={dark ? "Activer le thème clair" : "Activer le thème sombre"} title={dark ? "Thème clair" : "Thème sombre"}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>;
}

export function Logo() {
  return <Link href="/" className="logo-link" aria-label={`${site.name} home`}><span className="logo-image-frame"><Image src="/logo.png" alt={site.name} width={240} height={82} className="logo-image" /></span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8"><div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink/10 bg-paper/90 px-4 py-2.5 shadow-sm backdrop-blur-md sm:px-6"><Logo /><nav className="hidden items-center gap-7 md:flex">{nav.map((item) => <Link key={item} href={`/${item.toLowerCase()}`} className="nav-link">{item}</Link>)}<ThemeToggle /><Link href="/contact" className="button button-dark py-2.5">Start a project <ArrowUpRight size={15} /></Link></nav><button className="icon-button md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>{open && <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-ink/10 bg-paper p-5 shadow-lg md:hidden"><nav className="grid gap-1">{nav.map((item) => <Link onClick={() => setOpen(false)} key={item} href={`/${item.toLowerCase()}`} className="rounded-xl px-3 py-3 font-medium hover:bg-ink/5">{item}</Link>)}<div className="mt-3 flex items-center justify-between border-t border-ink/10 pt-4"><span className="text-sm text-ink/60">Appearance</span><ThemeToggle /></div><Link onClick={() => setOpen(false)} href="/contact" className="button button-coral mt-3">Start a project <ArrowUpRight size={15} /></Link></nav></div>}</header>;
}

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? undefined : { opacity: 0, y: 24 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: reduce ? 0 : delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function HeroEntrance({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? undefined : "hidden"} animate={reduce ? undefined : "visible"} variants={{ hidden: {}, visible: { transition: { delayChildren: 0.15, staggerChildren: 0.12 } } }}>{children}</motion.div>;
}

export function HeroItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} variants={{ hidden: { opacity: 0, y: reduce ? 0 : 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } }}>{children}</motion.div>;
}

export function ArrowLink({ href, children, inverse = false }: { href: string; children: React.ReactNode; inverse?: boolean }) {
  return <Link href={href} className={`group inline-flex items-center gap-2 font-semibold ${inverse ? "text-paper" : "text-ink"}`}>{children}<span className="grid h-8 w-8 place-items-center rounded-full border border-current transition-transform group-hover:translate-x-1"><ArrowUpRight size={15} /></span></Link>;
}

export function Footer() {
  return <footer className="border-t border-ink/10 bg-ink text-paper"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-24"><div><Logo /><p className="mt-8 max-w-sm text-paper/60">M2N Link Solutions accompagne les organisations dans la creation de produits web, mobiles et intelligents.</p></div><div><p className="label text-paper/40">Explorer</p><div className="mt-4 grid gap-3">{nav.map((item) => <Link key={item} href={`/${item.toLowerCase()}`} className="text-paper/70 hover:text-coral">{item}</Link>)}</div></div><div><p className="label text-paper/40">Nous contacter</p><a className="mt-4 block text-paper/70 hover:text-coral" href={`mailto:${site.email}`}>{site.email}</a><a className="mt-2 block text-paper/70 hover:text-coral" href={`mailto:${site.secondaryEmail}`}>{site.secondaryEmail}</a><a className="mt-2 block text-paper/70 hover:text-coral" href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a><p className="mt-3 text-sm text-paper/50">{site.location}</p></div></div><div className="border-t border-paper/10 px-5 py-6 text-sm text-paper/40 sm:px-8"><div className="mx-auto flex max-w-7xl justify-between"><span>© {new Date().getFullYear()} {site.name}</span><span>Solutions digitales et intelligentes.</span></div></div></footer>;
}
