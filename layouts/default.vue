<script setup lang="ts">
import Header from "~/components/ui/layout/Header.vue";
import Footer from "~/components/ui/layout/Footer.vue";
</script>

<template>
  <div class="app">
    <div class="wrapper">
      <main>
        <NuxtPage />
      </main>
      <Header />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 5em 0 2em 0;
  gap: 2em;
}
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 2em;
}
main {
  width: 600px;
}
</style>