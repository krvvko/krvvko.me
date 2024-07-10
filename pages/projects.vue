<script setup lang="ts">
import {useProjectsStore} from "~/stores/projects";
import ProjectsList from "~/components/ui/projects/List.vue";
import {onMounted, ref} from "vue";
import type {Project} from "~/types/project";

const projectsStore = useProjectsStore();
const projects = ref<Project[]>([]);
onMounted(async () => {
  projects.value = projectsStore.projects;
});
useHead({
  title: 'Projects - krvvko.me',
  meta: [
    { name: 'description', content: 'Projects made by krvvko' }
  ],
})
</script>

<template>
  <ProjectsList :button="false" headline="Non commercial projects" :list="projects"/>
</template>

<style scoped>

</style>