<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import LanguageSwitcher from '~/components/ui/LanguageSwitcher.vue';
import NavLink from "~/components/ui/NavLink.vue";

const navRef = ref<HTMLElement | null>(null);

const handleScroll = () => {
  if (navRef.value) {
    if (window.scrollY >= navRef.value.offsetTop) {
      navRef.value.classList.add('sticked');
    } else {
      navRef.value.classList.remove('sticked');
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav ref="navRef">
    <div class="links">
      <NavLink to="/" text="Home" />
      <NavLink to="/contact" text="Contact" />
      <NavLink to="/projects" text="Projects" />
    </div>
<!--    <LanguageSwitcher />-->
  </nav>
</template>

<style scoped>
nav {
  top: 1em;
  position: sticky;
  width: 220px;
  display: flex;
  flex-direction: column;
  padding: 0 var(--block-padding);
  border: 2px solid var(--border-color-1);
  align-self: flex-start;
  border-radius: var(--border-radius-4);
  transition-duration: 0.2s;
}

nav.sticked {
  border-top: transparent;
  border-radius: 0 0 var(--border-radius-4) var(--border-radius-4);
}
.links {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: flex-start;
  border-bottom: 2px solid var(--bg-2);
  margin-bottom: 1em;
  padding-bottom: 1em;
}
</style>
