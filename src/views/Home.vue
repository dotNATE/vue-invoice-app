<template>
  <main>
    <header>
      <div>
        <h1 class="__header">Invoices</h1>
        <p class="__sub-header">There are {{ numOfInvoices }} invoices</p>
      </div>
      <Button label="New Invoice" :icon="true" />
    </header>
    <section v-if="numOfInvoices">
      <Invoice
        v-for="invoice in invoices"
        :invoice="invoice"
        :key="invoice.id"
      />
    </section>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

import Button from "@/components/buttons/Button.vue";
import Invoice from "@/components/Invoice.vue";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();

    const invoices = computed(() => {
      return store.state.invoices;
    });

    const numOfInvoices = computed(() => {
      return invoices.value.length;
    });

    return {
      invoices,
      numOfInvoices,
    };
  },
  components: {
    Button,
    Invoice,
  },
});
</script>

<style>
section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  border-radius: 8px;
}
</style>
