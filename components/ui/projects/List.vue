<script setup lang="ts">
import type { Project } from '~/types/project'
import Element from "~/components/ui/projects/Element.vue";
import RedirectButton from "~/components/ui/RedirectButton.vue";
import BlockTop from "~/components/ui/BlockTop.vue";
import ElementSkeleton from "~/components/ui/layout/ElementSkeleton.vue";

defineProps<{
  headline: string;
  list: Project[];
  button?: boolean;
}>()
</script>

<template>
  <div class="container">
    <BlockTop icon="hi-desktop-computer" :text="headline" :withButton="button" :button="{ to: '/projects', text: 'View All Projects' }" />
    <div v-if="list.length === 0">
      <ElementSkeleton />
    </div>
    <div v-else>
      <div class="list">
        <Element v-for="project in list" :key="project.id" :project="project" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 0;
  border-radius: var(--border-radius-4);
  border: 2px solid var(--border-color-1);
}
.list {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.link {

}
</style>