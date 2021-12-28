<template>
  <main>
    <header>
      <div>
        <h1 class="__header">Invoices</h1>
        <p class="__sub-header">There are {{ numOfInvoices }} invoices</p>
      </div>
      <Button label="New Invoice" />
    </header>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

import Button from "@/components/buttons/Button.vue";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();

    store.dispatch("fetchInvoices");

    const numOfInvoices = computed(() => {
      return store.state.invoices.length;
    });

    return {
      numOfInvoices,
    };
  },
  components: {
    Button,
  },
});
</script>
