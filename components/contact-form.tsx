"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";

const initialState = { success: false, error: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);
  if (state.success) return <div className="rounded-2xl bg-mint p-8"><p className="label text-coral">Message received</p><h2 className="mt-4 font-display text-3xl">We will be in touch soon.</h2><p className="mt-3 text-ink/60">Thanks for sharing the context. We will review it and get back to you shortly.</p></div>;
  return <form action={action} className="grid gap-5" aria-label="Project inquiry form"><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" name="name" required /><Field label="Email" name="email" type="email" required /></div><div className="grid gap-5 sm:grid-cols-2"><Field label="Company" name="company" required /><Field label="Phone" name="phone" type="tel" /></div><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-medium">Project type<select name="projectType" required className="form-control"><option value="">Choose one</option><option>AI & machine learning</option><option>Generative AI & LLMs</option><option>Software development</option><option>Data & analytics</option><option>Digital product</option><option>Something else</option></select></label><label className="grid gap-2 text-sm font-medium">Budget range<select name="budget" className="form-control"><option value="">Prefer not to say</option><option>Under $25k</option><option>$25k–$75k</option><option>$75k–$150k</option><option>$150k+</option></select></label></div><label className="grid gap-2 text-sm font-medium">Tell us about the work<textarea name="message" required minLength={20} rows={6} className="form-control resize-y" placeholder="What are you trying to make possible?" /></label>{state.error && <p className="text-sm text-red-700" role="alert">{state.error}</p>}<button disabled={pending} className="button button-dark w-fit disabled:cursor-wait disabled:opacity-60" type="submit">{pending ? "Sending..." : "Send inquiry"}</button><p className="text-xs text-ink/45">By submitting, you agree to be contacted about your inquiry.</p></form>;
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) { return <label className="grid gap-2 text-sm font-medium">{label}<input name={name} type={type} required={required} className="form-control" /></label>; }
