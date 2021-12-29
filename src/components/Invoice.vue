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
    <h3 class="small id"><span class="gray">#</span>{{ invoice.id }}</h3>
    <p class="gray date">Due {{ formatDate(invoice.paymentDue) }}</p>
    <p class="gray name">{{ invoice.clientName }}</p>
    <h3 class="small total">{{ formatToGBP(invoice.total) }}</h3>
    <div class="status">
      <StatusPill :status="invoice.status" />
    </div>
    <svg
      viewBox="-15 -15 40 40"
      xmlns="http://www.w3.org/2000/svg"
      class="chevron"
    >
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
  background-color: white;
  border-radius: 6px;
  border: 2px solid transparent;
  cursor: pointer;
  margin-bottom: 8px;
  white-space: nowrap;
  padding: 15px;

  grid-template-areas:
    "id . name"
    "date . status"
    "amount . status";

  & .date {
  }

  & .name {
    text-align: end;
  }

  & .status {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  & .chevron {
    display: none;
  }
}
.gray {
  color: #7e88c3;
}

@media screen and (max-width: 768px) {
  & .id {
    grid-area: id;
  }

  & .date {
    grid-area: date;
    margin-bottom: -6px;
  }

  & .name {
    grid-area: name;
  }

  & .total {
    grid-area: amount;
  }

  .status {
    grid-area: status;
  }
}

@media screen and (min-width: 768px) {
  .invoice {
    grid-template-columns: repeat(4, 1fr) 104px 48px;
    align-items: center;
    max-height: 72px;
    gap: 10px;

    & .chevron {
      height: 39px;
      display: block;
    }

    & .total {
      text-align: end;
    }

    &:hover {
      border: 2px solid #7c5dfa;
    }
  }
}
</style>
