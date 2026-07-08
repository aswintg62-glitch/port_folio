const portfolioData = {
  education: [
    {
      title: "Diploma in Biomedical Engineering",
      subtitle: "State Board of Technical Education, KMCT Polytechnic College, Calicut",
      details: "7.4 CGPA | 2022 - 2024",
    },
    {
      title: "Vocational Higher Secondary 	6 Biomedical Engineering",
      subtitle: "Darul Uloom Ernakulam",
      details: "76% | 2018 - 2020",
    },
    {
      title: "High School",
      subtitle: "St. Maria Goretti",
      details: "72.4% | 2017 - 2018",
    },
  ],
  skills: [
    "Medical device proficiency: diagnostic and therapeutic equipment understanding.",
    "Instrumentation: operating and interpreting biomedical instrument behavior.",
    "Testing & calibration: performing rigorous checks for accurate device performance.",
    "Troubleshooting: diagnosing and resolving biomedical equipment issues.",
    "Regulatory compliance: awareness of healthcare standards for biomedical equipment.",
  ],
  projects: [
    {
      title: "Air Quality Analyzer",
      description: "Developed a system to detect atmospheric pollutants and support the issuance of health advisories.",
      details: "Implemented sensors to monitor toxic and flammable gases in industrial environments, enhancing safety measures.",
    },
    {
      title: "Biomedical Waste Management",
      description: "Designed a protocol for the safe and efficient management of biomedical waste.",
      details: "Ensured compliance with health and environmental regulations to mitigate risks associated with biomedical waste.",
    },
  ],
  experience: [
    {
      title: "Medical College Kalamassery, Ernakulam",
      period: "October 2024 	6 Present",
      details: [
        "Assisted in the maintenance and servicing of medical equipment, enhancing technical proficiency.",
        "Collaborated with senior engineers to troubleshoot and resolve equipment issues.",
        "Gained practical experience in the application of biomedical engineering principles in a clinical setting.",
      ],
    },
    {
      title: "CYRIX Health Care Pvt Ltd",
      period: "June 2024",
      details: [
        "Completed a 3-month calibration training program with the firm.",
        "Obtained practical knowledge in handling, calibration, and assigned biomedical engineering tasks.",
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
        "Observed and understood the functioning of different hospital departments.",
        "Assisted in basic maintenance and operational tasks within the biomedical engineering department.",
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
  initEducation();
  initSkills();
  initProjects();
  initExperience();
  setupMenuToggle();
  setupThemeToggle();
}

window.addEventListener('DOMContentLoaded', initPortfolio);
