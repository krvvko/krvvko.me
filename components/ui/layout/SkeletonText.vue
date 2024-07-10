<template>
  <div class="skeleton-text"></div>
</template>

<style scoped>
.skeleton-text {
  height: 16px;
  width: 60px;
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