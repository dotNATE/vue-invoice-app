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
    <span class="dot"></span>
    <h3 class="small label" data-testid="label">{{ status }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.pill {
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-height: 40px;
  max-width: 104px;
  padding: 12px 29px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    z-index: -1;
    border-radius: 8px;
  }
}

.dot {
  height: 8px;
  width: 8px;
  border-radius: 8px;
  margin-right: 8px;
  flex-shrink: 0;
}

.label {
  text-transform: capitalize;
}
.paid {
  color: #33d69f;

  &::before,
  & .dot {
    background: #33d69f;
  }
}

.pending {
  color: #ff8f00;

  &::before,
  & .dot {
    background: #ff8f00;
  }
}

.draft {
  color: #373b53;

  &::before,
  & .dot {
    background: #373b53;
  }
}
</style>
