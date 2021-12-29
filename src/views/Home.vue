<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

import Button from "@/components/buttons/Button.vue";
import Invoice from "@/components/Invoice.vue";

const store = useStore();

const invoices = computed(() => {
  return store.state.invoices;
});

const numOfInvoices = computed(() => {
  return invoices.value.length;
});

const invoiceCountMessage = computed(() => {
  return numOfInvoices.value
    ? `There are ${numOfInvoices.value} invoices`
    : "No invoices";
});
</script>

<template>
  <main>
    <header>
      <div>
        <h1 class="__header">Invoices</h1>
        <p class="__sub-header">
          {{ invoiceCountMessage }}
        </p>
      </div>
      <Button label="New Invoice" :icon="true" />
    </header>
    <section v-if="numOfInvoices" class="invoice-container">
      <Invoice
        v-for="invoice in invoices"
        :invoice="invoice"
        :key="invoice.id"
      />
    </section>
    <div class="invoice-container--empty" v-else>
      <img src="@/assets/illustration-empty.svg" alt="no invoices" />
      <h2>There is nothing here</h2>
      <div>
        <p>Create an invoice by clicking the</p>
        <p><span class="bold">New Invoice</span> button and get started</p>
      </div>
    </div>
  </main>
</template>
