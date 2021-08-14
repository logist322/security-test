<template>
  <form class="main__form wallet-form">
    <div class="wallet-form__amount-wrap">
      <input
        class="wallet-form__input"
        :class="{ 'wallet-form__input--alert': advise }"
        type="text"
        name="amount"
        id="amount"
        autocomplete="off"
        placeholder="Amount"
        v-model="amount"
      />
      <label class="wallet-form__label" for="amount"
        >Commission {{ currency.commission.value }}
        {{ currency.commission.type === "abs" ? currency.name : "%" }}.
        {{
          depositSelected
            ? "Minimal deposit sum " +
              currency.minsum +
              " " +
              currency.name +
              "."
            : ""
        }}
        <span>{{ advise }}</span>
      </label>
    </div>
    <input
      class="wallet-form__input"
      type="text"
      autocomplete="off"
      :name="currency.type === 'crypto' ? 'address' : 'requisites'"
      :placeholder="currency.type === 'crypto' ? 'Address' : 'Requisites'"
      v-model="requisites"
      v-if="!depositSelected"
    />
    <textarea
      class="wallet-form__input wallet-form__input--textarea"
      type="text"
      name="comment"
      placeholder="Comment"
      v-model="comment"
    ></textarea>
    <button
      class="wallet-form__button"
      type="submit"
      @click.prevent="submitHandler"
      :disabled="depositSelected ? !amount : !amount || !requisites"
    >
      Enter
    </button>
  </form>
</template>

<script>
export default {
  name: "CurrencyForm",

  props: {
    currency: {
      type: Object
    },

    depositSelected: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      amount: "",
      requisites: "",
      comment: "",
      advise: ""
    };
  },

  watch: {
    amount(newValue) {
      this.advise = "";

      let firstDot = true;

      this.amount = newValue
        .split("")
        .filter(char => {
          return (
            /\d/.test(char) ||
            (char === "." && firstDot ? ((firstDot = false), true) : false)
          );
        })
        .join("");
    },

    requisites(newValue) {
      this.requisites = newValue
        .split("")
        .filter(char => {
          return /\d/.test(char);
        })
        .join("");
    },

    depositSelected() {
      this.advise = "";
    }
  },

  methods: {
    submitHandler() {
      const validationResult = this.validateForm();

      if (validationResult.fail) {
        this.advise = validationResult.message;
        return false;
      }

      const formInfo = {
        name: this.currency.name,
        amount: Number(this.amount),
        comment: this.comment,
        requisites: this.requisites
      };

      this.depositSelected
        ? this.$emit("deposit", formInfo)
        : this.$emit("withdrawal", formInfo);

      (this.amount = ""), (this.requisites = ""), (this.comment = "");
    },

    validateForm() {
      if (this.depositSelected) {
        if (this.currency.minsum <= this.amount) {
          return {
            fail: false
          };
        } else {
          return {
            fail: true,
            message: `Enter an amount greater than ${this.currency.minsum} ${this.currency.name}.`
          };
        }
      }

      if (Number(this.amount) + this.getCommission() <= this.currency.count) {
        return {
          fail: false
        };
      } else {
        const maxSum =
          this.currency.commission.type === "abs"
            ? this.currency.count - this.currency.commission.value
            : (this.currency.count / (100 + this.currency.commission.value)) *
              100;
        const formatedMaxSum =
          maxSum >= 1 ? maxSum.toFixed(2) : maxSum.toPrecision(2);

        return {
          fail: true,
          message: `Enter an amount not more than ${formatedMaxSum} ${this.currency.name}.`
        };
      }
    },

    getCommission() {
      return this.currency.commission.type === "abs"
        ? this.currency.commission.value
        : (this.amount * this.currency.commission.value) / 100;
    }
  }
};
</script>

<style lang="scss">
.wallet-form {
  padding: 35px 45px;
  border: 2px solid #045b98;
  box-shadow: 0 0 0 3px #045b98;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 25px;
  column-gap: 45px;
}

.wallet-form__amount-wrap {
  display: flex;
  flex-direction: column;
}

.wallet-form__input {
  padding: 10px 16px;
  border: 2px solid #000000;
  border-radius: 3px;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  height: fit-content;

  &--alert {
    border-color: #ff0000;
  }

  &--textarea {
    height: 90px;
    resize: none;
    grid-column: 1 / -1;
  }
}

.wallet-form__label {
  font-family: "Inter", "Arial", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.3);
  margin-top: 10px;

  span {
    color: #ff0000;
  }
}

.wallet-form__button {
  padding: 10px 52px;
  background: #045b98;
  border: 2px solid #000000;
  border-radius: 3px;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  width: fit-content;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
}
</style>
