<template>
  <div class="language-switcher" @mouseover="showOptions = true" @mouseleave="showOptions = false">
    <div>{{ currentLanguage }}</div>
    <transition name="fade">
      <div v-show="showOptions" class="options" @click.stop>
        <div
            v-for="option in options"
            :key="option.value"
            :class="{ active: locale === option.value }"
            @click="setLanguage(option.value)">
          {{ option.text }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const { locale } = useI18n({
  useScope: 'global'
});

const showOptions = ref(false);
const options = [
  { value: 'en', text: 'English' },
  { value: 'ru', text: 'Русский' }
];

const currentLanguage = computed(() => {
  return options.find(option => option.value === locale.value)?.text;
});

const setLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem('locale', lang);
  showOptions.value = false;
};

onMounted(() => {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale) {
    locale.value = savedLocale;
  }
});

</script>

<style scoped>
.language-switcher {
  position: relative;
  cursor: pointer;
  align-self: flex-start;
}

.options {
  position: absolute;
  box-sizing: content-box;
  bottom: 0;
  left: -12px;
  background-color: var(--bg);
  border: 2px solid var(--bg-2);
  border-radius: var(--border-radius-1);
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  padding: 6px 12px;
  transform: translateY(100%);
  z-index: 2;
}

.options > .active {
  color: var(--primary-color-1);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
