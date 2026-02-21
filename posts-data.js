const CURATED_POSTS = [
  {
    slug: "cloudflare-code-mode-mcp",
    title: "Code Mode: give agents an entire API in 1,000 tokens",
    date: "February 20, 2026",
    readTime: "6 min read",
    category: "Cloudflare • AI/Developer Tools",
    source: "Cloudflare Blog",
    sourceUrl: "https://blog.cloudflare.com/code-mode-mcp/",
    summary:
      "Cloudflare shows how Code Mode can expose a huge API surface to AI agents while using dramatically fewer context tokens.",
    takeaway:
      "This is useful if you build agent tools and want better performance with lower token cost.",
    action:
      "Study the two-tool pattern (search + execute) and test whether your own agent tooling can adopt a similar API access model.",
  },
  {
    slug: "cloudflare-ecdysis-rust-restarts",
    title: "Shedding old code with ecdysis: graceful restarts for Rust services at Cloudflare",
    date: "February 13, 2026",
    readTime: "7 min read",
    category: "Cloudflare • Reliability",
    source: "Cloudflare Blog",
    sourceUrl: "https://blog.cloudflare.com/ecdysis-rust-graceful-restarts/",
    summary:
      "Cloudflare open-sourced a Rust library for zero-downtime upgrades after years of production use.",
    takeaway:
      "Great reference for teams running high-availability services that need safer deployments.",
    action:
      "Review your restart strategy and compare it with graceful handoff patterns from this post.",
  },
  {
    slug: "cloudflare-markdown-for-agents",
    title: "Introducing Markdown for Agents",
    date: "February 12, 2026",
    readTime: "5 min read",
    category: "Cloudflare • AI/Web",
    source: "Cloudflare Blog",
    sourceUrl: "https://blog.cloudflare.com/markdown-for-agents/",
    summary:
      "Cloudflare introduces an approach to serve web content in agent-friendly markdown format.",
    takeaway:
      "Useful for publishers and product teams optimizing content discoverability for AI tools.",
    action:
      "Audit your docs pages and test whether machine-readable formatting improves agent output quality.",
  },
  {
    slug: "cloudflare-ddos-report-q4-2025",
    title: "2025 Q4 DDoS threat report: A record-setting 31.4 Tbps attack",
    date: "February 5, 2026",
    readTime: "6 min read",
    category: "Cloudflare • Security",
    source: "Cloudflare Blog",
    sourceUrl: "https://blog.cloudflare.com/ddos-threat-report-2025-q4/",
    summary:
      "Cloudflare reports sharp growth in large-scale DDoS attacks, including record network-layer events.",
    takeaway:
      "Helps teams understand current attack intensity and prioritize resilience investments.",
    action:
      "Re-check rate limits, upstream failover, and incident drills against the attack trends in the report.",
  },
  {
    slug: "cloudflare-r2-local-uploads",
    title: "Improve global upload performance with R2 Local Uploads",
    date: "February 3, 2026",
    readTime: "5 min read",
    category: "Cloudflare • Storage/Performance",
    source: "Cloudflare Blog",
    sourceUrl: "https://blog.cloudflare.com/r2-local-uploads/",
    summary:
      "R2 Local Uploads reduces upload latency by writing near users before async replication.",
    takeaway:
      "Practical for teams serving global users where upload speed affects product UX directly.",
    action:
      "Measure current upload latency by region and evaluate edge-local ingest options.",
  },
  {
    slug: "cloudflare-vertical-microfrontends",
    title: "Building vertical microfrontends on Cloudflare’s platform",
    date: "January 30, 2026",
    readTime: "7 min read",
    category: "Cloudflare • Frontend Architecture",
    source: "Cloudflare Blog",
    sourceUrl: "https://blog.cloudflare.com/vertical-microfrontends/",
    summary:
      "Explains how to compose multiple frontend services under one domain using service bindings.",
    takeaway:
      "Good blueprint for scaling large UI teams without monolith bottlenecks.",
    action:
      "Map your current frontend ownership boundaries and identify where path-based decomposition is viable.",
  },
  {
    slug: "cloudflare-moltworker-agent",
    title: "Introducing Moltworker: a self-hosted personal AI agent",
    date: "January 29, 2026",
    readTime: "6 min read",
    category: "Cloudflare • Agents",
    source: "Cloudflare Blog",
    sourceUrl: "https://blog.cloudflare.com/moltworker-self-hosted-ai-agent/",
    summary:
      "Shows a self-hosted agent setup built on Cloudflare’s developer platform.",
    takeaway:
      "Useful if you want more control over agent runtime and privacy boundaries.",
    action:
      "Prototype one internal task with a self-hosted agent before wider rollout.",
  },
  {
    slug: "cloudflare-post-quantum-matrix",
    title: "Building a serverless, post-quantum Matrix homeserver",
    date: "January 27, 2026",
    readTime: "8 min read",
    category: "Cloudflare • Security/Infrastructure",
    source: "Cloudflare Blog",
    sourceUrl: "https://blog.cloudflare.com/serverless-matrix-homeserver-workers/",
    summary:
      "A proof-of-concept encrypted messaging architecture with post-quantum cryptography at the edge.",
    takeaway:
      "Strong technical reference for future-ready secure communication systems.",
    action:
      "Track your crypto-dependency inventory and identify components that need post-quantum migration planning.",
  },
  {
    slug: "cloudflare-internet-disruptions-q4-2025",
    title: "Cable cuts, storms, and DNS: a look at Internet disruptions in Q4 2025",
    date: "January 26, 2026",
    readTime: "6 min read",
    category: "Cloudflare • Internet Measurement",
    source: "Cloudflare Blog",
    sourceUrl: "https://blog.cloudflare.com/q4-2025-internet-disruption-summary/",
    summary:
      "Analyzes major internet disruptions and their causes using network telemetry.",
    takeaway:
      "Helps SRE/network teams design resilience around real outage patterns.",
    action:
      "Add regional outage assumptions to your runbooks and communication plans.",
  },
  {
    slug: "cloudflare-acme-vulnerability",
    title: "How we mitigated a vulnerability in Cloudflare’s ACME validation logic",
    date: "January 19, 2026",
    readTime: "5 min read",
    category: "Cloudflare • Security Engineering",
    source: "Cloudflare Blog",
    sourceUrl: "https://blog.cloudflare.com/acme-path-vulnerability/",
    summary:
      "Cloudflare details a certificate validation vulnerability and mitigation strategy.",
    takeaway:
      "Useful postmortem-style material for improving vulnerability response discipline.",
    action:
      "Review your certificate automation threat model and add path-validation test cases.",
  },
  {
    slug: "github-copilot-cli-ascii-banner",
    title: "From pixels to characters: Engineering behind GitHub Copilot CLI’s animated ASCII banner",
    date: "January 28, 2026",
    readTime: "6 min read",
    category: "GitHub • Engineering UX",
    source: "GitHub Blog",
    sourceUrl:
      "https://github.blog/engineering/from-pixels-to-characters-the-engineering-behind-github-copilot-clis-animated-ascii-banner/",
    summary:
      "Deep dive into terminal-safe animation design with accessibility and cross-terminal constraints.",
    takeaway:
      "Practical for developer-tooling teams shipping polished CLI experiences.",
    action:
      "Use this as a reference when adding visual effects to CLI tools without harming accessibility.",
  },
  {
    slug: "github-defense-systems-lifecycle",
    title: "When protections outlive their purpose: managing defense systems at scale",
    date: "January 15, 2026",
    readTime: "6 min read",
    category: "GitHub • Platform Security",
    source: "GitHub Blog",
    sourceUrl:
      "https://github.blog/engineering/infrastructure/when-protections-outlive-their-purpose-a-lesson-on-managing-defense-systems-at-scale/",
    summary:
      "Explores cleanup of outdated mitigations and why control lifecycle management matters.",
    takeaway:
      "Great reminder that stale defenses can become operational risk.",
    action:
      "Schedule periodic reviews of all active mitigations and define deprecation criteria.",
  },
  {
    slug: "github-issues-search-rebuild",
    title: "GitHub Issues search now supports nested queries and boolean operators",
    date: "May 13, 2025",
    readTime: "7 min read",
    category: "GitHub • Search/Architecture",
    source: "GitHub Blog",
    sourceUrl:
      "https://github.blog/developer-skills/application-development/github-issues-search-now-supports-nested-queries-and-boolean-operators-heres-how-we-rebuilt-it/",
    summary:
      "Covers architecture and tradeoffs in modernizing one of GitHub’s oldest core features.",
    takeaway:
      "Useful case study for teams modernizing heavily-used legacy systems.",
    action:
      "Document migration constraints early when redesigning legacy search features.",
  },
  {
    slug: "github-platform-problems",
    title: "How GitHub engineers tackle platform problems",
    date: "June 10, 2025",
    readTime: "6 min read",
    category: "GitHub • Infrastructure",
    source: "GitHub Blog",
    sourceUrl: "https://github.blog/engineering/infrastructure/how-github-engineers-tackle-platform-problems/",
    summary:
      "Shares practical patterns for identifying, fixing, and preventing platform issues at scale.",
    takeaway:
      "Directly useful for incident-heavy teams improving reliability habits.",
    action:
      "Extract one diagnostic playbook from this article and adapt it to your incident workflow.",
  },
  {
    slug: "openai-india-initiative",
    title: "Introducing OpenAI for India",
    date: "February 18, 2026",
    readTime: "5 min read",
    category: "OpenAI • Policy/Ecosystem",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/openai-for-india/",
    summary:
      "Announces national-scale partnerships focused on AI infrastructure, skills, and enterprise adoption.",
    takeaway:
      "Relevant for readers tracking real-world AI rollout at country scale.",
    action:
      "Watch how public-private partnerships define workforce outcomes and equitable access.",
  },
  {
    slug: "openai-genai-mil",
    title: "Bringing ChatGPT to GenAI.mil",
    date: "February 9, 2026",
    readTime: "5 min read",
    category: "OpenAI • Government",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/bringing-chatgpt-to-genaimil/",
    summary:
      "OpenAI describes expanded use of ChatGPT in a large government enterprise platform.",
    takeaway:
      "Important for understanding institutional AI deployment and governance tradeoffs.",
    action:
      "Track safeguards, auditability, and policy guardrails whenever AI enters mission-critical workflows.",
  },
  {
    slug: "openai-social-science-research",
    title: "Scaling social science research",
    date: "February 13, 2026",
    readTime: "6 min read",
    category: "OpenAI • Research Tools",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/scaling-social-science-research/",
    summary:
      "Introduces GABRIEL, an open-source toolkit for turning qualitative data into measurable signals.",
    takeaway:
      "High value for researchers and nonprofits working with text-heavy social datasets.",
    action:
      "Pilot one small dataset with reproducible labeling criteria before scaling analysis.",
  },
  {
    slug: "stripe-realtime-billing-analytics",
    title: "How we built it: Real-time analytics for Stripe Billing",
    date: "September 16, 2025",
    readTime: "8 min read",
    category: "Stripe • Data Engineering",
    source: "Stripe Engineering",
    sourceUrl: "https://stripe.com/blog/how-we-built-it-real-time-analytics-for-stripe-billing",
    summary:
      "Stripe explains architecture changes that reduced lag in billing analytics from batch to near real-time.",
    takeaway:
      "Strong reference for product teams depending on low-latency metrics.",
    action:
      "Identify where your batch pipelines hurt decision speed and evaluate event-driven alternatives.",
  },
  {
    slug: "stripe-jurisdiction-resolution",
    title: "How we built it: Jurisdiction resolution for Stripe Tax",
    date: "July 10, 2025",
    readTime: "8 min read",
    category: "Stripe • Geospatial/Tax",
    source: "Stripe Engineering",
    sourceUrl: "https://stripe.com/blog/how-we-built-it-jurisdiction-resolution-for-stripe-tax",
    summary:
      "Details geospatial and systems design work behind fast, accurate tax-jurisdiction resolution.",
    takeaway:
      "Excellent case study in applying data engineering to messy real-world policy boundaries.",
    action:
      "Use this post to learn offline/online decomposition for latency-critical systems.",
  },
  {
    slug: "aws-dotnet-transfer-manager",
    title: "Introducing Multipart Download Support for AWS SDK for .NET Transfer Manager",
    date: "February 9, 2026",
    readTime: "5 min read",
    category: "AWS • Developer Tools",
    source: "AWS Developer Tools Blog",
    sourceUrl:
      "https://aws.amazon.com/blogs/developer/introducing-multipart-download-support-for-aws-sdk-for-net-transfer-manager/",
    summary:
      "AWS adds multipart download support to improve large-file transfer performance in .NET workflows.",
    takeaway:
      "Useful for teams handling large data artifacts where transfer speed affects operations.",
    action:
      "Benchmark current download throughput and test multipart behavior in staging first.",
  },
  {
    slug: "aws-cli-v1-maintenance",
    title: "CLI v1 Maintenance Mode Announcement",
    date: "January 15, 2026",
    readTime: "4 min read",
    category: "AWS • Tooling Lifecycle",
    source: "AWS Developer Tools Blog",
    sourceUrl: "https://aws.amazon.com/blogs/developer/cli-v1-maintenance-mode-announcement/",
    summary:
      "AWS announces maintenance and end-of-support milestones for AWS CLI v1.",
    takeaway:
      "Important operational heads-up for teams that still depend on older automation scripts.",
    action:
      "Inventory CI/CD usage of CLI v1 and plan migration windows early.",
  },
  {
    slug: "aws-bedrock-rft",
    title: "Amazon Bedrock adds reinforcement fine-tuning",
    date: "December 3, 2025",
    readTime: "5 min read",
    category: "AWS • AI Platform",
    source: "AWS News Blog",
    sourceUrl:
      "https://aws.amazon.com/blogs/aws/improve-model-accuracy-with-reinforcement-fine-tuning-in-amazon-bedrock/",
    summary:
      "AWS introduces reinforcement fine-tuning support in Bedrock for improving model performance on tasks.",
    takeaway:
      "Relevant for teams tuning model quality without building full training stacks from scratch.",
    action:
      "Define task-specific quality metrics before using new fine-tuning workflows.",
  },
  {
    slug: "aws-sagemaker-serverless-customization",
    title: "New serverless customization in Amazon SageMaker AI accelerates model fine-tuning",
    date: "December 3, 2025",
    readTime: "5 min read",
    category: "AWS • MLOps",
    source: "AWS News Blog",
    sourceUrl:
      "https://aws.amazon.com/blogs/aws/new-serverless-customization-in-amazon-sagemaker-ai-accelerates-model-fine-tuning/",
    summary:
      "AWS presents serverless fine-tuning capabilities aimed at faster and more resilient training workflows.",
    takeaway:
      "Good for small teams that need model iteration without heavy infra overhead.",
    action:
      "Pilot on one narrow model task and monitor cost/performance before broad adoption.",
  },
  {
    slug: "aws-hyperpod-elastic-training",
    title: "Introducing checkpointless and elastic training on Amazon SageMaker HyperPod",
    date: "December 3, 2025",
    readTime: "6 min read",
    category: "AWS • Model Training",
    source: "AWS News Blog",
    sourceUrl:
      "https://aws.amazon.com/blogs/aws/introducing-checkpointless-and-elastic-training-on-amazon-sagemaker-hyperpod/",
    summary:
      "Announces training improvements designed for faster recovery and flexible scaling.",
    takeaway:
      "Valuable for engineering teams training large models under variable infrastructure conditions.",
    action:
      "Revisit your failure-recovery assumptions and checkpoint strategy in long training jobs.",
  },
  {
    slug: "aws-s3-tables-tiering-replication",
    title: "Replication support and Intelligent-Tiering for Amazon S3 Tables",
    date: "December 2, 2025",
    readTime: "5 min read",
    category: "AWS • Data Infrastructure",
    source: "AWS News Blog",
    sourceUrl:
      "https://aws.amazon.com/blogs/aws/announcing-replication-support-and-intelligent-tiering-for-amazon-s3-tables/",
    summary:
      "AWS adds replication and tiering features targeting durability and cost optimization for table data.",
    takeaway:
      "Useful for teams balancing analytics performance with storage cost.",
    action:
      "Segment hot/warm/cold table data and apply storage policies intentionally.",
  },
  {
    slug: "vercel-aeo-coding-agents",
    title: "How we built AEO tracking for coding agents",
    date: "February 9, 2026",
    readTime: "8 min read",
    category: "Vercel • AI Observability",
    source: "Vercel Blog",
    sourceUrl: "https://vercel.com/blog/how-we-built-aeo-tracking-for-coding-agents",
    summary:
      "Vercel shares architecture for tracking how coding agents search, cite, and reason over web content.",
    takeaway:
      "Great for teams building measurement systems around agent behavior and quality.",
    action:
      "Define your own agent observability schema before comparing providers.",
  }
];

