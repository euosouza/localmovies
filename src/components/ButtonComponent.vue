<template>
  <button class="flex items-center justify-center gap-2 bg-gray-900 h-12
    hover:bg-gray-700 duration-200 ease-in
    box-border p-4 fill-current text-white stroke-2 rounded w-48"
    v-bind="$attrs"
    @click="handleClick"
    >
    {{ title }}
  </button>
</template>

<script lang="ts" setup>
const emit = defineEmits(["handle-click"]);

const { title } = defineProps({
  title: { type: String, required: true}
});

const handleClick = () => {
  emit("handle-click");
};
</script>
