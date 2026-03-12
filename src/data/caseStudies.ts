export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  differentiation: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tag?: string;
  techStack: string[];
  keyFeatures: string[];
  challenges: { challenge: string; solution: string }[];
  metrics: { label: string; value: string }[];
  learnings: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "resumedex",
    title: "ResumeDEX",
    tagline: "AI-Powered Resume Optimization for the Modern Job Market",
    description: "An intelligent resume analyzer that helps job seekers pass ATS systems and land more interviews using AI-powered keyword optimization and scoring.",
    problem: "Job seekers spend hours customizing resumes for each application, yet 75% get rejected by ATS before a human sees them. Most don't know which keywords they're missing or how to structure their resume for modern screening systems.",
    solution: "Built an AI engine that analyzes resumes against job descriptions, identifies missing keywords, suggests improvements, and provides an ATS compatibility score — all in under 30 seconds.",
    differentiation: "Unlike generic resume builders, ResumeDEX focuses on optimization rather than creation. It integrates with real job postings and uses GPT-4 to provide contextual suggestions specific to each role.",
    image: "/projects/resumedex.png",
    liveUrl: "https://resumedex.vercel.app",
    githubUrl: "https://github.com/sush8471/ResumeDEX",
    tag: "Featured",
    techStack: ["Next.js 14", "TypeScript", "OpenAI GPT-4", "Tailwind CSS", "Vercel", "PDF Parser"],
    keyFeatures: [
      "ATS Score Calculator with detailed breakdown",
      "Job description comparison analysis",
      "Keyword gap identification",
      "Section-by-section improvement suggestions",
      "PDF export with optimized formatting"
    ],
    challenges: [
      {
        challenge: "Parsing PDF resumes accurately while preserving formatting",
        solution: "Implemented pdf-parse library with custom preprocessing pipeline to handle various PDF structures and extract clean text"
      },
      {
        challenge: "GPT-4 token limits for long resumes",
        solution: "Built intelligent chunking system that analyzes resume section by section, then synthesizes results"
      },
      {
        challenge: "Ensuring consistent ATS scoring",
        solution: "Developed weighted scoring algorithm based on real ATS criteria: keyword density, formatting, section headers, and file structure"
      }
    ],
    metrics: [
      { label: "Processing Time", value: "< 30 sec" },
      { label: "ATS Criteria Analyzed", value: "15+" },
      { label: "File Formats Supported", value: "PDF, DOCX" }
    ],
    learnings: [
      "Learned to optimize OpenAI prompts for consistent, structured JSON outputs",
      "Discovered the complexity of PDF parsing and document processing pipelines",
      "Understood ATS systems deeply by researching real enterprise screening criteria"
    ]
  },
  {
    id: "replydex",
    title: "ReplyDEX",
    tagline: "Intelligent Review Response Automation for Businesses",
    description: "An AI-powered tool that automatically generates personalized, context-aware responses to customer reviews across multiple platforms.",
    problem: "Small businesses struggle to respond to every review promptly. Delayed or generic responses hurt reputation and customer relationships. Meanwhile, negative reviews left unanswered can damage brand perception.",
    solution: "Created an automation system that monitors review platforms, analyzes sentiment and context using AI, and drafts appropriate responses that match the brand voice — ready for human approval or auto-posting.",
    differentiation: "Most review tools only aggregate feedback. ReplyDEX actually crafts intelligent responses that acknowledge specific concerns, mention details from the review, and maintain consistent brand tone.",
    image: "/projects/replydex.png",
    liveUrl: "https://replydex.vercel.app",
    githubUrl: "https://github.com/sush8471/flydex-reviews",
    tag: "New",
    techStack: ["React", "Node.js", "OpenAI API", "Google Places API", "n8n", "Supabase"],
    keyFeatures: [
      "Multi-platform review aggregation (Google, Yelp, etc.)",
      "Sentiment analysis and urgency scoring",
      "Brand voice customization",
      "One-click response approval workflow",
      "Analytics dashboard for review trends"
    ],
    challenges: [
      {
        challenge: "Making AI responses sound human and personalized, not robotic",
        solution: "Implemented few-shot prompting with examples of great responses and brand voice guidelines"
      },
      {
        challenge: "Integrating with multiple review platforms with different APIs",
        solution: "Built modular adapter pattern using n8n workflows to standardize data from different sources"
      },
      {
        challenge: "Handling negative reviews that need careful human oversight",
        solution: "Created escalation system that flags sensitive reviews for manual approval based on sentiment thresholds"
      }
    ],
    metrics: [
      { label: "Response Time", value: "< 5 min" },
      { label: "Platforms Supported", value: "3+" },
      { label: "Sentiment Accuracy", value: "92%" }
    ],
    learnings: [
      "Mastered n8n for complex automation workflows connecting multiple APIs",
      "Learned sentiment analysis best practices and tone matching techniques",
      "Discovered the importance of human-in-the-loop systems for AI-generated content"
    ]
  },
  {
    id: "flydexify",
    title: "Flydexify",
    tagline: "AI-Powered Image to Song Recommendation",
    description: "A creative tool that analyzes image mood, colors, and content to recommend perfectly matching songs for social media content creators.",
    problem: "Content creators spend excessive time searching for the right music to match their visuals. Most end up using trending audio that doesn't fit their content's emotional tone.",
    solution: "Built a computer vision system that reads image characteristics (mood, colors, setting, activity) and matches them with songs from Spotify based on audio features like tempo, energy, and valence.",
    differentiation: "Unlike manual music selection or basic genre matching, Flydexify uses computer vision + audio analysis to create intelligent mood-to-mood mappings between visuals and sound.",
    image: "/projects/flydexify.png",
    liveUrl: "https://flydexify.vercel.app",
    githubUrl: "https://github.com/sush8471/flydexify",
    techStack: ["React", "OpenAI Vision API", "Spotify API", "TensorFlow.js", "Framer Motion"],
    keyFeatures: [
      "Image mood analysis using computer vision",
      "Spotify integration for instant preview",
      "Color palette extraction",
      "Save and organize favorite matches",
      "Export recommendations with timestamps"
    ],
    challenges: [
      {
        challenge: "Translating visual elements to audio characteristics accurately",
        solution: "Created mapping algorithm that converts image mood scores to Spotify audio feature parameters"
      },
      {
        challenge: "Processing images client-side for privacy",
        solution: "Used TensorFlow.js for on-device inference instead of sending images to external servers"
      },
      {
        challenge: "Handling diverse image types (landscapes, portraits, products)",
        solution: "Built separate analysis pipelines for different image categories with specialized prompts"
      }
    ],
    metrics: [
      { label: "Analysis Time", value: "< 3 sec" },
      { label: "Spotify Tracks", value: "100K+" },
      { label: "Mood Categories", value: "12" }
    ],
    learnings: [
      "Explored computer vision APIs and image analysis techniques",
      "Learned to work with Spotify's audio features API for music recommendation",
      "Understood the connection between visual and audio emotional mapping"
    ]
  },
  {
    id: "flydexgpt",
    title: "FlydexGPT",
    tagline: "Lightweight AI Chat with Sub-2-Second Response Times",
    description: "A clean, fast ChatGPT alternative focused on simplicity and speed — no bloat, just instant AI conversations.",
    problem: "Mainstream AI chat apps are becoming increasingly complex with features users don't need. They load slowly, have cluttered interfaces, and require multiple clicks to start chatting.",
    solution: "Built a stripped-down, lightning-fast chat interface that loads instantly, supports streaming responses, and focuses purely on the conversation experience.",
    differentiation: "While others add features, FlydexGPT removes them. No login required, no history storage, no upsells — just a clean textarea and instant AI responses with streaming.",
    image: "/projects/flydexgpt.png",
    liveUrl: "https://flydexgpt.vercel.app",
    githubUrl: "https://github.com/sush8471/flydexgpt",
    techStack: ["Next.js 14", "OpenAI Streaming API", "Tailwind CSS", "Vercel Edge", "Redis"],
    keyFeatures: [
      "Zero-login instant access",
      "Streaming responses for real-time feel",
      "Clean, distraction-free interface",
      "Conversation history (session only)",
      "Markdown rendering with code syntax highlighting"
    ],
    challenges: [
      {
        challenge: "Achieving sub-2-second first token latency",
        solution: "Implemented Edge Functions with Redis caching for common prompts and optimized API calls"
      },
      {
        challenge: "Streaming responses properly in React",
        solution: "Used Vercel AI SDK with proper Suspense boundaries and streaming text components"
      },
      {
        challenge: "Preventing abuse without user accounts",
        solution: "Built rate limiting using IP tracking with Upstash Redis"
      }
    ],
    metrics: [
      { label: "First Token", value: "< 2 sec" },
      { label: "Page Load", value: "< 1 sec" },
      { label: "Bundle Size", value: "45KB" }
    ],
    learnings: [
      "Mastered streaming APIs and real-time UI updates in React",
      "Learned Edge Function optimization for minimal latency",
      "Understood the value of constraint-based design (what to remove)"
    ]
  },
  {
    id: "flydex-calories",
    title: "Flydex Calories",
    tagline: "Snap a Photo, Know Your Nutrition Instantly",
    description: "Visual food recognition tool that identifies dishes from photos and provides detailed nutritional breakdowns using AI.",
    problem: "Food tracking apps require manual entry which is tedious and inaccurate. Most people give up after a few days because searching for foods and estimating portions takes too much time.",
    solution: "Created a tool where users simply snap a photo of their meal. Computer vision identifies the food, estimates portions, and returns complete nutritional data including calories, macros, and micronutrients.",
    differentiation: "Unlike MyFitnessPal which requires manual search, Flydex Calories uses computer vision for instant recognition. It also provides more detailed nutrient breakdowns than most competitors.",
    image: "/projects/calories.png",
    liveUrl: "https://flydex-nutrients-analyzer.vercel.app",
    githubUrl: "https://github.com/sush8471/flydex-nutrients-analyzer",
    techStack: ["React", "OpenAI Vision API", "Nutrition Database API", "TensorFlow.js", "PWA"],
    keyFeatures: [
      "Instant food recognition from photos",
      "Detailed macro and micronutrient breakdown",
      "Portion size estimation",
      "Meal history tracking",
      "Export to PDF/csv"
    ],
    challenges: [
      {
        challenge: "Accurately estimating portion sizes from 2D images",
        solution: "Used reference objects (hand, coin) detection and relative size comparison algorithms"
      },
      {
        challenge: "Handling complex mixed dishes (curries, salads, etc.)",
        solution: "Built ingredient decomposition system that identifies components and calculates combined nutrition"
      },
      {
        challenge: "Building a comprehensive nutrition database",
        solution: "Integrated multiple APIs (USDA, Edamam) with fallback to AI estimation for unknown items"
      }
    ],
    metrics: [
      { label: "Recognition Accuracy", value: "89%" },
      { label: "Food Categories", value: "200+" },
      { label: "Analysis Time", value: "< 4 sec" }
    ],
    learnings: [
      "Explored computer vision applications in health tech",
      "Learned about nutrition databases and dietary analysis",
      "Understood the challenges of portion estimation in images"
    ]
  },
  {
    id: "flydon",
    title: "Flydon Automations",
    tagline: "Unified Dashboard for Managing All Your Tools",
    description: "A central command center that connects and orchestrates all Flydex tools, providing unified analytics, user management, and workflow automation.",
    problem: "As the Flydex ecosystem grew, managing multiple tools separately became chaotic. Users had to log into different dashboards, and there was no way to see unified analytics or cross-tool workflows.",
    solution: "Built a unified dashboard that aggregates data from all Flydex tools, enables cross-tool automations, and provides a single pane of glass for the entire ecosystem.",
    differentiation: "Most tool suites feel disconnected. Flydon creates actual integration — data flows between tools, workflows can trigger across apps, and analytics are unified.",
    image: "/projects/flydon.png",
    liveUrl: "https://flydon-dashboard.vercel.app",
    githubUrl: "https://github.com/sush8471/flydon-dashboard",
    techStack: ["Next.js 14", "Supabase", "n8n", "PostgreSQL", "Recharts", "Tailwind"],
    keyFeatures: [
      "Unified analytics across all tools",
      "Cross-tool workflow automation",
      "Single sign-on for all Flydex apps",
      "Global user preferences and settings",
      "Ecosystem health monitoring"
    ],
    challenges: [
      {
        challenge: "Aggregating data from multiple databases with different schemas",
        solution: "Built ETL pipeline with Supabase that normalizes data into unified analytics warehouse"
      },
      {
        challenge: "Implementing single sign-on across separate applications",
        solution: "Created auth service with JWT tokens that all Flydex apps can validate against"
      },
      {
        challenge: "Real-time sync between dashboard and individual tools",
        solution: "Used Supabase Realtime for live data updates across the ecosystem"
      }
    ],
    metrics: [
      { label: "Tools Integrated", value: "6" },
      { label: "API Endpoints", value: "40+" },
      { label: "Data Sync", value: "Real-time" }
    ],
    learnings: [
      "Architected multi-tenant SaaS with shared authentication",
      "Learned data warehouse concepts and ETL pipeline design",
      "Understood the complexity of unified analytics across micro-frontends"
    ]
  }
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};
