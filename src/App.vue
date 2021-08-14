<template>
  <wallet-aside />
  <wallet-header />
  <wallet-main />
  <wallet-footer />
</template>

<script>
import WalletAside from "./components/wallet-aside.vue";
import WalletHeader from "./components/wallet-header.vue";
import WalletMain from "./components/wallet-main.vue";
import WalletFooter from "./components/wallet-footer.vue";

export default {
  name: "App",

  components: {
    WalletAside,
    WalletHeader,
    WalletMain,
    WalletFooter
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

img {
  display: block;
}

body {
  margin: 0;
  padding: 0 190px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 769px) {
    padding: 0 16px 0 76px;
  }
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  clip: rect(0 0 0 0);
  overflow: hidden;
}

@font-face {
  font-style: normal;
  font-weight: 400;
  font-family: "Inter";

  font-display: swap;
  src: local("Inter"), url("assets/fonts/Inter-Regular.ttf") format("truetype");
}

@font-face {
  font-style: normal;
  font-weight: 600;
  font-family: "Inter";

  font-display: swap;
  src: local("Inter"), url("assets/fonts/Inter-SemiBold.ttf") format("truetype");
}
</style>
