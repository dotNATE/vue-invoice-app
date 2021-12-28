<script setup lang="ts">
import { defineProps } from "vue";
import { Invoice } from "@/types";
import StatusPill from "@/components/StatusPill.vue";

interface InvoiceProps {
  invoice: Invoice;
}

defineProps<InvoiceProps>();

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatToGBP = (value: number): string => {
  return currencyFormatter.format(value);
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const formatDate = (value: string): string => {
  const date = new Date(value);
  return dateFormatter.format(date);
};
</script>

<template>
  <div class="invoice">
    <h3 class="small"><span class="gray">#</span>{{ invoice.id }}</h3>
    <p class="gray">Due {{ formatDate(invoice.paymentDue) }}</p>
    <p class="gray">{{ invoice.clientName }}</p>
    <h3 class="small">{{ formatToGBP(invoice.total) }}</h3>
    <StatusPill :status="invoice.status" />
    <svg viewBox="-15 -15 40 40" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1l4 4-4 4"
        stroke="#7C5DFA"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.invoice {
  display: grid;
  grid-template-columns: repeat(5, 1fr) 48px;
  align-items: center;
  padding: 15px 0 15px 32px;
  background-color: white;
  border-radius: 6px;

  & svg {
    height: 39px;
  }
}
.gray {
  color: #7e88c3;
}
</style>
