let _allProjects = [];

async function loadProjects() {
  const response = await fetch("projects.json");
  _allProjects = await response.json();
}

function renderProjects(lang) {
  const container = document.getElementById("projects-container");
  if (!container || !_allProjects.length) return;

  const t = (typeof translations !== 'undefined' && translations[lang]) || {};
  const techLabel = t['projects-technologies'] || 'Technologies:';
  const repoLabel = t['projects-repo'] || 'Repository';
  const demoLabel = t['projects-demo'] || 'Live Demo';

  container.innerHTML = '';
  _allProjects.forEach(project => {
    const desc = (lang === 'pt' && project.description_pt) ? project.description_pt : project.description;
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${desc}</p>
      <p><strong>${techLabel}</strong> ${project.technologies}</p>
      <a href="${project.repo}" target="_blank" class="btn">${repoLabel}</a>
      ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn">${demoLabel}</a>` : ""}
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await loadProjects();
    const lang = localStorage.getItem('lang') || 'en';
    renderProjects(lang);
  } catch (error) {
    console.error("Erro ao carregar projetos:", error);
    const container = document.getElementById("projects-container");
    if (container) container.innerHTML = "<p>Erro ao carregar projetos.</p>";
  }
});
