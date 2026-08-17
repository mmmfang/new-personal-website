export const siteContent = {
  meta: { title: 'Mae Fang — Web Strategist focused on AI & AEO', description: 'Website strategy, SEO and AEO, UX, optimization, implementation, and AI-powered digital products.' },
  navigation: [
    { label: 'Projects', href: '#projects' }, { label: 'AI Search Lab', href: '#ai-search-lab' },
    { label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' },
  ],
  hero: { eyebrow: 'Strategy · Experience · Experimentation', name: 'Mae F.', headline: 'Web Strategist focused on AI & AEO', introduction: 'I lead and improve websites across strategy, analytics, UX, optimization, and implementation — while building hands-on expertise in AI search and AEO.' },
  strengths: [
    { title: 'Website Strategy', description: 'Roadmaps that connect audience needs, business goals, content, and execution.' },
    { title: 'SEO / AEO', description: 'Visibility strategies designed for search engines and AI answer experiences.' },
    { title: 'UX & Optimization', description: 'Evidence-led improvements that make complex journeys feel simple.' },
    { title: 'AI Product Building', description: 'Useful experiments that turn emerging technology into practical tools.' },
  ],
  featuredProject: { eyebrow: 'Flagship build', title: "Sew What’s Next", subtitle: 'A sewing decision-making companion built around what you already own', description: 'Sew What’s Next is an independent personal project I built to solve a recurring problem in my own sewing: deciding what to make with the patterns and fabric I already had.', userStory: 'Rather than simply cataloging a stash, it connects fabric quantities with compatible patterns and helps turn outside inspiration into a realistic project plan. I used it myself after finding an overall dress online—working through whether I had enough fabric, which patterns could create a similar result, and what I could make without starting from scratch.', features: ['Match available fabric with patterns you already own', 'Turn online inspiration into feasible project options', 'Move from “What could I make?” to a confident next project'], link: 'https://sew-whats-next.lovable.app/demo', image: '/images/sew-whats-next.png' },
  project: { eyebrow: 'Supporting build', title: 'One-Tap Transit', description: 'An accessible one-tap transit PWA designed to simplify recurring public transportation trips for a senior rider.', note: 'Private project — details are limited to protect the person it was built for.', image: '/images/transit-app-pwa.png' },
  focusAreas: [
    { title: 'Web Strategy & Roadmaps', description: 'Connecting audience needs, business goals, content strategy, governance, and technical priorities into actionable cross-functional website roadmaps.' },
    { title: 'UX & Information Architecture', description: 'Structuring content, navigation, and user journeys so complex websites feel clear, accessible, and easy to use.' },
    { title: 'Analytics, Experimentation & AEO', description: 'Using web analytics, search data, and AI visibility signals to establish baselines, form hypotheses, run structured experiments, and prioritize improvements.' },
    { title: 'Web Development & Technical Implementation', description: 'Taking websites from concept to code through hands-on front-end development, CMS implementation, integrations, technical SEO, QA and launch.' },
  ],
  credential: { title: 'Generative AI for Marketing', issuer: 'American Marketing Association', description: 'Professional certificate focused on applying generative AI thoughtfully across modern marketing work.', image: '/images/ama-genai-certificate.jpeg', link: 'https://www.linkedin.com/learning/certificates/5e3b7d6478be32f82a70dec143a4d39054cc85f62c31d0917000b6057eb4221a/' },
  aeoExperiment: { title: "Sew What’s Next AEO Experiment", subtitle: "A public AI search visibility experiment", description: "A public experiment tracking whether a new sewing app can become discoverable in AI-generated answers for sewing project planning, fabric stash organization, and pattern-matching queries.", baseline: { date: "August 15, 2026", model: "ChatGPT", promptSet: "15 frozen prompts", mentions: "0/15", visibilityRate: "0%", citationRate: "0%" }, process: "The goal is not only to improve the app’s visibility, but to document a repeatable AEO process: establish a baseline, analyze competing answers, make targeted content and technical changes, rerun the test, and publish what changed.", url: "/ai-search-lab/sew-whats-next-aeo-experiment" },
  contact: { title: 'Have a thoughtful digital problem to solve?', description: 'I’m always interested in good questions about websites, AI products, search, and the space where they meet.', linkedin: 'https://www.linkedin.com/in/maefang' },
} as const;
