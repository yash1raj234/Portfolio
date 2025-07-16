export const myProjects = [
  {
    id: 1,
    title: "3D Animated Menu Interface",
    description:
      "An interactive 3D animated menu bar with smooth scroll-based transitions and motion effects using GSAP, Framer Motion, and React.",
    subDescription: [
      "Created a dynamic menu interface with 3D animations using GSAP and Framer Motion.",
      "Integrated scroll-based animations that provide a smooth and immersive user experience.",
      "Utilized React for component-based structure and state handling.",
      "Focused on performance optimization and responsiveness for various screen sizes.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/portfolio.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "GSAP",
        path: "/assets/logos/gsap.svg",
      },
      {
        id: 3,
        name: "Framer Motion",
        path: "/assets/logos/framer-motion.svg",
      },
      {
        id: 4,
        name: "Three.js",
        path: "/assets/logos/threejs.svg",
      },
    ],
  },
  {
    id: 2,
    title: "AI Image Enhancer",
    description:
      "A web application that enhances image quality using OpenAI's image models, built with React and styled with Tailwind CSS.",
    subDescription: [
      "Integrated OpenAI API to process and enhance low-resolution or blurry images.",
      "Built a clean, responsive UI using React and Tailwind CSS for a smooth user experience.",
      "Implemented real-time preview functionality with optimized rendering performance.",
      "Handled secure API interactions and user input validations."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ai-image-enhancer.jpg",
    tags: [
      {
        id: 1,
        name: "OpenAI",
        path: "/assets/logos/openai.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
    {
  id: 3,
  title: "Whiteboard Collaboration App",
  description:
    "A real-time collaborative whiteboard application built with React for seamless teamwork and brainstorming.",
  subDescription: [
    "Enabled real-time drawing and collaboration using WebSockets and React.",
    "Designed a responsive and intuitive canvas UI for drawing, writing, and team sketching.",
    "Implemented user presence, live cursors, and undo/redo features for better UX.",
    "Optimized performance for multiple concurrent users across devices.",
  ],
  href: "",
  logo: "",
  image: "/assets/projects/whiteboard.jpg",
  tags: [
    { id: 1, name: "React", path: "/assets/logos/react.svg" },
    { id: 2, name: "Socket.io", path: "/assets/logos/socketio.svg" },
    { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
  ],
},
{
  id: 4,
  title: "AI Automated Calling System",
  description:
    "A voice AI-powered calling system using React, VAPI, and Node.js to automate conversations and outreach.",
  subDescription: [
    "Built an automated calling solution using VAPI and React for customer communication.",
    "Used Node.js and Express for backend call flow management and dynamic response handling.",
    "Integrated OpenAI for context-aware dialogue generation and intelligent follow-ups.",
    "Implemented webhook support and call status tracking for analytics and insights.",
  ],
  href: "",
  logo: "",
  image: "/assets/projects/ai-calling.jpg",
  tags: [
    { id: 1, name: "React", path: "/assets/logos/react.svg" },
    { id: 2, name: "VAPI", path: "/assets/logos/vapi.svg" },
    { id: 3, name: "Node.js", path: "/assets/logos/nodejs.svg" },
    { id: 4, name: "Express", path: "/assets/logos/express.svg" },
  ],
},
{
  id: 5,
  title: "AI Notes Taking App",
  description:
    "A smart note-taking web app that uses AI to summarize and organize notes in real time.",
  subDescription: [
    "Built with React for a clean UI and responsive note editing experience.",
    "Integrated OpenAI to auto-summarize, highlight key points, and suggest tags.",
    "Enabled real-time syncing and auto-save for a seamless writing experience.",
    "Implemented user authentication and personalized note history.",
  ],
  href: "",
  logo: "",
  image: "/assets/projects/ai-notes.jpg",
  tags: [
    { id: 1, name: "React", path: "/assets/logos/react.svg" },
    { id: 2, name: "OpenAI", path: "/assets/logos/openai.svg" },
    { id: 3, name: "Firebase", path: "/assets/logos/firebase.svg" },
    { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
  ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/yashraj",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "RealShare",
    job: "AI SaaS - Realtime Video Sharing + Desktop App",
    date: "2024-Present",
    contents: [
      "Developed a cross-platform desktop application using Electron and React for real-time video sharing.",
      "Implemented real-time communication features using Socket.io, enabling smooth peer collaboration.",
      "Hosted the backend on AWS with optimized delivery via CloudFront and Express server.",
      "Built scalable APIs and ensured seamless interaction between desktop and web clients.",
      "Managed app deployment, authentication, and data sync across Electron and Next.js frontend.",
    ],
  },
  {
    title: "TeachSync",
    job: "AI-Powered EdTech SaaS Platform",
    date: "2024-Present",
    contents: [
      "Built a full-stack real-time teaching platform using Next.js, Supabase, and Stripe from scratch.",
      "Integrated VAPI and an AI vocal agent to support interactive and automated learning sessions.",
      "Implemented user authentication, instructor dashboards, and subscription/payment models.",
      "Enabled real-time session handling with event broadcasting, media control, and feedback loops.",
      "Designed an intuitive UI and ensured secure, scalable deployment for modern EdTech use cases.",
    ],
  },
];
export const reviews = [
  {
    name: "FreeCodeCamp",
    username: "@fullstack",
    body: "Certified in Full Stack Web Development. Completed projects covering APIs, databases, and responsive design.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
  },
  {
    name: "DeepLearning.AI",
    username: "@prompt-engineering",
    body: "Completed Prompt Engineering for Developers with OpenAI — focused on using LLMs effectively in applications.",
    img: "https://avatars.githubusercontent.com/u/50236262?s=200&v=4",
  },
  {
    name: "Udemy",
    username: "@devops-bootcamp",
    body: "Completed a comprehensive DevOps Bootcamp covering Docker, Kubernetes, CI/CD, and cloud deployment.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Udemy_logo.svg",
  },
  {
    name: "FreeCodeCamp",
    username: "@js-algo",
    body: "Certified in JavaScript Algorithms and Data Structures. Built multiple DSA projects using ES6+.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
  },
  {
    name: "Coursera (Stanford)",
    username: "@ml-basics",
    body: "Completed Machine Learning course by Andrew Ng — covering supervised learning, cost functions, and model evaluation.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Coursera_logo.svg",
  },
];