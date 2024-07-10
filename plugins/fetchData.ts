import { defineNuxtPlugin } from '#app'
import { useProjectsStore } from '~/stores/projects'
import {usePersonalStore} from "~/stores/personal";

export default defineNuxtPlugin(async (nuxtApp: any) => {
    const projectsStore = useProjectsStore(nuxtApp.$pinia)
    const personalStore = usePersonalStore(nuxtApp.$pinia)

    if (projectsStore.projects.length === 0) {
        await projectsStore.fetchProjects()
    }
    if (!personalStore.personal) {
        await personalStore.fetchPersonal()
    }
})