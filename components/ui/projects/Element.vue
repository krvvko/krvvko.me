<script setup lang="ts">
import type {Project} from '~/types/project'
const { locale } = useI18n();
const props = defineProps({
  project: {
    type: Object as () => Project,
    required: true
  }
})

const currentLanguageSuffix = computed(() => {
  return locale.value === 'ru' ? '_ru' : '_en';
});

const formattedLink = computed(() => {
  return `/project/${props.project.name_en.toLowerCase().replace(/\s+/g, '-')}`;
})

const formattedDate = (date: Date) => {
  return new Date(date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

</script>

<template>
  <NuxtLink :to="formattedLink" class="container">
    <div class="top">
      <span class="name">{{ props.project[`name${currentLanguageSuffix}`] }} <span class="type"> - {{props.project.type}}</span> </span>
      <span class="date">{{ formattedDate(props.project.creation_date) }}</span>
    </div>
    <div class="data">
      <span class="description">{{ props.project[`short_description${currentLanguageSuffix}`] }}</span>
      <span class="difficulty">Difficulty</span>
      <div class="outer">
        <div class="inner" :style="{ '--difficulty-width': props.project.difficulty * 10 + '%' }"></div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.container {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--bg-2) !important;
  border-radius: var(--border-radius-2) !important;
  padding: var(--block-padding) !important;
  gap: 0.5em !important;;
  transition-duration: 0.2s;
  text-decoration: none;
  color: var(--color-1);
  background: var(--border-color-1);
}
.container:hover {
  border: 2px solid var(--primary-color-1) !important;
  background: var(--primary-color-1-opacity);
}
.date {
  font-size: 0.8rem;
  color: var(--color-3);
}
.name {
  font-weight: 600;
}
.type {
  color: var(--color-3);
  font-size: 0.8rem;
  font-weight: 500;
}
.data {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.description {
  color: var(--color-2);
  margin: 0.5em 0;
}
.difficulty {
  font-size: 0.8rem;
  color: var(--color-3);
}
.outer {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 4px;
  background: var(--bg-2);
  border-radius: 100px;
}
.inner {
  height: 4px;
  background: var(--primary-color-1);
  animation: fillWidth 1.5s forwards;
}

@keyframes fillWidth {
  from {
    width: 0%;
  }
  to {
    width: var(--difficulty-width);
  }
}

</style>