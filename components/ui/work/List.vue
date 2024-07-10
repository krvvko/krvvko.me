<script setup lang="ts">
import type {Experience} from "~/types/personal";
import Element from "~/components/ui/work/Element.vue";
import BlockTop from "~/components/ui/BlockTop.vue";
import ElementSkeleton from "~/components/ui/layout/ElementSkeleton.vue";

defineProps<{
  headline: string;
  list: Experience[];
}>()
</script>

<template>
  <div class="container">
    <BlockTop icon="md-workoutline-twotone" :text="headline" :withButton="false" />
    <div v-if="list.length === 0">
      <ElementSkeleton />
    </div>
    <div v-else>
      <div class="list">
        <Element v-for="experience in list" :key="experience.company_name" :experience="experience" />
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
.top {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.75rem;
  font-weight: 600;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>