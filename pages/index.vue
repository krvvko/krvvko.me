<script setup lang="ts">
import ProjectsList from "~/components/ui/projects/List.vue";
import WorkList from "~/components/ui/work/List.vue";
import { useProjectsStore } from '~/stores/projects';
import { onMounted, ref } from 'vue';
import type { Project } from '~/types/project';
import {usePersonalStore} from "~/stores/personal";
import type {Experience} from "~/types/personal";
import Hello from "~/components/ui/Hello.vue";

const projectsStore = useProjectsStore();
const bestProjects = ref<Project[]>([]);
const personalStore = usePersonalStore();
const experience = ref<Experience[]>([]);

onMounted(async () => {
  bestProjects.value = projectsStore.getProjectsByDifficulty(3);
  experience.value = personalStore.getExperience()
});

useHead({
  title: 'Hello - krvvko.me',
  meta: [
    { name: 'description', content: 'Experienced web developer with four years of expertise, specializing in front-end development using React. Proficient in a broad range of front-end and back-end technologies, I thrive in both team and independent settings. Committed to continuous skill enhancement and adapting to new technologies.' }
  ],
})

</script>

<template>
  <div class="home">
    <Hello />
    <WorkList headline="Experience" :list="experience"/>
    <ProjectsList :button="true" headline="Best projects" :list="bestProjects"/>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
</style>