<template>
  <select
    class="p-4 pl-10 h-12 border-gray-500 border rounded box-border placeholder-gray-400 w-full"
    v-bind="$attrs"
    :value="modelValue"
    @change="updateValue"
  >
    <option value="" selected disabled class="">Status</option>
    <option :value="item" v-for="(item, index) in list" :key="index">{{ item }}</option>
  </select>

</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";

const emits = defineEmits(["update:modelValue"]);

const { modelValue, list } = defineProps({
  modelValue: {type: String, required: true },
  list: {type: Array as PropType<string[]>, required: true }
});

const updateValue = (e: Event) => {
  if (e.target) emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
