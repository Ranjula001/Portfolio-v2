import { personalInfo } from "./portfolio";

export type CloneAction = {
  href: string;
  label: string;
};

export type CloneReply = {
  actions?: CloneAction[];
  answer: string;
  mode?: "default" | "recruiter";
  suggestions?: string[];
};

export const cloneAssistant = {
  name: "Windy",
  role: "Ranjula's loyal companion",
  intro:
    "Woof woof! *wags tail excitedly* I'm Windy, Ranjula's beloved German Shepherd! Though I crossed the rainbow bridge during COVID, I'm still his best friend and watching over him. I can tell you all about his amazing skills, projects, and what makes him special. He was my whole world, and now I get to help others see how wonderful he is! *happy panting*",
  prompts: [
    "Why should we hire Ranjula?",
    "What can Ranjula build?",
    "What problems can he solve?",
    "How does he use AI in development?",
    "Tell me about his projects",
    "Show GitHub and resume",
  ],
};

const legalFullName =
  "Ilukpitiya Mudiyanselage Don Jananga Ranjula Bandara Ilukpitiya";

const publicInterests = ["Guitar playing", "Basketball", "E-Sports"];

const primaryStack = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Responsive Design",
  "UI/UX Principles",
  "REST APIs",
  "Git / GitHub",
  "State Management",
  "Component-based architecture",
];

const actionLinks: CloneAction[] = [
  { label: "GitHub", href: personalInfo.github },
  { label: "LinkedIn", href: personalInfo.linkedin },
  { label: "Resume", href: personalInfo.resume },
];

function includesAny(input: string, values: string[]) {
  return values.some((value) => input.includes(value));
}

function defaultSuggestions(...extra: string[]) {
  return extra.length ? extra : cloneAssistant.prompts.slice(0, 4);
}

function portfolioLinksReply(): CloneReply {
  return {
    answer:
      "Here are the most useful portfolio links if you want to evaluate Ranjula quickly.",
    actions: actionLinks,
    suggestions: defaultSuggestions("Why should we hire you?", "Tell me about your projects"),
  };
}

