<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })

</script>

<template>
  <NuxtLayout name="404">
    <div>
      <h2>{{ error.statusCode }}</h2>
      <button @click="handleError">Go Back Home</button>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0;
  background: black;
  color: white;
}
</style>
