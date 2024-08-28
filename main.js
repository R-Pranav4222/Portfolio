document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: 'Project One', description: 'A great project.' },
        { title: 'Project Two', description: 'Another great project.' }
    ];

    const projectsContainer = document.getElementById('projectsContainer');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });

    document.getElementById('contactForm').addEventListener('submit', event => {
        event.preventDefault();
        alert('Form submitted!');
    });
});