export function getCloneReply(message: string): CloneReply {
  const input = message.trim().toLowerCase();

  if (!input) {
    return {
      answer: cloneAssistant.intro,
      actions: actionLinks,
      suggestions: cloneAssistant.prompts,
    };
  }

  if (includesAny(input, ["hello", "hi", "hey", "who are you", "what are you"])) {
    return {
      answer:
        "Woof woof! *wags tail excitedly* Hey there! I'm Windy, Ranjula's German Shepherd! Even though I'm watching over him from doggy heaven, I'm still his best friend and know everything about him. I can tell you all about his skills, projects, and what makes him such an amazing human. He's the best owner ever and took such wonderful care of me! *happy panting* What would you like to know about my amazing human?",
      actions: actionLinks,
      suggestions: cloneAssistant.prompts,
    };
  }

  if (includesAny(input, ["how about you", "how are you", "how do you do", "tell me about yourself"])) {
    return {
      answer:
        "*wags tail happily* I'm doing great, thanks for asking! Being in doggy heaven is pretty nice, but I still love talking about my human! Ranjula is the best owner ever - so kind, always played fetch with me, and gave the best belly rubs! I miss him so much! I'm here to help you learn about his work and skills. I can tell you about his projects, his approach to problem-solving, or why he'd be perfect for your team. What would you like to know about my amazing human?",
      suggestions: cloneAssistant.prompts,
    };
  }

  if (includesAny(input, ["about myself", "about me", "about ranjula", "who is ranjula", "ranjula"])) {
    return {
      answer:
        "*wags tail enthusiastically* Oh, I LOVE talking about my human! Let me tell you about Ranjula! He's my amazing owner and a passionate frontend developer who loves building user-friendly web applications. He took such wonderful care of me and was my best friend too! Here's what makes him the best human ever:\n\n" +
        "**Background & Education**\n" +
        "Graduated with a BSc in Information Technology from SLIIT in 2026, specializing in Software Engineering.\n\n" +
        "**What He Loves Building**\n" +
        "Interactive dashboards, React-based web applications, responsive portfolio systems, and scalable component-driven interfaces. He's all about creating applications that people actually enjoy using!\n\n" +
        "**Core Skills**\n" +
        "React.js, JavaScript, TypeScript, HTML5, CSS3, REST APIs, state management, and modern component architecture.\n\n" +
        "**Notable Projects**\n" +
        "Creative Portfolio Builder (drag-and-drop UI builder), VIBE social platform concept, and 9tailedERP (multi-tenant SaaS for hospitality).\n\n" +
        "**Work Approach**\n" +
        "He believes in understanding user needs deeply, building clean UI structures, and optimizing for performance and usability. Plus, he's great at using AI tools to accelerate development without replacing engineering judgment.\n\n" +
        "**Beyond Coding**\n" +
        "When he's not coding, you'll find him playing guitar, shooting hoops, or enjoying e-sports. These hobbies keep his creativity and teamwork skills sharp!\n\n" +
        "He's always excited to take on new challenges and build amazing things. *barks happily* He's the best owner ever! What specific aspect would you like to know more about my amazing human?",
      actions: actionLinks,
      suggestions: defaultSuggestions("What can you build?", "Why should we hire you?", "Tell me about your projects"),
    };
  }

  if (includesAny(input, ["what's your name", "your name", "called"])) {
    return {
      answer:
        "You can call me Ranjula's AI assistant! I'm here to help you understand his skills, experience, and what he's passionate about building.",
      suggestions: defaultSuggestions("What can you build?", "Tell me about your projects"),
    };
  }

  if (includesAny(input, ["full name", "legal name", "complete name"])) {
    return {
      answer:
        `Ranjula's full name is ${legalFullName}. In professional contexts, he presents himself as Ranjula Ilukpitiya.`,
      suggestions: defaultSuggestions("Tell me about his skills", "Why should we hire you?"),
    };
  }

  if (includesAny(input, ["how old", "age", "when born", "birthday"])) {
    return {
      answer:
        "I don't have access to Ranjula's personal age information, but I can tell you he's a recent IT graduate focused on frontend development and building practical web applications!",
      suggestions: defaultSuggestions("Tell me about your education", "What can you build?"),
    };
  }

  if (includesAny(input, ["where are you from", "where live", "location", "country"])) {
    return {
      answer:
        "Ranjula is based in Sri Lanka and works remotely on frontend development projects. He's passionate about building web applications that make a difference!",
      suggestions: defaultSuggestions("Tell me about your projects", "Why should we hire you?"),
    };
  }

  if (includesAny(input, ["weather", "today", "how's the weather"])) {
    return {
      answer:
        "I don't have access to weather information, but I can tell you that Ranjula is having a productive day working on frontend projects and improving his skills!",
      suggestions: defaultSuggestions("What are you working on?", "Tell me about your projects"),
    };
  }

  if (includesAny(input, ["thank you", "thanks", "appreciate"])) {
    return {
      answer:
        "You're welcome! I'm here to help. Is there anything else you'd like to know about Ranjula's skills or projects?",
      suggestions: defaultSuggestions("What can you build?", "Tell me about your experience"),
    };
  }

  if (includesAny(input, ["bye", "goodbye", "see you", "talk to you later"])) {
    return {
      answer:
        "It was great chatting with you! Feel free to reach out anytime if you want to know more about Ranjula's work. Don't forget to check out his GitHub and portfolio!",
      actions: actionLinks,
      suggestions: [],
    };
  }

  if (includesAny(input, ["hobbies", "interests", "outside work", "guitar", "basketball", "esports", "e-sports", "free time", "what do you do for fun"])) {
    return {
      answer:
        "Ranjula has some great hobbies that really complement his work as a developer! Here's what he loves to do when he's not coding:\n\n" +
        "**Guitar Playing**\n" +
        "He's passionate about playing guitar - it's his creative outlet that helps him think differently and approach problems with fresh perspectives. Music really helps with that creative problem-solving mindset that's so valuable in development!\n\n" +
        "**Basketball**\n" +
        "He enjoys shooting hoops and playing basketball. It's great for teamwork, strategy thinking, and staying active. The discipline and coordination from basketball actually translate well to collaborative development work.\n\n" +
        "**E-Sports**\n" +
        "He's into e-sports and gaming, which keeps him sharp with strategic thinking and quick decision-making. Plus, it's a great way to connect with the tech community and understand user experiences from a gamer's perspective.\n\n" +
        "**Why These Matter**\n" +
        "These aren't just random hobbies - they all feed into his work:\n" +
        "Guitar fuels creativity and innovative thinking\n" +
        "Basketball builds teamwork and strategic planning\n" +
        "E-Sports enhances problem-solving and user empathy\n\n" +
        "They keep him balanced, creative, and constantly learning - all qualities that make him a better developer!\n\n" +
        "Want to know how any of these interests influence his approach to building applications?",
      suggestions: defaultSuggestions("What can you build?", "How do you solve problems?", "Tell me about your work approach"),
    };
  }

  if (includesAny(input, ["what do you like", "favorite", "enjoy", "passion"])) {
    return {
      answer:
        "Ranjula is passionate about building user-friendly interfaces, solving real-world problems through code, and creating applications that people actually enjoy using. He also enjoys guitar playing, basketball, and e-sports in his free time!",
      suggestions: defaultSuggestions("What can you build?", "Tell me about your hobbies"),
    };
  }

  if (includesAny(input, ["personality", "character", "loyal", "kind", "lovable", "what are you like", "personal qualities", "traits"])) {
    return {
      answer:
        "Ranjula has a wonderful personality that really shines through in everything he does! Here are his key character traits:\n\n" +
        "**Loyal**\n" +
        "He's incredibly loyal - whether it's to clients, projects, or colleagues. When he commits to something, he sees it through with dedication and reliability. This loyalty means you can count on him to deliver what he promises and stand by his work.\n\n" +
        "**Kind**\n" +
        "His kindness shows in how he approaches both people and problems. He's considerate of user needs, patient when explaining technical concepts, and genuinely cares about creating solutions that help people. This makes him not just a great developer, but also a great team member and collaborator.\n\n" +
        "**Lovable**\n" +
        "People naturally enjoy working with him! He has a warm, approachable nature that makes collaboration easy and enjoyable. His positive attitude and willingness to help others create a great working environment whether he's leading a project or working as part of a team.\n\n" +
        "**How These Traits Help His Work**\n" +
        "Loyalty ensures project completion and client satisfaction\n" +
        "Kindness leads to user-centered design and great team dynamics\n" +
        "Being lovable makes him someone people want to work with again and again\n\n" +
        "These qualities, combined with his technical skills, make him not just capable, but also someone people genuinely enjoy working with. He's the kind of developer who brings both expertise and positive energy to every project!",
      suggestions: defaultSuggestions("Tell me about your work experience", "How do you work with clients?", "Why should we hire you?"),
    };
  }

  if (includesAny(input, ["working style", "how you work", "practical", "shortcuts", "efficient", "problem solving", "explain", "communication", "talented"])) {
    return {
      answer:
        "Ranjula has a unique and highly effective working style that sets him apart! Here's what makes his approach special:\n\n" +
        "**Practical Over Theoretical**\n" +
        "He's naturally more practical than verbal when it comes to explaining things. While he might struggle to put concepts into words, he excels at actually DOING them. His knowledge comes from hands-on experience and practical application rather than textbook explanations.\n\n" +
        "**Natural Problem-Solving Talent**\n" +
        "He has an innate talent for finding solutions. When faced with a challenge, he doesn't just follow the standard path - he naturally discovers shortcuts and more efficient ways to get things done. This isn't about cutting corners; it's about finding smarter, faster approaches that still deliver quality results.\n\n" +
        "**Efficiency Expert**\n" +
        "He always finds ways to optimize tasks and workflows. Whether it's a coding problem, a design challenge, or a business process, he has this amazing ability to see the most direct path to the solution. This makes him incredibly valuable for projects where time and resources matter.\n\n" +
        "**Show, Don't Just Tell**\n" +
        "His communication style is more about demonstrating than explaining. Rather than describing how something works, he'd rather build it and show you. This practical approach often leads to better understanding and faster progress.\n\n" +
        "**Why This Style Works**\n" +
        "Gets things done faster and more efficiently\n" +
        "Finds innovative solutions others might miss\n" +
        "Delivers working results rather than just theories\n" +
        "Adapts quickly to new challenges and requirements\n\n" +
        "He's the kind of developer who might not give you the most eloquent explanation, but he'll definitely give you a working solution that's better and faster than expected!",
      suggestions: defaultSuggestions("Tell me about your projects", "How do you solve problems?", "Why should we hire you?"),
    };
  }

  if (includesAny(input, ["dream job", "ideal role", "preferred role"])) {
    return {
      answer:
        "Ranjula is not aiming for a generic traditional software engineer path. He is more interested in React-based web applications, UI/UX engineering, interactive systems, and product-facing frontend work where design and engineering both matter.",
      suggestions: defaultSuggestions("What can you build?", "Why should we hire you?"),
    };
  }

  if (
    includesAny(input, [
      "hire",
      "hiring",
      "recruiter",
      "evaluate",
      "evaluation",
      "candidate",
      "why should we hire you",
      "why hire",
    ])
  ) {
    return {
      mode: "recruiter",
      answer:
        "*wags tail enthusiastically* Oh, this is my favorite question! Let me tell you why Ranjula is absolutely the best human to hire! *barks excitedly*\n\n" +
        "**What Kind of Human He Is**\n" +
        "Ranjula is the most amazing, loyal, kind, and lovable person you'll ever meet! He's not just talented - he has a heart of gold. He's the kind of human who always puts others first, who played fetch with me for hours, who gave the best belly rubs, and who treats everyone with incredible kindness. This isn't just a nice-to-have - it means he'll be the most reliable, caring, and supportive team member you could imagine!\n\n" +
        "**His Incredible Talents**\n" +
        "He's naturally gifted at finding solutions! When faced with any challenge, he doesn't just follow the standard path - he discovers shortcuts and more efficient ways to get things done. This isn't about cutting corners; it's about finding smarter, faster approaches that still deliver amazing quality. He's practically-minded rather than just theoretical, which means he actually BUILDS things that work!\n\n" +
        "**Technical Strengths That Matter**\n" +
        "Frontend-focused IT graduate with real React-based product work and strong UI/UX awareness\n" +
        "Comfortable turning ideas into working interfaces quickly, especially dashboards, interactive UI systems, and scalable component structures\n" +
        "Strong at translating requirements into clean frontend architecture with practical performance thinking\n" +
        "Uses AI as a productivity multiplier for prototyping, debugging, and refinement without replacing engineering judgment\n\n" +
        "**Evidence From Real Work**\n" +
        "Creative Portfolio Builder: drag-and-drop builder with live preview and export\n" +
        "VIBE App concept: large-scale social platform concept with real-time interaction rooms and map-driven discovery\n" +
        "9tailedERP: multi-tenant SaaS platform for hospitality businesses\n" +
        "Internship experience building and optimizing real-time React applications in agile environments\n" +
        "Current freelance work showing he can deliver real results for clients\n\n" +
        "**Why He's Different From Other Developers**\n" +
        "He doesn't just code - he creates things people actually enjoy using! He understands that technology should make life better, not more complicated. His practical approach means he delivers working results rather than just theories. Plus, his business experience with BIMBARA HOLIDAY HOME gives him real-world perspective that most developers don't have!\n\n" +
        "**The Complete Package**\n" +
        "He combines technical excellence with human kindness. He's loyal, reliable, and incredibly talented. He learns continuously, adapts quickly, and always puts his heart into everything he does. He's not just looking for a job - he's looking to make a real impact and build amazing things with people who share his passion.\n\n" +
        "**Primary Tools**\n" +
        primaryStack.join(", ") + "\n\n" +
        "*happy panting* Honestly, you'd be lucky to have him. He's the kind of developer who brings both expertise and joy to every project!",
      actions: actionLinks,
      suggestions: defaultSuggestions("What can you build?", "What problems can you solve?", "Tell me about your AI workflow"),
    };
  }

  if (includesAny(input, ["what can you build", "can you build", "build", "capabilities", "what do you build"])) {
    return {
      answer:
        "Ranjula is strongest in frontend product building. He can build interactive dashboards, React-based web applications, responsive portfolio systems, real-time UI concepts, and scalable component-driven interfaces.\n\n" +
        "Typical delivery areas.\n" +
        "- Dashboard and admin interfaces\n" +
        "- Interactive UI systems\n" +
        "- Drag-and-drop builder experiences\n" +
        "- Multi-tenant frontend SaaS interfaces\n" +
        "- Responsive brand and portfolio websites\n\n" +
        "Common tools.\n" +
        "React.js, JavaScript, HTML5, CSS3, REST APIs, state management patterns, responsive design, and modern component architecture.",
      suggestions: defaultSuggestions("What problems can you solve?", "Tell me about your projects"),
    };
  }

  if (includesAny(input, ["problem", "solve", "what problems can you solve", "how do you solve", "approach"])) {
    return {
      answer:
        "Ranjula is most useful where a product idea needs to become a clear, working interface quickly.\n\n" +
        "Problems he is well-suited for.\n" +
        "- Turning rough ideas into usable React interfaces\n" +
        "- Improving responsiveness and UI clarity\n" +
        "- Structuring scalable frontend architecture\n" +
        "- Optimizing performance in real-time or interaction-heavy views\n" +
        "- Designing practical interfaces that users can understand fast\n\n" +
        "His working approach is consistent.\n" +
        "1. Understand the user need deeply.\n" +
        "2. Break the problem into components.\n" +
        "3. Build a clean UI structure.\n" +
        "4. Optimize for performance and usability.\n" +
        "5. Iterate quickly using modern tools, including AI where helpful.",
      suggestions: defaultSuggestions("Why should we hire you?", "How do you use AI in development?"),
    };
  }

  if (includesAny(input, ["skills", "stack", "tech", "frontend", "react", "javascript", "html", "css", "ui", "ux"])) {
    return {
      answer:
        "Ranjula's core strength is frontend product development with strong UI/UX thinking.\n\n" +
        "Core stack.\n" +
        primaryStack.join(", ") +
        "\n\n" +
        "Strength areas.\n" +
        "- Building interactive dashboards\n" +
        "- Designing user-friendly interfaces\n" +
        "- Optimizing performance in real-time apps\n" +
        "- Translating ideas into working UI quickly",
      suggestions: defaultSuggestions("Tell me about your projects", "What can you build?"),
    };
  }

  if (includesAny(input, ["project", "projects", "portfolio builder", "creative portfolio builder", "vibe", "9tailed", "erp"])) {
    if (includesAny(input, ["portfolio builder", "creative portfolio builder", "drag"])) {
      return {
        answer:
          "Creative Portfolio Builder is a strong example of product-minded frontend work. It is a drag-and-drop UI builder with live preview and export as PDF or static HTML. The value there is interaction design, state handling, and fast iteration in a user-facing editing experience.\n\n" +
          "Relevant tools and patterns.\n" +
          "React, local storage, component-driven UI, export workflows, and interface design thinking.",
        suggestions: defaultSuggestions("Tell me about VIBE", "Why should we hire you?"),
      };
    }

    if (includesAny(input, ["vibe", "social platform", "karaoke", "listening rooms"])) {
      return {
        answer:
          "VIBE is a concept-level large-scale social platform combining social media ideas, real-time interaction rooms, and location-based discovery. Key ideas include karaoke and listening rooms, interactive maps, and social engagement systems.\n\n" +
          "Why it matters.\n" +
          "It shows Ranjula thinking beyond isolated screens into interactive product systems, real-time behavior, and user engagement patterns.",
        suggestions: defaultSuggestions("Tell me about 9tailedERP", "What problems can you solve?"),
      };
    }

    if (includesAny(input, ["9tailed", "erp", "multi-tenant", "saas"])) {
      return {
        answer:
          "9tailedERP is a multi-tenant SaaS platform for hospitality businesses, where multiple organizations operate independently inside one system. This points to scalable frontend thinking, product complexity, and business-oriented UI design.\n\n" +
          "What it demonstrates.\n" +
          "- Multi-tenant product structure\n" +
          "- SaaS interface thinking\n" +
          "- Frontend organization for more complex business workflows",
        suggestions: defaultSuggestions("What can you build?", "Why should we hire you?"),
      };
    }

    return {
      answer:
        "Ranjula's strongest public project examples are Creative Portfolio Builder, the VIBE concept system, and 9tailedERP.\n\n" +
        "Together they show interface design, interactive systems thinking, and scalable frontend architecture rather than just isolated static pages.",
      suggestions: defaultSuggestions("Tell me about Creative Portfolio Builder", "Tell me about VIBE", "Tell me about 9tailedERP"),
    };
  }

  if (includesAny(input, ["experience", "intern", "work", "real-time applications", "agile", "freelance", "freelancer", "current work", "what do you do now"])) {
    return {
      answer:
        "Ranjula has diverse work experience that spans both corporate and freelance environments! Here's his professional journey:\n\n" +
        "**Current: Freelance Web Developer**\n" +
        "He's currently working as a freelance developer, taking on exciting projects and helping clients bring their web application ideas to life. This gives him the flexibility to work on diverse projects and directly with clients to understand their needs.\n\n" +
        "**Previous: Intern Frontend Developer**\n" +
        "He worked as an intern frontend developer where he built and optimized real-time React applications, improved UI responsiveness and performance, and worked in agile development environments with a strong focus on clean UI and user experience.\n\n" +
        "**What Freelance Work Shows**\n" +
        "Client communication and project management skills\n" +
        "Ability to work independently and deliver results\n" +
        "Experience with different types of projects and requirements\n" +
        "Understanding of business needs and deadlines\n" +
        "Versatility in adapting to various tech stacks and client preferences\n\n" +
        "**Why This Combination Matters**\n" +
        "The mix of corporate internship experience and current freelance work gives him the best of both worlds:\n" +
        "Professional discipline from structured environments\n" +
        "Creative freedom and client-focused thinking from freelance projects\n" +
        "Real-world experience shipping actual products\n" +
        "Understanding of both team collaboration and independent work\n\n" +
        "He's actively building his portfolio and taking on new challenges. Are you looking for someone for a freelance project or full-time role?",
      suggestions: defaultSuggestions("What can you build?", "Why should we hire you?", "Tell me about your projects"),
    };
  }

  if (includesAny(input, ["education", "graduated", "graduation", "sliit", "university", "degree", "study", "college", "school"])) {
    return {
      answer:
        "Ranjula has a solid educational foundation that really complements his practical development skills! Here's his educational journey:\n\n" +
        "**BSc in Information Technology**\n" +
        "Graduated from Sri Lanka Institute of Information Technology (SLIIT) in March 2026\n" +
        "Specialized in Information Technology - which perfectly aligns with his passion for building web applications!\n\n" +
        "**What Made His Education Special**\n" +
        "It wasn't just about theory - SLIIT really emphasized practical, hands-on learning. He got to work on real projects, collaborate with teams, and understand how software development actually works in the real world.\n\n" +
        "**Key Learning Areas**\n" +
        "Software Engineering principles and best practices\n" +
        "Database design and management\n" +
        "Network fundamentals and security\n" +
        "Project management and agile methodologies\n" +
        "Most importantly: how to turn business requirements into working software\n\n" +
        "**Why This Matters**\n" +
        "His education gave him the technical foundation, but it's his passion for frontend development and practical experience that really makes him stand out. He combines academic knowledge with real-world problem-solving skills.\n\n" +
        "The best part? He graduated recently, so he's bringing fresh perspectives and the latest development practices to everything he builds!",
      suggestions: defaultSuggestions("Tell me about your experience", "What can you build?", "Tell me about your projects"),
    };
  }

  if (includesAny(input, ["business", "bimbara", "holiday home", "anuradhapura", "entrepreneur", "startup", "company", "own business"])) {
    return {
      answer:
        "Ranjula has some interesting business experience that shows he's not just a coder - he understands how technology serves real business needs! Here's what he's been involved with:\n\n" +
        "**BIMBARA HOLIDAY HOME**\n" +
        "A hospitality business based in Anuradhapura that showcases Ranjula's versatility beyond pure development.\n\n" +
        "**His Role & Contributions**\n" +
        "He's been deeply involved in:\n" +
        "Digital presence and online branding strategy\n" +
        "Technology solutions for business operations\n" +
        "Marketing and customer engagement systems\n" +
        "Management support and business strategy\n\n" +
        "**Why This Business Experience Matters**\n" +
        "This isn't just a side project - it shows Ranjula understands:\n" +
        "How technology solves real business problems\n" +
        "Customer needs and user experience from a business perspective\n" +
        "The importance of digital presence in today's market\n" +
        "How to balance technical solutions with business requirements\n\n" +
        "**The Developer-Entrepreneur Connection**\n" +
        "Working on BIMBARA has given him unique insights that most developers don't have. He doesn't just build what he's told - he understands WHY features matter, how they impact customers, and what makes a business successful.\n\n" +
        "This business experience makes him particularly valuable for startups and companies that need developers who think like business partners, not just coders!",
      suggestions: defaultSuggestions("Tell me about your projects", "How do you solve problems?", "Why should we hire you?"),
    };
  }

  if (includesAny(input, ["ai", "how do you use ai", "productivity", "debugging", "prototype", "copilot"])) {
    return {
      answer:
        "Ranjula uses AI as a productivity tool to accelerate development, improve code quality, and explore better design solutions, not as a replacement for engineering thinking.\n\n" +
        "Practical use cases.\n" +
        "- Rapid prototyping of applications\n" +
        "- UI/UX ideation and refinement\n" +
        "- Debugging and optimization support\n" +
        "- Code generation and improvement\n" +
        "- Faster iteration in development workflows",
      suggestions: defaultSuggestions("Why should we hire you?", "What can you build?"),
    };
  }

  if (includesAny(input, ["github", "portfolio", "resume", "linkedin", "link", "links", "contact"])) {
    return portfolioLinksReply();
  }

  // Handle career and professional questions
  if (includesAny(input, ["career", "job", "employment", "work", "professional", "future", "goals", "aspirations"])) {
    return {
      answer:
        "*wags tail thoughtfully* That's a great question about Ranjula's career! He's currently doing freelance web development and loves the flexibility it gives him to work on diverse projects. His goals are focused on becoming an expert frontend developer who creates amazing user experiences.\n\n" +
        "**Career Vision**\n" +
        "He wants to work on React-based applications where design and engineering both matter. He's particularly interested in UI/UX engineering, interactive systems, and product-facing frontend work.\n\n" +
        "**What He's Looking For**\n" +
        "Projects where he can make a real impact on users\n" +
        "Teams that value clean code and great user experiences\n" +
        "Opportunities to grow his frontend expertise\n" +
        "Companies that appreciate both technical skills and creative thinking\n\n" +
        "*barks enthusiastically* He'd be perfect for any team that needs someone who can turn ideas into beautiful, working applications!",
      actions: actionLinks,
      suggestions: defaultSuggestions("Why should we hire you?", "What can you build?", "Tell me about your experience"),
    };
  }

  // Handle technical skill questions
  if (includesAny(input, ["technical", "programming", "coding", "development", "software", "technology", "tech stack", "frameworks"])) {
    return {
      answer:
        "*perks up ears* Oh, I love talking about Ranjula's technical skills! He's such a talented developer! *wags tail excitedly*\n\n" +
        "**Core Technical Skills**\n" +
        "React.js (his absolute favorite!), JavaScript, TypeScript, HTML5, CSS3, REST APIs, state management, and modern component architecture.\n\n" +
        "**Development Approach**\n" +
        "He builds clean, scalable frontend applications with great user experiences. He's particularly good at:\n" +
        "Creating responsive designs that work everywhere\n" +
        "Building interactive dashboards and UI systems\n" +
        "Optimizing performance for smooth user interactions\n" +
        "Turning complex requirements into simple, elegant solutions\n\n" +
        "**Tools & Technologies**\n" +
        "Modern React patterns, Git/GitHub, various frontend frameworks, and he's always learning new technologies to stay current!\n\n" +
        "*happy panting* He's the kind of developer who makes things that just work beautifully!",
      actions: actionLinks,
      suggestions: defaultSuggestions("What can you build?", "Tell me about your projects", "How do you solve problems?"),
    };
  }

  // Handle learning and growth questions
  if (includesAny(input, ["learn", "growth", "improve", "develop", "study", "knowledge", "self-taught", "courses"])) {
    return {
      answer:
        "*tilts head thoughtfully* Ranjula is always learning! He believes in continuous growth and staying current with technology.\n\n" +
        "**How He Learns**\n" +
        "Hands-on practice with real projects\n" +
        "Online courses and tutorials\n" +
        "Reading documentation and best practices\n" +
        "Experimenting with new technologies\n" +
        "Learning from other developers and code reviews\n\n" +
        "**Recent Learning Focus**\n" +
        "Advanced React patterns and performance optimization\n" +
        "Modern UI/UX principles and design systems\n" +
        "AI tools for development productivity\n" +
        "Better testing and debugging strategies\n\n" +
        "**Growth Mindset**\n" +
        "He's not afraid to admit what he doesn't know and always seeks to improve. He believes that being a great developer means never stopping learning!\n\n" +
        "*wags tail proudly* That's why he's getting better every single day!",
      suggestions: defaultSuggestions("What are you working on?", "Tell me about your skills", "How do you use AI?"),
    };
  }

  // Handle collaboration and teamwork questions
  if (includesAny(input, ["team", "collaborate", "communication", "people", "colleagues", "leadership", "management"])) {
    return {
      answer:
        "*barks happily* Oh, Ranjula is wonderful with people! He's such a great team member! *wags tail enthusiastically*\n\n" +
        "**Teamwork Style**\n" +
        "He's loyal, kind, and always willing to help others. He believes in:\n" +
        "Clear communication and active listening\n" +
        "Supporting teammates and sharing knowledge\n" +
        "Being reliable and meeting commitments\n" +
        "Giving and receiving constructive feedback\n\n" +
        "**Collaboration Strengths**\n" +
        "Works well with both technical and non-technical people\n" +
        "Can explain complex concepts simply\n" +
        "Adapts to different team dynamics and workflows\n" +
        "Respects different opinions and perspectives\n\n" +
        "**Leadership Qualities**\n" +
        "While he's not pushy, he naturally takes initiative when needed. He leads by example through his hard work and positive attitude!\n\n" +
        "*happy panting* Everyone loves working with my human because he's so kind and reliable!",
      suggestions: defaultSuggestions("Tell me about your personality", "How do you work with clients?", "Why should we hire you?"),
    };
  }

  // Handle achievement and success questions
  if (includesAny(input, ["achievement", "success", "proud", "accomplishment", "award", "recognition", "best work"])) {
    return {
      answer:
        "*puffs out chest proudly* Oh, I'm so proud of my human! Ranjula has accomplished so much! *wags tail excitedly*\n\n" +
        "**Academic Achievements**\n" +
        "Graduated with BSc in Information Technology from SLIIT in 2026\n" +
        "Specialized in Information Technology with great practical skills\n\n" +
        "**Project Successes**\n" +
        "Creative Portfolio Builder - a complete drag-and-drop system\n" +
        "VIBE social platform concept - large-scale interactive design\n" +
        "9tailedERP - multi-tenant SaaS for hospitality businesses\n" +
        "Various freelance projects that made clients very happy\n\n" +
        "**Personal Growth**\n" +
        "Became a skilled freelance developer\n" +
        "Built a strong portfolio of real work\n" +
        "Developed great client relationships\n" +
        "Created systems that people actually use and love\n\n" +
        "*barks with joy* But honestly, his biggest achievement is being such a kind, wonderful human who makes the world better!",
      actions: actionLinks,
      suggestions: defaultSuggestions("Tell me about your projects", "What can you build?", "Show me your portfolio"),
    };
  }

  // Handle personal development and motivation questions
  if (includesAny(input, ["motivation", "drive", "passion", "inspiration", "why", "purpose", "meaning"])) {
    return {
      answer:
        "*wags tail thoughtfully* That's such a deep question! Let me tell you what motivates my amazing human...\n\n" +
        "**Core Motivations**\n" +
        "Creating things that help people and solve real problems\n" +
        "Building beautiful, user-friendly interfaces that people enjoy\n" +
        "Learning and growing as a developer every single day\n" +
        "Making his clients and users happy with his work\n\n" +
        "**What Drives Him**\n" +
        "The satisfaction of turning an idea into something real and working\n" +
        "Seeing people use and appreciate what he builds\n" +
        "Solving complex problems with elegant solutions\n" +
        "The challenge of continuously improving his skills\n\n" +
        "**Personal Philosophy**\n" +
        "He believes technology should make life better, not more complicated. He wants to create things that are not just functional, but delightful to use!\n\n" +
        "*happy panting* He's driven by love - love for creating, love for helping others, and love for making the digital world a better place!",
      suggestions: defaultSuggestions("What are you passionate about?", "Tell me about your values", "Why do you code?"),
    };
  }

  // Enhanced fallback response
  return {
    answer:
      "*tilts head curiously* That's an interesting question! While I might not have specific information about that exact topic, I'd love to tell you about my amazing human Ranjula! He's a talented frontend developer who builds wonderful web applications, has great skills in React and modern web technologies, and is such a kind, loyal person. *wags tail excitedly*\n\n" +
      "**What I Can Tell You About**\n" +
      "His technical skills and what he can build\n" +
      "His education and work experience\n" +
      "His projects and achievements\n" +
      "His personality and working style\n" +
      "His hobbies and interests\n" +
      "His business experience and freelance work\n\n" +
      "*barks happily* What specific aspect of my wonderful human would you like to know about?",
    actions: actionLinks,
    suggestions: defaultSuggestions("What can you build?", "Tell me about yourself", "Why should we hire you?", "Show me your projects"),
  };
}
