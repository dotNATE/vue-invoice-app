<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface ButtonProps {
  label: string;
  icon: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  icon: false,
});
</script>

<template>
  <div>
    <button>
      <div v-if="icon" class="__icon">
        <svg viewBox="-6 -6 22 22" xmlns="http://www.w3.org/2000/svg">
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
  </div>
</template>

<style lang="scss">
button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #7c5dfa;
  color: white;
  border-radius: 9999px;
  border: none;
  padding: 9px;
  cursor: pointer;
  min-height: 50px;

  &:hover {
    background-color: #9277ff;
  }
}

.__icon {
  height: 32px;
  width: 32px;
  border-radius: 9999px;
  background-color: white;

  & svg {
    color: #7c5dfa;
  }
}

.__label {
  height: 15px;
  padding: 0 15px 0 15px;

  font-family: "Spartan", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;

  color: white;
}
</style>
