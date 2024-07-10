<script setup lang="ts">
import type {Experience} from "~/types/personal";

const props = defineProps({
  experience: {
    type: Object as () => Experience,
    required: true
  }
})
const { locale } = useI18n();

const formatDate = (date: Date | string, nullText: string | null = 'current') => {
  if (!date || date === "") return nullText;
  return new Date(date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="project">
    <span class="name">{{props.experience.role}}</span>
    <div class="company">
      <span>{{props.experience.company_name}}</span>
      <div class="date">
        <span>{{formatDate(props.experience.start_date)}} - {{formatDate(props.experience.end_date)}}</span>
      </div>
    </div>
    <div class="stack-list">
      <span class="tech" v-for="tech in props.experience.stack">{{tech}}</span>
    </div>
    <span class="description">{{props.experience[`company_description_${locale}`]}}</span>
    <div class="responsibilities">
      <span>Responsibilities</span>
      <div class="responsibilities-list">
        <span class="responsibility" v-for="responsibility in props.experience.responsibilities">- {{responsibility}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: var(--block-padding);
  border-radius: var(--border-radius-2);
  border: 2px solid var(--bg-2);
}
.name {
  font-size: 1.25rem;
  font-weight: 600;
}
.company {
  display: flex;
  gap: 1em;
  color: var(--color-2);
  align-items: center;
}
.date {
  font-size: 0.9rem;
  color: var(--color-3);
}
.stack-list {
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
}
.tech {
  padding: 4px 12px;
  background: var(--bg-2);
  font-size: 0.9rem;
  color: var(--primary-color-1);
  border-radius: var(--border-radius);
}
.responsibilities {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.responsibilities-list {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-left: 0.5em;
}
.responsibility {
  color: var(--color-2);
}
.description {
  margin: 0.5em 0;
}
</style>