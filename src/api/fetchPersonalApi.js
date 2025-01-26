const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPersonalApi() {
    const [projectsResponse, technologiesResponse, personalResponse] = await Promise.all([
        fetch(`${apiUrl}/projects`),
        fetch(`${apiUrl}/technologies`),
        fetch(`${apiUrl}/personal`),
    ]);

    const [projects, technologies, personal] = await Promise.all([
        projectsResponse.json(),
        technologiesResponse.json(),
        personalResponse.json(),
    ]);

    return { projects, technologies, personal };
}

export async function fetchProjectById(projectId) {
    try {
        const response = await fetch(`${apiUrl}/projects/${projectId}`);

        if (!response.ok) {
            return { project: null };
        }

        const project = await response.json();

        return { project };
    } catch (error) {
        console.error(`Error fetching project with ID ${projectId}:`, error);
        return { project: null };
    }
}
