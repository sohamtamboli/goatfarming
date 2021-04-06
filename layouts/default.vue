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
          <nuxt-link v-show="routeCheck" class="menu__links" to="/"
            >Home</nuxt-link
          >
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

    <v-main id="#app">
      <!-- <div v-if="isDesktop" class="nav__container" :class="themeCheck">
        <div class="left__menu">
          <nuxt-link class="menu__links" :class="themeCheck" to="/about"
            >About</nuxt-link
          >
          <v-img src="/navlogo.png" max-height="50" max-width="210" contain
      />
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
      <v-btn v-show="routeCheck">
        <span><nuxt-link to="/" class="bottom__links">Home</nuxt-link></span>
      </v-btn>
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
    <v-footer dark app absolute>
      <v-container>
        <v-card flat class="grid__wrapper">
          <v-card-title class="header1"
            >Connect with Us on Social Media</v-card-title
          >
          <v-card-text class="content1">
            <v-btn v-for="icon in icons" :key="icon.link" icon>
              <a :href="icon.link" target="_blank" class="social__icons">
                <v-icon size="24px">
                  {{ icon.icon }}
                </v-icon>
              </a>
            </v-btn>
          </v-card-text>
          <v-card-title class="header2">Quick Links</v-card-title>
          <v-card-text class="content2">
            <ul class="quick__links__list">
              <li>
                <h4><nuxt-link to="/" class="quick__links">Home</nuxt-link></h4>
              </li>
              <li>
                <h4>
                  <nuxt-link to="/about" class="quick__links">About</nuxt-link>
                </h4>
              </li>
              <li>
                <h4>
                  <nuxt-link to="/contact" class="quick__links"
                    >Contact Us</nuxt-link
                  >
                </h4>
              </li>
            </ul>
          </v-card-text>
          <v-card-title class="header3">Address/Phone</v-card-title>
          <div class="content3">
            <v-card-text class="icon__contain"
              ><v-icon size="20px"> mdi-cellphone </v-icon> Dr. Shivjatak
              pandurang <br />
              9130969688 <br />
              7666639838 <br />
              9325264343
            </v-card-text>
            <v-card-text class="icon__contain"
              ><v-icon size="20px"> mdi-email </v-icon>
              passplusagropltd@gmail.com
            </v-card-text>
            <v-card-text class="icon__contain">
              <v-icon size="20px"> mdi-map-marker </v-icon>
              A/P KANDE [R52-17], KANDE, SANGLI, Sangli, Maharashtra, India,
              415416.
            </v-card-text>
          </div>
        </v-card>
      </v-container>

      <v-col class="text-center" cols="12">
        <v-divider></v-divider> <br />
        <a href="https://reccemedia.co.in/" target="_blank" class="recce__link">
          {{ new Date().getFullYear() }} — <strong>Recce</strong>
        </a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { link: 'https://www.facebook.com/', icon: 'mdi-facebook' },
      { link: 'https://twitter.com/', icon: 'mdi-twitter' },
      { link: 'https://www.linkedin.com/', icon: 'mdi-linkedin' },
      { link: 'https://www.instagram.com/', icon: 'mdi-instagram' },
    ],
  }),
  computed: {
    themeCheck() {
      if (this.$route.path === '/') {
        return 'light'
      }
      return 'dark'
    },
    routeCheck() {
      if (this.$route.path === '/') {
        return false
      }
      return true
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
  padding: 2rem 1rem;
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

.quick__links__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 10px;
  list-style: none;
  padding: 0;
}
.quick__links {
  text-decoration: none;
  color: #fff;
  padding: 0 12px;
}
.grid__wrapper {
  display: grid;
  justify-content: center;
  grid-template-rows: 0.3fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'h1 h2 h3'
    'c1 c2 c3';
  width: 100%;
  background: transparent;
  gap: 32px;
}

.icon__contain {
  display: flex;
  gap: 12px;
  align-items: baseline;
}
.header1 {
  grid-area: h1;
}
.header2 {
  grid-area: h2;
}
.header3 {
  grid-area: h3;
}
.content1 {
  grid-area: c1;
}
.content2 {
  grid-area: c2;
}
.content3 {
  grid-area: c3;
}
.social__icons {
  text-decoration: none;
  color: #fff;
  font-weight: 300;
}
.recce__link {
  text-decoration: none;
  color: #ddd;
}
@media only screen and (max-width: 600px) {
  .grid__wrapper {
    grid-auto-flow: column;
    grid-template-rows: 0.3fr 1fr 0.3fr 1fr 0.3fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'h1'
      'c1'
      'h2'
      'c2'
      'h3'
      'c3';
    width: 100%;
    background: transparent;
    gap: 0;
  }
}
</style>
