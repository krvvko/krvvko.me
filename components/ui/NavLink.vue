<script setup lang="ts">
defineProps<{
  to: string
  text: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="link" active-class="active">
    <span>{{ text }}</span>
    <VIcon name="hi-arrow-sm-up" class="icon" />
  </NuxtLink>
</template>

<style scoped>
.link {
  text-decoration: none;
  color: var(--color-1);
  display: flex;
  align-items: center;
  font-size: 1.25rem;
}
.link.active {
  text-decoration: none;
  color: var(--primary-color-1);
}
.link > .icon {
  height: 24px;
  width: 24px;
  transition-duration: 0.2s;
  transform: rotate(45deg);
  color: var(--color-1);
}
.link:not(.active):hover > .icon {
  transform: rotate(90deg);
}
.link.active > .icon {
  transform: rotate(-90deg);
  color: var(--primary-color-1);
}
</style>