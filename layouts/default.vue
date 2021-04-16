/* eslint-disable no-useless-escape */
<template>
  <v-app>
    <v-app-bar v-if="isDesktop" prominent app fixed>
      <div class="navbar">
        <div class="logo__container">
          <nuxt-link to="/"
            ><v-img src="/navlogo.webp" max-height="80" max-width="210" contain
          /></nuxt-link>
        </div>
        <!-- <v-spacer></v-spacer> -->
        <div v-if="isDesktop" class="right__menu">
          <nuxt-link v-show="routeCheck" class="menu__links" to="/">{{
            $store.state.language.language === `english` ? `Home` : `मुख्यपृष्ठ`
          }}</nuxt-link>
          <nuxt-link class="menu__links" to="/about">{{
            $store.state.language.language === `english`
              ? `About`
              : `आमच्या बद्दल`
          }}</nuxt-link>
          <nuxt-link
            class="menu__links"
            :to="{ path: '/', hash: '#services' }"
            >{{
              $store.state.language.language === `english` ? `Services` : `सेवा`
            }}</nuxt-link
          >
          <nuxt-link class="menu__links" :to="{ path: '/', hash: '#plans' }">{{
            $store.state.language.language === `english` ? `Plans` : `योजना`
          }}</nuxt-link>

          <nuxt-link class="menu__links" to="/breeds">{{
            $store.state.language.language === `english` ? `Breeds` : `जाती`
          }}</nuxt-link>
          <nuxt-link class="menu__links" to="/sister-concerns">{{
            $store.state.language.language === `english`
              ? `Sister Concerns`
              : `सहयोगी कंपन्या`
          }}</nuxt-link>
          <nuxt-link class="menu__links" to="/contact">{{
            $store.state.language.language === `english`
              ? `Register`
              : `नोंदणी करा`
          }}</nuxt-link>
        </div>
      </div>
    </v-app-bar>
    <v-app-bar v-if="!isDesktop" app fixed>
      <v-app-bar-nav-icon
        v-if="!isDesktop"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <nuxt-link to="/"
        ><v-img
          class="navLogo"
          src="/navlogo.webp"
          max-height="50"
          max-width="105"
          contain
      /></nuxt-link>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed height="100vh">
      <v-list nav dense>
        <v-list-item
          ><div>
            <nuxt-link to="/"
              ><img
                class="logo"
                src="/navlogo.webp"
                max-height="80"
                max-width="210"
                contain
            /></nuxt-link></div
        ></v-list-item>
        <v-list-item-group v-model="group">
          <v-list-item v-show="routeCheck">
            <v-list-item-title
              ><nuxt-link to="/" class="bottom__links">{{
                $store.state.language.language === `english`
                  ? `Home`
                  : `मुख्यपृष्ठ`
              }}</nuxt-link></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><nuxt-link to="/about" class="bottom__links">{{
                $store.state.language.language === `english`
                  ? `About`
                  : `आमच्या बद्दल`
              }}</nuxt-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><nuxt-link
                class="bottom__links"
                :to="{ path: '/', hash: '#services' }"
                >{{
                  $store.state.language.language === `english`
                    ? `Services`
                    : `सेवा`
                }}</nuxt-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><nuxt-link
                class="bottom__links"
                :to="{ path: '/', hash: '#plans' }"
                >{{
                  $store.state.language.language === `english`
                    ? `Plans`
                    : `योजना`
                }}</nuxt-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><nuxt-link class="bottom__links" to="/breeds">{{
                $store.state.language.language === `english` ? `Breeds` : `जाती`
              }}</nuxt-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><nuxt-link class="bottom__links" to="/sister-concerns">{{
                $store.state.language.language === `english`
                  ? `Sister Concerns`
                  : `सहयोगी कंपन्या`
              }}</nuxt-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><nuxt-link class="bottom__links" to="/contact">{{
                $store.state.language.language === `english`
                  ? `Register`
                  : `नोंदणी करा`
              }}</nuxt-link></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main id="#app">
      <nuxt />
      <v-fab-transition>
        <v-btn
          color="#ff4848"
          elevation="2"
          fab
          fixed
          bottom
          right
          class="white--text"
          @click="switchLang"
        >
          <v-icon>mdi-google-translate</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-main>

    <v-footer dark app absolute class="footer__container">
      <v-container>
        <v-card flat class="grid__wrapper">
          <v-card-title class="header1">{{
            $store.state.language.language === `english`
              ? `Connect with Us on Social Media`
              : `सोशल मीडियावर आमच्याशी संपर्क साधा`
          }}</v-card-title>
          <v-card-text class="content1">
            <v-btn v-for="icon in icons" :key="icon.link" icon>
              <a :href="icon.link" target="_blank" class="social__icons">
                <v-icon size="24px">
                  {{ icon.icon }}
                </v-icon>
              </a>
            </v-btn>
          </v-card-text>
          <v-card-title class="header2">
            {{
              $store.state.language.language === `english`
                ? `Quick Links`
                : `क्विक लिंक`
            }}</v-card-title
          >
          <v-card-text class="content2">
            <ul class="quick__links__list">
              <li>
                <h4>
                  <nuxt-link to="/" class="quick__links">
                    {{
                      $store.state.language.language === `english`
                        ? `Home`
                        : `मुख्यपृष्ठ`
                    }}
                  </nuxt-link>
                </h4>
              </li>
              <li>
                <h4>
                  <nuxt-link to="/about" class="quick__links">
                    {{
                      $store.state.language.language === `english`
                        ? `About`
                        : `आमच्या बद्दल`
                    }}</nuxt-link
                  >
                </h4>
              </li>
              <li>
                <h4>
                  <nuxt-link
                    :to="{ path: '/', hash: '#services' }"
                    class="quick__links"
                  >
                    {{
                      $store.state.language.language === `english`
                        ? `Services`
                        : `सेवा`
                    }}
                  </nuxt-link>
                </h4>
              </li>
              <li>
                <h4>
                  <nuxt-link to="/sister-concerns" class="quick__links">
                    {{
                      $store.state.language.language === `english`
                        ? `Sister Concerns`
                        : `सहयोगी कंपन्या`
                    }}</nuxt-link
                  >
                </h4>
              </li>
              <li>
                <h4>
                  <nuxt-link to="/contact" class="quick__links">
                    {{
                      $store.state.language.language === `english`
                        ? `Register`
                        : `नोंदणी करा`
                    }}
                  </nuxt-link>
                </h4>
              </li>
            </ul>
          </v-card-text>
          <v-card-title class="header3">
            {{
              $store.state.language.language === `english`
                ? `Address/Phone`
                : `पत्ता / फोन`
            }}</v-card-title
          >
          <div class="content3">
            <v-card-text class="icon__contain"
              ><v-icon size="20px"> mdi-account </v-icon
              >{{
                $store.state.language.language === `english`
                  ? `Dr. Shivjatak Pandurang`
                  : `डॉ. शिवजातक पांडुरंग`
              }}
              <br
            /></v-card-text>
            <v-card-text class="icon__contain">
              <span class="icon__contain">
                <v-icon size="20px"> mdi-cellphone </v-icon>
                <Tooltip content="7666639838" />
              </span>
              <span class="mobNumbers">
                <span class="icon__contain">
                  <v-icon size="20px"> mdi-whatsapp </v-icon>
                  <Tooltip content="9130969688" />
                </span>
                <span class="icon__contain">
                  <v-icon size="20px"> mdi-whatsapp </v-icon>
                  <Tooltip content="9325264343" />
                </span>
              </span>
            </v-card-text>
            <v-card-text class="icon__contain"
              ><v-icon size="20px"> mdi-email </v-icon>
              <Tooltip content="contact@anjalibusinessgroup.com" />
            </v-card-text>
            <v-card-text class="icon__contain mt-n4"
              ><v-icon size="20px"> mdi-email </v-icon>
              <Tooltip content="drpdshivajatak@gmail.com" />
            </v-card-text>
            <v-card-text class="icon__contain mt-n4"
              ><v-icon size="20px"> mdi-email </v-icon>
              <Tooltip content="passplusagropltd@gmail.com" />
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
import Tooltip from '~/components/Tooltip.vue'
export default {
  components: { Tooltip },
  data: () => ({
    icons: [
      { link: 'https://www.facebook.com/', icon: 'mdi-facebook' },
      { link: 'https://twitter.com/', icon: 'mdi-twitter' },
      { link: 'https://www.linkedin.com/', icon: 'mdi-linkedin' },
      { link: 'https://www.instagram.com/', icon: 'mdi-instagram' },
    ],
    isDesktop: false,
    drawer: false,
    group: null,
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
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  mounted() {
    this.isDesktop = !this.isMobile()
  },
  methods: {
    switchLang() {
      if (this.$store.state.language.language === `english`) {
        this.$store.commit('language/change', 'marathi')
        localStorage.setItem('language', 'marathi')
      } else {
        this.$store.commit('language/change', 'english')
        localStorage.setItem('language', 'english')
      }
    },
    isMobile() {
      let check = false
      ;(function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          // eslint-disable-next-line no-useless-escape
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true
      })(navigator.userAgent || navigator.vendor || window.opera)
      return check
    },
  },
}
</script>

<style scoped>
.logo {
  height: 80px;
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
.navLogo {
  margin-left: auto;
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
.mobNumbers {
  display: flex;
  flex-direction: column;
}
.header1 {
  grid-area: h1;
  overflow-wrap: normal;
  word-break: break-word;
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
.footer__container {
  margin-top: 2rem;
}
.recce__link {
  text-decoration: none;
  color: #ddd;
}
@media only screen and (max-width: 600px) {
  .grid__wrapper {
    grid-auto-flow: column;
    grid-template-rows: 0.3fr 0.3fr 0.3fr 0.3fr 0.3fr 0.5fr;
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
