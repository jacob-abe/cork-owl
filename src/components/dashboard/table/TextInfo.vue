<template>
  <div class="flex flex-col">
    <span class="text-sm font-semibold capitalize">{{ label }}</span>
    <span :class="`mt-1 ${color} text-sm w-16 text-center rounded-md`">{{
      value
    }}</span>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    label: String,
    value: String,
    color: String,
  },
};
</script>
