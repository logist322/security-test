<template>
  <aside class="aside">
    <button
      class="aside__button aside__button--home aside__button--active"
      type="button"
    ></button>
    <button
      class="aside__button aside__button--favorites aside__button--active"
      type="button"
    ></button>
    <button class="aside__button aside__button--stats" type="button"></button>
    <button class="aside__button aside__button--cloud" type="button"></button>
    <button class="aside__button aside__button--faq" type="button"></button>
    <button class="aside__button aside__button--quit" type="button"></button>
  </aside>
</template>

<script>
export default {
  name: "AsideBar"
};
</script>

<style lang="scss">
.aside {
  position: fixed;
  left: 0;
  top: 0;
  width: 100px;
  height: 100vh;
  background-color: #045b98;
  border-right: 2px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 43px;
  padding-bottom: 37px;
}

.aside__button {
  width: 33px;
  height: 33px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.3;

  &:hover,
  &--active {
    opacity: 1;
  }

  &--home {
    width: 48px;
    height: 48px;
    background-image: url("../assets/img/home.svg");
    background-size: 40px 100%;
  }

  &--favorites {
    margin-top: 65px;
    background-image: url("../assets/img/favorites.svg");
    background-size: 23px 100%;
  }

  &--stats {
    margin-top: 40px;
    background-image: url("../assets/img/stats.svg");
    background-size: 28px 100%;
  }

  &--cloud {
    margin-top: 40px;
    background-image: url("../assets/img/cloud.svg");
    background-size: 29px 100%;
  }

  &--faq {
    margin-top: auto;
    background-image: url("../assets/img/faq.svg");
    background-size: 28px 100%;
  }

  &--quit {
    margin-top: 40px;
    background-image: url("../assets/img/quit.svg");
    background-size: 22px 100%;
  }
}
</style>
