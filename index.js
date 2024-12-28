const projects = [
  {
    title: "DriverMatch",
    description:
      "Developed a full-stack carpool matching platform that optimizes routes using Google Maps API. Managing entire development lifecycle including frontend and backend development, maintenance, server monitoring, and security.",
    color: "linear-gradient(to right, #a855f7, #ec4899)",
    tags: ["TypeScript", "Python", "Django", "Google APIs", "OAuth"],
    year: "Oct 2024 - Present",
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
    title: "Chrome Momentum Website",
    description:
      "Created a Chrome extension that displays local weather based on user location. Implemented a to-do list feature that saves data in local storage.",
    color: "linear-gradient(to right, #facc15, #ef4444)",
    tags: ["JavaScript", "HTML", "CSS"],
    year: "Sep 2022",
  },
  {
    title: "Job Scraper",
    description:
      "Developed a website to automatically gather job listings from major platforms like Stack Overflow and Indeed. Used Beautiful Soup for web scraping and Flask to handle data transfer.",
    color: "linear-gradient(to right, #60a5fa, #22c55e)",
    tags: ["Python", "JavaScript", "Beautiful Soup", "Flask"],
    year: "Nov 2020",
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
                    ${project.tags
                      .map((tag) => `<span class="tag">${tag}</span>`)
                      .join("")}
                </div>
            `;
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
