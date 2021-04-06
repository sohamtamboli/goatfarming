<template>
  <v-app>
    <v-app-bar v-show="isDesktop" prominent app hide-on-scroll fixed>
      <div class="navbar">
        <div class="logo__container">
          <nuxt-link to="/"
            ><v-img src="/navlogo.png" max-height="80" max-width="210" contain
          /></nuxt-link>
        </div>
        <!-- <v-spacer></v-spacer> -->
        <div class="right__menu">
          <nuxt-link class="menu__links" to="/about">About</nuxt-link>
          <nuxt-link class="menu__links" :to="{ path: '/', hash: '#breeds' }"
            >Breeds</nuxt-link
          >
          <nuxt-link class="menu__links" :to="{ path: '/', hash: '#plans' }"
            >Plans</nuxt-link
          >
          <nuxt-link class="menu__links" to="/contact">Contact Us</nuxt-link>
        </div>
      </div>
    </v-app-bar>
    <v-app-bar v-if="!isDesktop" elevate-on-scroll app fixed>
      <nuxt-link to="/"
        ><v-img src="/navlogo.png" max-height="80" max-width="210" contain
      /></nuxt-link>
    </v-app-bar>
    <v-main id="#app">
      <!-- <div v-if="isDesktop" class="nav__container" :class="themeCheck">
        <div class="left__menu">
          <nuxt-link class="menu__links" :class="themeCheck" to="/about"
            >About</nuxt-link
          >
          <nuxt-link class="menu__links" :class="themeCheck" to="#"
            >Breeds</nuxt-link
          >
          <nuxt-link class="menu__links" :class="themeCheck" to="#"
            >Plans</nuxt-link
          >
        </div>
        <div class="logo__container">
          <nuxt-link to="/">
            <img src="/v.png" alt="" class="logo" />
          </nuxt-link>
        </div>
        <div class="right__menu">
          <nuxt-link class="menu__links" :class="themeCheck" to="/contact"
            >Contact Us</nuxt-link
          >
        </div>
      </div> -->
      <nuxt />
    </v-main>
    <v-bottom-navigation
      v-if="!isDesktop"
      fixed
      color="white"
      hide-on-scroll
      horizontal
      app
    >
      <v-btn>
        <span
          ><nuxt-link to="/about" class="bottom__links">About</nuxt-link></span
        >
      </v-btn>

      <v-btn>
        <span
          ><nuxt-link class="bottom__links" :to="{ path: '/', hash: '#breeds' }"
            >Breeds</nuxt-link
          ></span
        >
      </v-btn>

      <v-btn>
        <span
          ><nuxt-link class="bottom__links" :to="{ path: '/', hash: '#plans' }"
            >Plans</nuxt-link
          ></span
        >
      </v-btn>
      <v-btn>
        <span
          ><nuxt-link class="bottom__links" to="/contact"
            >Contact Us</nuxt-link
          ></span
        >
      </v-btn>
    </v-bottom-navigation>
    <v-footer app absolute>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Recce</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    themeCheck() {
      if (this.$route.path === '/') {
        return 'light'
      }
      return 'dark'
    },
    isDesktop() {
      if (process.browser) {
        if (
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
        ) {
          return false
        }

        return true
      }

      return false
    },
  },
}
</script>

<style scoped>
.logo {
  height: 60px;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottom__links {
  text-decoration: none;
  color: #000;
}
.nav__container {
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'lg rightm';
  height: 80px;
  padding: 1rem 2rem;
  margin: 0 auto;
}
.menu__links {
  text-decoration: none;
  color: #000;
  padding: 2rem 3rem;
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
.dark {
  color: #000;
}
.light {
  color: #fff;
}
.nuxt-link-exact-active {
  color: orange;
}
</style>
