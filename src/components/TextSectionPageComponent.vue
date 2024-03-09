<template>
  <h1 class="text-3xl font-bold">{{ title }}</h1>
  <p>{{ text }}</p>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const { title, text } = defineProps({
  title: { type: String, required: true},
  text: { type: String, required: true},
});

</script>
