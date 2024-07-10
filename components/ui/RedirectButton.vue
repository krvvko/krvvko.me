<script setup lang="ts">
defineProps<{
  to: string
  text: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="link">
    <div class="inner">
      {{ text }}
    </div>
  </NuxtLink>
</template>

<style scoped>
.link {
  text-decoration: none;
  position: relative;
}
.inner {
  position: relative;
  z-index: 2;
  color: var(--color-1);
  background: rgba(42, 42, 42, 0.7);
  padding: 10px 14px;
  transform: translate(-8px, -8px) scale(1.02);
  border-radius: var(--border-radius-1);
  transition-duration: 0.2s;
  backdrop-filter: blur(4px);
  font-size: 0.9rem;
}
.link:hover > .inner {
  transform: translate(0, 0) scale(1.02);
}
.link:before {
  position: absolute;
  content: '';
  inset: 0;
  z-index: 1;
  border-radius: var(--border-radius-1);
  border: 2px solid var(--primary-color-1);
  transition-duration: 0.2s;
}
.link:hover:before {
  border: 2px solid transparent;
}
</style>