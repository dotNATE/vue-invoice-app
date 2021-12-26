import { createStore } from "vuex";
import getInvoices from "@/services/invoice";

export default createStore({
  state: {
    isLoading: false,
    invoices: [],
  },
  mutations: {
    SET_LOADING_STATUS(state, status: boolean): void {
      state.isLoading = status;
    },
    SET_INVOICES(state, payload): void {
      state.invoices = payload;
    },
  },
  actions: {
    async fetchInvoices(context) {
      context.commit("SET_LOADING_STATUS", true);
      getInvoices()
        .then((response) => {
          context.commit("SET_LOADING_STATUS", false);
          context.commit("SET_INVOICES", response.data);
        })
        .catch((err) => {
          context.commit("SET_LOADING_STATUS", false);

          console.log(err);
        });
    },
  },
  modules: {},
});
