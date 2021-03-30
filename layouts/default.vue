<template>
  <div>
    <div class="nav__container">
      <div class="left__menu">
        <nuxt-link class="menu__links" to="/about">About</nuxt-link>
        <nuxt-link class="menu__links" to="#">Breeds</nuxt-link>
        <nuxt-link class="menu__links" to="#">Plans</nuxt-link>
      </div>
      <div class="logo__container">
        <nuxt-link to="/">
          <img src="/v.png" alt="" class="logo" />
        </nuxt-link>
      </div>
      <div class="right__menu">
        <nuxt-link class="menu__links" to="/contact">Contact Us</nuxt-link>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  height: 60px;
}

.nav__container {
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'leftm lg rightm';
  height: 80px;
  padding: 1rem 2rem;
  margin: 0 auto;
  color: #fff;
}
.menu__links {
  color: #fff;
  text-decoration: none;
}
.left__menu > .menu__links:not(:last-child) {
  margin-right: 2rem;
}
.left__menu {
  grid-area: leftm;
  place-self: center;
}
.logo__container {
  grid-area: lg;
  place-self: center;
}
.right__menu {
  grid-area: rightm;
  place-self: center;
}
</style>
