import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useFetch } from '#imports';
import type { Experience, Personal } from "~/types/personal";

export const usePersonalStore = defineStore('personal', () => {
    const personal = ref<Personal | null>(null);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);

    async function fetchPersonal() {
        loading.value = true;
        error.value = null;
        try {
            const { data, error: fetchError } = await useFetch<Personal>('/api/personal', {
                baseURL: useRuntimeConfig().public.BASE_URL
            });

            if (fetchError.value) {
                throw new Error(fetchError.value.message);
            }

            personal.value = data.value ?? null;
        } catch (err: any) {
            error.value = err.message || 'Unknown error';
        } finally {
            loading.value = false;
        }
    }

    function getExperience(): Experience[] {
        return personal.value?.experience || [];
    }

    return { personal, loading, error, fetchPersonal, getExperience }
});