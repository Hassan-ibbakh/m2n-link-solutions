import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Eye,
  Globe2,
  Layers3,
  Smartphone,
  Workflow,
} from "lucide-react";

export const site = {
  name: "M2N Link Solutions",
  shortName: "M2N",
  description:
    "M2N Link Solutions develops intelligent web and mobile applications, AI systems, automation, and reliable digital products for ambitious organizations.",
  email: "contact@m2nlinksolutions.ma",
  secondaryEmail: "alaminabil46@gmail.com",
  phone: "+212 6 66 83 89 76",
  location: "Hassan, Rabat - Maroc",
  address: "El Borj Domiciliation, Immeuble 7, rue Moulay Rachid, Appartement 10, 4e etage, Hassan, Rabat - Maroc",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Rue+Moulay+Rachid+Hassan+Rabat+Maroc",
};

export const services: Array<{
  title: string;
  eyebrow: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
}> = [
  { title: "Custom Digital Solutions", eyebrow: "01", description: "A senior technical partner for the opportunities that do not fit a template.", capabilities: ["Discovery sprints", "Modernization", "Technical strategy"], icon: Layers3 },
  { title: "Mobile App Development", eyebrow: "02", description: "Reliable iOS and Android experiences that put useful products in people’s hands wherever work happens.", capabilities: ["React Native apps", "iOS & Android", "Mobile UX systems"], icon: Smartphone },
  { title: "Web Application Development", eyebrow: "03", description: "Fast, accessible web platforms and SaaS products that make complex workflows feel simple.", capabilities: ["Next.js & React", "Full-stack platforms", "APIs & integrations"], icon: Globe2 },
  { title: "Computer Vision", eyebrow: "04", description: "Make images and video useful with robust visual intelligence for real environments.", capabilities: ["Quality inspection", "Object detection", "Document intelligence"], icon: Eye },
  { title: "Data & Analytics", eyebrow: "05", description: "A clearer view of performance with data foundations built to support action.", capabilities: ["Data platforms", "BI & dashboards", "Real-time analytics"], icon: ChartNoAxesCombined },
  { title: "Software Development", eyebrow: "06", description: "Reliable digital products engineered for speed, clarity, and long-term change.", capabilities: ["Product engineering", "Cloud platforms", "API design"], icon: Code2 },
  { title: "AI Agents & Automation", eyebrow: "07", description: "Connected workflows that move work forward across the tools your teams already use.", capabilities: ["Agent orchestration", "Process automation", "Human-in-the-loop"], icon: Workflow },
  { title: "Generative AI & LLMs", eyebrow: "08", description: "Useful, grounded AI experiences that help people work faster without losing control.", capabilities: ["RAG architectures", "LLM evaluation", "Private copilots"], icon: Bot },
  { title: "AI & Machine Learning", eyebrow: "09", description: "Practical intelligence that turns complex data into better decisions and measurable advantage.", capabilities: ["Predictive modeling", "Recommendation systems", "MLOps & monitoring"], icon: BrainCircuit },
];

export const projects = [
  { title: "SignalDesk", category: "AI operations", description: "A decision workspace that gives a global operations team one trusted view of risk, demand, and next actions.", problem: "Critical signals lived across disconnected systems, leaving teams to reconcile spreadsheets before they could act.", solution: "We designed a live intelligence layer with an explainable forecast, role-specific workflows, and a natural-language interface.", technologies: ["Next.js", "Python", "PostgreSQL", "OpenAI"], result: "42% faster response cycles", accent: "coral" },
  { title: "Lattice Health", category: "Data platform", description: "A privacy-conscious analytics platform that helps care teams spot patterns earlier and coordinate better.", problem: "A growing network had valuable data, but no shared foundation for measuring outcomes across locations.", solution: "We unified fragmented sources into a governed data model and shipped a calm, actionable experience for clinicians.", technologies: ["TypeScript", "Snowflake", "dbt", "Looker"], result: "3.2M records unified", accent: "mint" },
  { title: "Forge Vision", category: "Computer vision", description: "Visual quality intelligence for a manufacturer moving from sample checks to continuous assurance.", problem: "Manual inspection was slow, inconsistent, and impossible to scale with production volume.", solution: "A vision system learned the line, surfaced anomalies, and kept operators in control of every decision.", technologies: ["Python", "PyTorch", "Edge AI", "React"], result: "28% less rework", accent: "blue" },
];

export const testimonials = [
  { quote: "M2N brought the rare combination of strategic clarity and engineering depth. We went from a fuzzy opportunity to a product our teams use every day.", name: "Maya Chen", role: "VP Product, Lattice Health" },
  { quote: "They asked the hard questions early, then built with real momentum. The result feels considered, resilient, and genuinely useful.", name: "Jon Bell", role: "COO, SignalDesk" },
];

