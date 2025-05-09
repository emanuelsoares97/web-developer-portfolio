document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("projects-container");

  try {
    const response = await fetch("projects.json");
    const projects = await response.json();

    projects.forEach(project => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies}</p>
        <a href="${project.repo}" target="_blank" class="btn">Repository</a>
        ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn">Live Demo</a>` : ""}
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Erro ao carregar projetos:", error);
    container.innerHTML = "<p>Erro ao carregar projetos.</p>";
  }
});
