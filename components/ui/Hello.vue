<script setup lang="ts">
import BlockTop from "~/components/ui/BlockTop.vue";
import {usePersonalStore} from "~/stores/personal";
import {onMounted, ref, type UnwrapRef} from "vue";
import type {Personal} from "~/types/personal";
import {useI18n} from "vue-i18n";
import SkeletonText from "~/components/ui/layout/SkeletonText.vue";

const personalStore = usePersonalStore();
const personal = ref<Personal | null>(null);
const isLoading = ref(true);

onMounted(async () => {
  personal.value = personalStore.personal;
  isLoading.value = false;
});

const {locale} = useI18n();
const formatDate = (date: UnwrapRef<Personal["developer_since"]> | undefined) => {
  if (!date) return;
  return new Date(date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
</script>

<template>
  <div class="hello">
    <BlockTop icon="md-wavinghand-outlined" text="Hello World!" :withButton="false"/>
    <div class="hello-text">
      <div class="element">
        <span>Location:</span>
        <span class="value">
          <SkeletonText v-if="isLoading"/>
          <template v-else>{{ personal?.location }}</template>
        </span>
      </div>
      <div class="element">
        <span>Status:</span>
        <span class="value">
          <SkeletonText v-if="isLoading"/>
          <template v-else>{{ personal?.status }}</template>
        </span>
      </div>
      <div class="element">
        <span>Who am I?:</span>
        <span class="value">
          <SkeletonText v-if="isLoading"/>
          <template v-else>{{ personal?.position }}</template>
        </span>
      </div>
      <div class="element">
        <span>Dev since:</span>
        <span class="value">
          <SkeletonText v-if="isLoading"/>
          <template v-else>{{ formatDate(personal?.developer_since) }}</template>
        </span>
      </div>
      <span class="description">
        I am a web developer with four years of experience, including two years in commercial project development. My
        specialization is in front-end development using React, though I am also proficient in various other front-end and
        back-end technologies. I excel in both independent and team settings and am committed to continually enhancing my
        technical skills and adapting to new technologies.
      </span>
    </div>
  </div>
</template>

<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: var(--border-radius-4);
  border: 2px solid var(--border-color-1);
  gap: 1em;
}

.hello-text {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.value {
  color: var(--primary-color-1);
}
.description {
  border-top: 2px solid var(--bg-2);
  padding-top: 0.5em;
  margin-top: 0.5em;
  color: var(--color-2);
  line-height: 1.75rem;
}
.element {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
}
</style>