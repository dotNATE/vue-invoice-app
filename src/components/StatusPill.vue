<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  status: {
    type: String,
    required: true,
    validator(value: string) {
      return ["paid", "pending", "draft"].includes(value);
    },
  },
});
</script>

<template>
  <div :class="[status, 'pill']">
    <span class="__dot"></span>
    <h3 class="small __label" data-testid="label">{{ status }}</h3>
  </div>
</template>
