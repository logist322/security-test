<template>
  <li
    class="main__item wallet-item"
    :class="{ 'wallet-item--active': isInputOpened || isOutputOpened }"
  >
    <h2 class="wallet-item__title">
      {{ currency.name }}
      {{
        currency.count >= 1
          ? currency.count.toFixed(2)
          : currency.count.toPrecision(2)
      }}
    </h2>
    <div class="wallet-item__buttons-wrap">
      <button
        @click="inputClickHandler"
        class="wallet-item__button"
        :class="{ 'wallet-item__button--active': isInputOpened }"
      >
        Deposit
      </button>
      <button
        @click="outputClickHandler"
        class="wallet-item__button"
        :class="{ 'wallet-item__button--active': isOutputOpened }"
        :disabled="!currency.count"
      >
        Withdrawal
      </button>
    </div>
  </li>
  <slot
    v-if="isInputOpened || isOutputOpened"
    name="form"
    :isInputOpened="isInputOpened"
  ></slot>
</template>

<script>
export default {
  name: "WalletItem",

  data() {
    return {
      isInputOpened: false,
      isOutputOpened: false
    };
  },

  watch: {
    currency(newValue) {
      if (newValue.count === 0) this.isOutputOpened = false;
    }
  },

  props: {
    currency: {
      type: Object
    }
  },

  emits: {
    formAction: null
  },

  methods: {
    inputClickHandler() {
      this.isInputOpened = !this.isInputOpened;
      this.isOutputOpened = false;
      this.$emit("formAction");
    },

    outputClickHandler() {
      this.isOutputOpened = !this.isOutputOpened;
      this.isInputOpened = false;
      this.$emit("formAction");
    },

    closeForms() {
      this.isInputOpened = false;
      this.isOutputOpened = false;
    }
  }
};
</script>

<style lang="scss">
.wallet-item {
  margin: 0;
  padding: 40px 45px;
  background-color: rgba(253, 244, 241, 0.45);
  min-width: 390px;
  border: 2px solid #000000;
  border-radius: 4px;
  flex-grow: 1;

  &--active {
    border: 2px solid #045b98;
    box-shadow: 0 0 0 3px #045b98;
  }
}

.wallet-item__title {
  margin: 0;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 50px;
  font-weight: 600;
}

.wallet-item__buttons-wrap {
  margin-top: 30px;
  display: flex;
  column-gap: 20px;
}

.wallet-item__button {
  position: relative;
  margin: 0;
  padding: 10px 50px 10px 16px;
  background-color: #ffffff;
  flex-grow: 1;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  border: 2px solid #000000;
  border-radius: 3px;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    right: 16px;
    transform: translate(-50%, -50%) rotate(135deg);
    width: 7px;
    height: 7px;
    border-top: 2px solid #000000;
    border-right: 2px solid #000000;
  }

  &:disabled {
    cursor: default;
    border: 2px solid #a7a7a7;

    &::after {
      border-top: 2px solid #a7a7a7;
      border-right: 2px solid #a7a7a7;
    }
  }

  &--active {
    background: rgba(4, 91, 152, 0.2);

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
