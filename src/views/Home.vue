<template>
  <main>
    <div>
      <h1>Invoices</h1>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();

    store.dispatch("fetchInvoices");
  },
});
</script>

<style lang="scss">
main {
  padding: 24px;
}

@media screen and (min-width: 768px) {
  main {
    padding: 48px;
  }
}
</style>
