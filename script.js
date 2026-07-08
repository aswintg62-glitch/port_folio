const portfolioData = {
  highlights: [
    {
      title: "Hands-on Biomedical Exposure",
      subtitle: "Practical experience",
      details: "Worked around hospital equipment servicing and learned how biomedical engineering supports patient care in real clinical environments.",
    },
    {
      title: "Strong Technical Foundation",
      subtitle: "Engineering skills",
      details: "Built a solid base in electronics, instrumentation, testing, calibration, and device troubleshooting.",
    },
    {
      title: "Problem-Solving mindset",
      subtitle: "Approach",
      details: "Enjoys analyzing technical issues carefully and turning academic knowledge into practical solutions.",
    },
    {
      title: "Commitment to Healthcare Technology",
      subtitle: "Professional focus",
      details: "Eager to contribute to medical technology projects that improve reliability, safety, and patient outcomes.",
    },
  ],
  education: [
    {
      title: "Diploma in Biomedical Engineering",
      subtitle: "State Board of Technical Education, KMCT Polytechnic College, Calicut",
      details: "Completed with strong academic performance and practical exposure in biomedical instrumentation, equipment testing, and maintenance. 2022 - 2024",
    },
    {
      title: "Vocational Higher Secondary School - Biomedical Engineering",
      subtitle: "Darul Uloom Ernakulam",
      details: "Completed with 76% and a strong academic foundation in applied science and engineering concepts. 2018 - 2020",
    },
    {
      title: "High School",
      subtitle: "St. Maria Goretti",
      details: "Completed with 72.4% and developed a solid base in science and mathematics. 2017 - 2018",
    },
  ],
  skills: [
    "Medical device maintenance and servicing for healthcare equipment.",
    "Instrumentation and biomedical device understanding for diagnostics and therapy support.",
    "Testing and calibration to ensure equipment performance and reliability.",
    "Troubleshooting and root-cause analysis for technical equipment issues.",
    "Basic electronics, sensor systems, and embedded hardware concepts.",
    "Documentation, reporting, and teamwork in a clinical or technical environment.",
  ],
  projects: [
    {
      title: "Air Quality Analyzer",
      description: "Developed a system to detect atmospheric pollutants and support health-focused environmental monitoring.",
      details: "The project used sensors to monitor hazardous gases and helped improve awareness of air safety in industrial and public settings.",
    },
    {
      title: "Biomedical Waste Management",
      description: "Designed an organized approach for the safe and efficient handling of biomedical waste.",
      details: "The work emphasized compliance, safety, and environmental responsibility in healthcare-related waste management.",
    },
    {
      title: "EMG Sensing Using Arduino",
      description: "Built a simple biosignal monitoring project to capture muscle activity using Arduino-based interfacing.",
      details: "The project focused on understanding EMG signals, signal conditioning, and real-time visualization, demonstrating hands-on experience in biomedical instrumentation.",
    },
    {
      title: "Body Temperature Detection System",
      description: "Created a temperature monitoring system for quick and reliable body temperature screening.",
      details: "The project highlighted practical biomedical sensing by using sensor-based measurement and simple processing for health monitoring applications.",
    },
  ],
  experience: [
    {
      title: "Medical College Kalamassery, Ernakulam",
      period: "October 2024 - Present",
      details: [
        "Assisted in the maintenance and servicing of medical equipment and improved technical understanding in a real healthcare setting.",
        "Collaborated with senior engineers to troubleshoot and resolve equipment issues with a focus on reliability and safety.",
        "Gained practical experience in applying biomedical engineering principles within a clinical environment.",
      ],
    },
    {
      title: "CYRIX Health Care Pvt Ltd",
      period: "June 2024",
      details: [
        "Completed a 3-month calibration training program and built strong practical knowledge in equipment handling.",
        "Developed confidence in performing calibration tasks and understanding assigned biomedical engineering responsibilities.",
      ],
    },
    {
      title: "CYRIX Health Care Pvt Ltd (Internship)",
      period: "May 2023",
      details: [
        "Trained in the handling, servicing, and maintenance of various biomedical devices.",
        "Gained practical knowledge in calibration and troubleshooting of medical equipment.",
      ],
    },
    {
      title: "General Hospital, Ernakulam (Internship)",
      period: "January 2020",
      details: [
        "Observed the functioning of different hospital departments and learned about day-to-day healthcare operations.",
        "Assisted in basic maintenance and operational support within the biomedical engineering department.",
      ],
    },
  ],
};

function createCard(item) {
  const article = document.createElement('article');
  article.className = 'card';
  const title = document.createElement('h3');
  title.textContent = item.title;
  const subtitle = document.createElement('p');
  subtitle.textContent = item.subtitle || item.description;
  subtitle.style.fontWeight = '600';
  const details = document.createElement('p');
  details.textContent = item.details || '';
  article.append(title, subtitle, details);
  return article;
}

function initHighlights() {
  const highlightsGrid = document.getElementById('highlights-grid');
  portfolioData.highlights.forEach((item) => {
    const card = createCard(item);
    highlightsGrid.appendChild(card);
  });
}

function initEducation() {
  const educationList = document.getElementById('education-list');
  portfolioData.education.forEach((item) => {
    const card = createCard(item);
    educationList.appendChild(card);
  });
}

function initSkills() {
  const skillsList = document.getElementById('skills-list');
  portfolioData.skills.forEach((skill) => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

function initProjects() {
  const projectsContainer = document.getElementById('projects-container');
  portfolioData.projects.forEach((project) => {
    const article = document.createElement('article');
    article.className = 'card';
    const title = document.createElement('h3');
    title.textContent = project.title;
    const description = document.createElement('p');
    description.textContent = project.description;
    const details = document.createElement('p');
    details.textContent = project.details;
    article.append(title, description, details);
    projectsContainer.appendChild(article);
  });
}

function initExperience() {
  const experienceContainer = document.getElementById('experience-container');
  portfolioData.experience.forEach((role) => {
    const article = document.createElement('article');
    article.className = 'experience-card';
    const title = document.createElement('h3');
    title.textContent = role.title;
    const meta = document.createElement('p');
    meta.className = 'meta';
    meta.textContent = role.period;
    const list = document.createElement('ul');
    role.details.forEach((detail) => {
      const li = document.createElement('li');
      li.textContent = detail;
      list.appendChild(li);
    });
    article.append(title, meta, list);
    experienceContainer.appendChild(article);
  });
}

function setupMenuToggle() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function setupThemeToggle() {
  const button = document.getElementById('theme-toggle');
  button.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    button.textContent = isDark ? 'Light' : 'Dark';
  });
}

function initPortfolio() {
  initHighlights();
  initEducation();
  initSkills();
  initProjects();
  initExperience();
  setupMenuToggle();
  setupThemeToggle();
}

window.addEventListener('DOMContentLoaded', initPortfolio);
