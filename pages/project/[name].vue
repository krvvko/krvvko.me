<script setup lang="ts">
import {onMounted, ref, type UnwrapRef} from 'vue'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '~/stores/projects'
import type { Project } from '~/types/project';
import type {Personal} from "~/types/personal";

const route = useRoute()
const projectsStore = useProjectsStore()
const project = ref<Project | null>(null)
const loading = ref(true)
const { locale } = useI18n();
onMounted(async () => {
  await projectsStore.fetchProjects()
  const projectName = Array.isArray(route.params.name) ? route.params.name[0] : route.params.name;
  const fetchedProject = projectsStore.getProjectByName(projectName)
  project.value = fetchedProject ? fetchedProject : null;
  loading.value = false
})

const formatDate = (date: UnwrapRef<Personal["developer_since"]> | undefined) => {
  if (!date) return;
  return new Date(date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
useHead({
  title: 'Project - krvvko.me',
  meta: [
    {
      name: 'description',
      content: 'One of projects created by krvvko'
    }
  ],
})
</script>

<template>
  <div v-if="loading">
    <p>Loading project...</p>
  </div>
  <div v-else-if="project" class="project">
    <div class="top">
      <span class="headline">{{ project[`name_${locale}`] }}</span>
      <div v-if="project.url || project.source" class="links">
        <a class="link" target="_blank" v-if="project.url" :href="project.url">
          <VIcon name="fa-globe-americas" class="icon" />
        </a>
        <a class="link" target="_blank" v-if="project.source" :href="project.source">
          <VIcon name="bi-github" class="icon" />
        </a>
      </div>
    </div>
    <div class="list">
      <span v-for="technology in project.technologies" :key="technology" class="tech">{{ technology }}</span>
    </div>
    <div class="info">
      <div v-if="project.type.toLowerCase() === 'website'" class="deployment">
        <div class="circle" :style="{ background: project.deployed ? '#7bd36f' : '#dc5f5f' }"></div>
        <span class="deployment-span">{{ project.deployed ? 'Deployed' : 'Not Deployed' }}</span>
      </div>
    </div>

    <span class="label">Briefly</span>
    <span class="description">{{ project[`short_description_${locale}`] }}</span>
    <img v-if="project.images.length > 0" :src="project.images[0]" alt="Project Image" class="image first">
    <span class="label">Description</span>
    <span class="description">{{ project[`full_description_${locale}`] }}</span>
    <div v-if="project.images.length > 1">
      <img v-for="(image, index) in project.images.slice(1)" :src="image" :key="`img-${index}`" :alt="`Project Image ${index + 1}`" class="image">
    </div>
    <div class="created">
      <span>Created:</span>
      <span>{{formatDate(project.creation_date)}}</span>
    </div>
  </div>
  <div v-else>
    <p>Project not found.</p>
  </div>
</template>

<style scoped>
.image {
  width: 100%;
  border: 2px solid var(--primary-color-1);
  border-radius: var(--border-radius-2);
}
.project {
  line-height: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.list {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  flex-wrap: wrap;
}
.tech {
  padding: 2px 12px;
  background: var(--bg-2);
  font-size: 0.9rem;
  color: var(--primary-color-1);
  border-radius: var(--border-radius);
}
.label {
  font-size: 1.25rem;
  margin-top: 0.5em;
}
.description {
  color: var(--color-2);
}
.deployment {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.deployment-span {
  margin-top: 2px;
}
.circle {
  height: 16px;
  width: 16px;
  border-radius: 50%;
}
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
}
.headline {
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.5rem;
}
.first {
  margin-top: 1em;
}
.links {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  justify-content: center;
  align-items: center;
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.2s;
}
.link:hover {
  opacity: 0.8;
}
.created {
  display: flex;
  flex-direction: row;
  gap: 5px;
  color: var(--color-3);
}
.created > span:nth-child(2) {
  color: var(--primary-color-1);
}
</style>
