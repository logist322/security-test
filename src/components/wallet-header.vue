<template>
  <header class="header">
    <a href="#" class="header__ava">
      <img
        src="../assets/img/ava.png"
        alt="User`s photo"
        width="49"
        height="49"
      />
    </a>

    <p class="header__greeting">Welcome, Andrew</p>
  </header>
</template>

<script>
export default {
  name: "WalletHeader"
};
</script>

<style lang="scss">
.header {
  display: flex;
  padding: 25px 0;
  border-bottom: 2px solid rgba(28, 28, 28, 0.1);
}

.header__greeting {
  margin-left: 15px;
  font-family: "Inter", "Arial", sans-serif;
  font-weight: 500;
  font-size: 17px;
}
</style>
