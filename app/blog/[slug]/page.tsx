import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Callout } from "@/components/sections";
import { Footer, Header, Reveal } from "@/components/site-shell";
import { blogPosts } from "@/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return { title: post?.title ?? "Article", description: post?.excerpt ?? "Notes de M2N Link Solutions." };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return <><Header /><main className="px-5 pb-32 pt-48 text-center sm:px-8"><h1 className="font-display text-5xl">Article not found</h1><Link href="/blog" className="button button-dark mt-8">Back to blog</Link></main><Footer /></>;

  return <><Header /><main><article><header className="px-5 pb-20 pt-40 sm:px-8 sm:pb-28 sm:pt-52"><div className="mx-auto max-w-4xl"><Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-ink/55 hover:text-coral"><ArrowLeft size={16} /> Back to journal</Link><div className={`mt-12 flex min-h-64 items-end rounded-3xl p-7 sm:min-h-96 sm:p-10 ${post.accent}`}><p className="label text-ink/55">{post.category}</p></div><div className="mt-12"><p className="label text-coral">{post.date} · {post.readTime}</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-[.98] tracking-tight sm:text-7xl">{post.title}</h1><p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/60">{post.intro}</p></div></div></header><div className="border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-[.35fr_1fr]"><aside><p className="label text-coral">In this note</p><div className="mt-5 grid gap-3 text-sm text-ink/55">{post.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`} className="hover:text-coral">0{index + 1} · {section.heading}</a>)}</div></aside><div className="grid gap-14">{post.sections.map((section, index) => <Reveal key={section.heading}><section id={`section-${index + 1}`} className="scroll-mt-28 border-t border-ink/15 pt-6"><p className="text-sm text-coral">0{index + 1}</p><h2 className="mt-5 font-display text-3xl sm:text-4xl">{section.heading}</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">{section.body}</p></section></Reveal>)}<Link href="/contact" className="group inline-flex items-center gap-2 font-semibold">Talk to our team <span className="grid h-8 w-8 place-items-center rounded-full border border-current transition-transform group-hover:translate-x-1"><ArrowUpRight size={15} /></span></Link></div></div></div></article></main><Callout /><Footer /></>;
}
