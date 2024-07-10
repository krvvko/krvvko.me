<script setup lang="ts">

</script>

<template>
  <div class="element-skeleton">
    <div class="top"></div>
    <div class="data">
      <span class="description"></span>
      <span class="difficulty"></span>
      <div class="progress"></div>
    </div>
  </div>
</template>

<style scoped>
.element-skeleton {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--bg-2) !important;
  border-radius: var(--border-radius-2) !important;
  padding: var(--block-padding) !important;
  gap: 0.5em !important;
  transition-duration: 0.2s;
  text-decoration: none;
  color: var(--color-1);
  background: var(--border-color-1);
}
.top {
  display: flex;
  height: 30px;
  width: 50%;
}
.data {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.description {
  height: 70px;
  width: 70%;
}
.difficulty {
  height: 30px;
  width: 60%;
}
.progress {
  height: 10px;
  width: 100%;
}
.progress, .difficulty, .description, .top {
  background: var(--bg-2);
  border-radius: var(--border-radius);
  animation: skeleton 2s ease-in-out infinite;
}
@keyframes skeleton {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
</style>