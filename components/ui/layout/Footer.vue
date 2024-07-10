<script setup lang="ts">

</script>

<template>
  <footer>
    <span>©2020-2024 by</span>
    <span class="username">@krvvko</span>
    <span>|</span>
    <span>Portfolio Version:</span>
    <span class="username">Malachite</span>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--block-padding);
  border: 2px solid var(--border-color-1);
  border-radius: var(--border-radius-4);
  gap: 4px;
  color: var(--color-2);
}
.username {
  color: var(--primary-color-1);
}
</style>