export const blogPosts = [
  { slug: "shipping-ai-that-people-trust", title: "Shipping AI that people trust", excerpt: "Trust is an interaction design problem as much as it is a model problem.", date: "Sep 04, 2025", readTime: "6 min read", category: "AI systems", accent: "bg-coral", intro: "The most useful AI products make their reasoning visible, their limits clear, and their users more capable.", sections: [{ heading: "Trust is designed in the details", body: "People do not need a model to sound certain. They need to understand what it knows, what it is guessing, and what they can do next. That means clear sources, useful confidence signals, and an easy path to correct the system." }, { heading: "Start with the decision", body: "Before choosing a model, map the moment where a person has to make a decision. What context is missing? What would make the decision faster without making it careless? The answer usually points to a smaller, more valuable first release." }, { heading: "Measure confidence, not just accuracy", body: "A good evaluation looks beyond benchmark scores. We test whether people can spot uncertainty, recover from a wrong answer, and complete the work with less cognitive load. That is the difference between an impressive demo and a dependable product." }] },
  { slug: "the-case-for-small-automation", title: "The case for small automation", excerpt: "The best automation often starts with one sharp, observable workflow.", date: "Aug 19, 2025", readTime: "4 min read", category: "Automation", accent: "bg-mint", intro: "Automation works best when it removes friction from a workflow people already understand.", sections: [{ heading: "Find the repeated handoff", body: "Look for the moment where information is copied, reformatted, or checked by three different people. That handoff is often the clearest place to start because the inputs, outputs, and cost are already visible." }, { heading: "Keep a human in the loop", body: "The first version should make a person faster, not make a person disappear. A review step creates a feedback loop, protects edge cases, and gives the team confidence to expand the system over time." }, { heading: "Make the result observable", body: "Every automated workflow needs a clear success signal. Track completion time, exception rate, and the reasons people override the system. Small automation becomes strategic when it teaches you where the next opportunity lives." }] },
  { slug: "data-products-need-a-point-of-view", title: "Data products need a point of view", excerpt: "A dashboard is not a strategy. Here is how we design analytics for decisions.", date: "Jul 28, 2025", readTime: "5 min read", category: "Data", accent: "bg-blue", intro: "A data product earns its place when it helps someone make a better decision at the right moment.", sections: [{ heading: "Begin with the decision", body: "The question is not which charts can fit on a page. It is which decision the team is trying to make, how often it happens, and what evidence would change the outcome." }, { heading: "Reduce the distance to action", body: "Good analytics combines context with a clear next step. Surface the signal, explain the movement, and connect the insight to the workflow where someone can act on it." }, { heading: "Design for shared understanding", body: "Definitions matter. A trusted metric needs an owner, a refresh expectation, and language that makes sense beyond the data team. Consistency is a product feature." }] },
  { slug: "rag-is-a-product-pattern", title: "RAG is a product pattern, not a magic trick", excerpt: "Retrieval-augmented generation becomes valuable when it is shaped around a real knowledge workflow.", date: "Jun 16, 2025", readTime: "7 min read", category: "Generative AI", accent: "bg-blue", intro: "Retrieval-augmented generation is most useful when it helps people find and apply trusted knowledge inside the flow of work.", sections: [{ heading: "The index is only the beginning", body: "A search layer can retrieve relevant documents, but a product still needs permissions, source quality, freshness rules, and a way to show where an answer came from." }, { heading: "Shape answers around action", body: "The right response is rarely a paragraph alone. It might be a comparison, a draft, a checklist, or a suggested next step. Product design turns retrieved context into useful work." }, { heading: "Evaluate the whole experience", body: "Test retrieval quality, answer quality, and task completion together. A technically correct answer that arrives too slowly or cannot be verified is still a poor user experience." }] },
  { slug: "modernizing-without-starting-over", title: "Modernizing without starting over", excerpt: "A thoughtful modernization plan can create momentum without putting the business on pause.", date: "May 08, 2025", readTime: "5 min read", category: "Engineering", accent: "bg-mint", intro: "Modernization is not a rewrite contest. It is the practice of creating a better path from today’s system to tomorrow’s capability.", sections: [{ heading: "Map the pressure points", body: "Start with the parts of the system that slow down customers, operators, or engineers. A focused map creates a more useful plan than a technology wish list." }, { heading: "Create a stable boundary", body: "A well-designed API, event stream, or façade can let new capabilities grow around a legacy core. The boundary becomes a place to learn before making larger changes." }, { heading: "Ship in visible increments", body: "Modernization earns support when every phase improves something measurable. Make progress visible through faster releases, fewer incidents, or a better customer journey." }] },
  { slug: "what-makes-an-ai-agent-useful", title: "What makes an AI agent useful", excerpt: "The best agents are not autonomous for its own sake; they are accountable, bounded, and connected to real work.", date: "Apr 22, 2025", readTime: "6 min read", category: "AI agents", accent: "bg-coral", intro: "An AI agent becomes useful when it can take the right action, explain what happened, and know when to ask for help.", sections: [{ heading: "Give it a narrow job", body: "A focused agent can be evaluated, monitored, and improved. Start with a workflow that has clear inputs, a known toolset, and a meaningful outcome." }, { heading: "Design the handoff", body: "The most important agent interaction may be the moment it pauses. Make the proposed action easy to review, the uncertainty visible, and the approval reversible." }, { heading: "Build the learning loop", body: "Log tool calls, exceptions, corrections, and outcomes. The system gets better when the team can see not only what it did, but why it struggled." }] },
];
