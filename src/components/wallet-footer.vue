<template>
  <footer class="footer">
    <p class="footer__title">Test 2021.</p>
    <p class="footer__copyright">All rights reserved.</p>
    <a href="#" class="footer__privacy">Privacy Policy</a>
  </footer>
</template>

<script>
export default {
  name: "WalletFooter"
};
</script>

<style lang="scss">
.footer {
  margin-top: auto;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 25px 0;
  border-top: 2px solid rgba(28, 28, 28, 0.1);
}

.footer__title {
  padding: 0;
  margin: 0;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 22px;
  font-weight: 600;
}

.footer__copyright {
  padding: 0;
  margin: 0;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 17px;
  font-weight: 400;
  margin-left: 10px;
  opacity: 0.3;
}

.footer__privacy {
  padding: 0;
  margin: 0;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 17px;
  font-weight: 400;
  margin-left: auto;
  color: #000000;
  opacity: 0.3;
}
</style>
