import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useFetch } from '#imports'
import type { Project } from "~/types/project";

export const useProjectsStore = defineStore('projects', () => {
    const projects = ref<Project[]>([])
    const loading = ref<boolean>(false)
    const error = ref<string | null>(null)

    async function fetchProjects() {
        loading.value = true
        error.value = null
        try {
            const { data, error: fetchError } = await useFetch<Project[]>('/api/projects', {
                baseURL: useRuntimeConfig().public.BASE_URL
            })

            if (fetchError.value) {
                throw new Error(fetchError.value.message)
            }

            projects.value = (data.value || []).sort((a, b) => new Date(b.creation_date).getTime() - new Date(a.creation_date).getTime());
        } catch (err: any) {
            error.value = err.message || 'Unknown error'
        } finally {
            loading.value = false
        }
    }

    function getProjectByName(name: string) {
        const formattedName = name.replace(/-/g, ' ').toLowerCase()
        return projects.value.find(project => project.name_en.toLowerCase() === formattedName)
    }

    function getProjectsByDifficulty(amount: number) {
        return projects.value
            .slice()
            .sort((a, b) => b.difficulty - a.difficulty)
            .slice(0, amount);
    }

    return { projects, loading, error, fetchProjects, getProjectByName, getProjectsByDifficulty }
})
