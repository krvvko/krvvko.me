<script setup lang="ts">
import RedirectButton from "~/components/ui/RedirectButton.vue";

const props = defineProps<{
  withButton?: boolean;
  button?: {
    to: string;
    text: string;
  };
  icon: string;
  text: string;
}>();
</script>

<template>
  <div class="top">
    <div class="left">
      <VIcon :name="props.icon" class="icon" />
      <span class="headline">{{ props.text }}</span>
    </div>
    <RedirectButton
        v-if="props.withButton"
        :to="props.button?.to || '/projects'"
        :text="props.button?.text || 'View All Projects'"
    />
  </div>
</template>

<style scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.75rem;
  font-weight: 600;
}
</style>