const DOMAIN_PLAYBOOKS = {
  Security:
    "Start with exposure mapping, then prioritize controls by blast radius. Pair technical fixes with response drills so teams can execute under pressure.",
  Reliability:
    "Treat reliability as a product feature: define user-facing SLOs, test failure paths regularly, and run rollback playbooks before major releases.",
  "Data Infrastructure":
    "Keep data classes explicit (hot/warm/cold), tie storage policy to query patterns, and measure cost-to-insight rather than raw storage cost.",
  "AI/Developer Tools":
    "Ship small, measurable AI workflows first. Evaluate latency, accuracy, and operator trust before adding more model complexity.",
  "AI Platform":
    "Define task-level evaluation metrics up front and compare model changes with reproducible test sets before production rollout.",
  "Research Tools":
    "Use transparent labeling rules and peer review loops so non-technical stakeholders can trust the findings and reuse the method.",
  "Frontend Architecture":
    "Split ownership by user journey, not only by component. Keep shared contracts narrow and observability unified across teams.",
  "Engineering UX":
    "Optimize for clarity before visual flair. Great tooling UX reduces user mistakes and support load, not just visual novelty.",
  Infrastructure:
    "Design for steady-state and failure-state equally. The fastest teams predefine runbooks, ownership, and communication paths.",
  "Tooling Lifecycle":
    "Inventory legacy dependencies continuously, publish end-of-life timelines, and migrate high-risk workflows first.",
};

