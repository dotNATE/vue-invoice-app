<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface ButtonProps {
  label: string;
  icon?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  icon: false,
});
</script>

<template>
  <button class="btn">
    <div v-if="icon" class="__icon">
      <svg viewBox="-8 -8 26 26" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
          fill="currentColor"
          fill-rule="nonzero"
        />
      </svg>
    </div>
    <span class="__label">
      {{ label }}
    </span>
  </button>
</template>
