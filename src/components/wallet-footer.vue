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

  @media (max-width: 769px) {
    justify-content: space-between;
  }
}

.footer__title {
  padding: 0;
  margin: 0;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 22px;
  font-weight: 600;

  @media (max-width: 769px) {
    font-size: 16px;
  }
}

.footer__copyright {
  padding: 0;
  margin: 0;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 17px;
  font-weight: 400;
  margin-left: 10px;
  opacity: 0.3;

  @media (max-width: 769px) {
    margin: 0;
    font-size: 10px;
  }
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

  @media (max-width: 769px) {
    margin: 0;
    font-size: 10px;
  }
}
</style>