const deriveDomainKey = (category) => {
  const parts = category.split("•").map((x) => x.trim());
  return parts[1] || "Infrastructure";
};

const deriveReadTime = (baseReadTime) => {
  const n = Number.parseInt(baseReadTime, 10);
  if (Number.isNaN(n)) return "9 min read";
  return `${Math.max(n + 3, 8)} min read`;
};

const buildDeepSections = (post) => {
  const domain = deriveDomainKey(post.category);
  const playbook = DOMAIN_PLAYBOOKS[domain] || DOMAIN_PLAYBOOKS.Infrastructure;

  return [
    {
      heading: "What happened in this update",
      content: `${post.summary} This update comes from ${post.source} and reflects a practical engineering direction, not just a marketing announcement.`,
    },
    {
      heading: "Why this matters beyond one company",
      content: `${post.takeaway} Even if you do not use the same stack, the decision patterns in this post are broadly transferable to product, platform, and operations teams.`,
    },
    {
      heading: "Deep-dive: the engineering lesson",
      content: `A recurring lesson here is disciplined execution under constraints. Teams usually improve outcomes by narrowing scope first, instrumenting impact early, and then scaling only proven approaches.`,
    },
    {
      heading: "How to apply this in your team (30-60 minute exercise)",
      content: `1) Identify one similar bottleneck in your current workflow.\n2) Define one success metric and one safety metric.\n3) Run a small controlled trial this week.\n4) Document results in a short internal note.\n5) Decide: scale, revise, or stop.\n\nStarter playbook for ${domain}: ${playbook}`,
    },
    {
      heading: "Common mistakes to avoid",
      content: `Do not copy the solution blindly. Avoid skipping baselines, avoid deploying without rollback plans, and avoid measuring only speed while ignoring reliability, security, or accessibility.`,
    },
    {
      heading: "Questions to discuss with your team",
      content: `What assumption in this post most closely matches our environment? What would fail first if we implemented this today? Which user group would benefit immediately, and which group might be left out?`,
    },
    {
      heading: "If you only do one thing today",
      content: post.action,
    },
  ];
};

const POSTS = CURATED_POSTS.map((post) => ({
  ...post,
  readTime: deriveReadTime(post.readTime),
  sections: buildDeepSections(post),
  sources: [{ label: `${post.source}: ${post.title}`, url: post.sourceUrl }],
}));
