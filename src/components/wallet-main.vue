<template>
  <main class="main">
    <h1 class="visually-hidden">Wallet</h1>
    <ul class="main__list">
      <wallet-item
        v-for="currency of currencies"
        :currency="currency"
        :key="currency.name"
        @formAction="closeAnotherForms(currency.name)"
        :ref="currency.name"
      >
        <template #form="{isInputOpened}">
          <currency-form
            :currency="currency"
            :depositSelected="isInputOpened"
            @deposit="depositeHandler"
            @withdrawal="withdrawalHandler"
          />
        </template>
      </wallet-item>
    </ul>
  </main>
</template>

<script>
import WalletItem from "./wallet-item.vue";
import CurrencyForm from "./currency-form.vue";

import { getCurrencies, depositCurrency, withdrawalCurrency } from "../api.js";

export default {
  name: "WalletMain",

  components: {
    WalletItem,
    CurrencyForm
  },

  data() {
    return {
      currencies: []
    };
  },

  created() {
    this.currencies = getCurrencies();
  },

  methods: {
    closeAnotherForms(currentCurrency) {
      this.currencies.forEach(currency => {
        if (currentCurrency !== currency.name)
          this.$refs[currency.name].closeForms();
      });
    },

    depositeHandler({ name, amount, comment }) {
      this.currencies = depositCurrency(name, amount, comment);
    },

    withdrawalHandler({ name, amount, requisites, comment }) {
      this.currencies = withdrawalCurrency(name, amount, requisites, comment);
    }
  }
};
</script>

<style lang="scss">
.main {
  margin: 55px 0;
}

.main__list {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  grid-auto-flow: row dense;
  grid-column-gap: 40px;
  grid-row-gap: 30px;
}

.main__form {
  grid-column: 1 / -1;
}
</style>
