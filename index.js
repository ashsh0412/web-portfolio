const projects = [
  {
    title: "TripCal",
    description:
      "Developed a cross-platform travel budget calculator app using React Native and TypeScript. Integrated public APIs to provide cost of living data, currency conversion, and official travel advisories. Implemented features for personalized budget planning, city cost comparison, and embassy information, while managing the full development lifecycle from UI design to deployment.",
    color: "linear-gradient(to right, #facc15, #ef4444)",
    tags: ["React Native", "TypeScript", "Expo", "App Store Deployment"],
    year: "Sep 2025 - Present",
    link: "https://apps.apple.com/kr/app/tripcal/id6751708982",
  },
  {
    title: "DriverMatch",
    description:
      "“Developed a full-stack carpool matching platform leveraging Google Maps API for optimized route planning and real-time matching between drivers and passengers. Designed and implemented both frontend and backend systems, integrated secure authentication, and managed the entire development lifecycle including deployment, monitoring, and performance optimization.”",
    color: "linear-gradient(to right, #a855f7, #ec4899)",
    tags: ["TypeScript", "Python", "Django", "Google APIs", "OAuth"],
    year: "Oct 2024 - Present",
    link: "https://drivermatch.store",
  },
  {
    title: "Auto Profanity Translator",
    description:
      "Worked with a team to create a Chrome extension that replaces offensive language with polite alternatives in online content. Leveraged the OpenAI API to detect and convert inappropriate words.",
    color: "linear-gradient(to right, #60a5fa, #22c55e)",
    tags: ["JavaScript", "OpenAI API", "Chrome Extension"],
    year: "Jun 2023 - Jul 2023",
  },
  {
    title: "Job Scraper",
    description:
      "Developed a website to automatically gather job listings from major platforms like Stack Overflow and Indeed. Used Beautiful Soup for web scraping and Flask to handle data transfer.",
    color: "linear-gradient(to right, #60a5fa, #22c55e)",
    tags: ["Python", "JavaScript", "Beautiful Soup", "Flask"],
    year: "Nov 2020 - Dec 2020",
  },
];

const projectsContainer = document.getElementById("projectsContainer");
projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-header">
      <h3 class="project-title">${project.title}</h3>
      <span class="project-year">${project.year}</span>
    </div>
    <p class="project-description">${project.description}</p>
    <div class="tags">
      ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;

  // 카드 전체를 클릭하면 새 창에서 열리도록
  if (project.link) {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      window.open(project.link, "_blank");
    });
  }

  projectsContainer.appendChild(card);
});

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0.1,
});

document.querySelectorAll(".project-card, .contact").forEach((el) => {
  observer.observe(el);
});

const cursor = document.querySelector(".custom-cursor");
const gradient = document.querySelector(".gradient-bg");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX - 10}px, ${
    e.clientY - 10
  }px)`;
});
