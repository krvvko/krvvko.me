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