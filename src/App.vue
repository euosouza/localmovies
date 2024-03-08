<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";

const { currentRoute } = useRouter();

const layout = computed(() => currentRoute.value.meta.layout);


</script>
