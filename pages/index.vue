<template>
  <div class="app-wrapper">
    <section>
      <div id="banner" class="bg__wrappper">
        <video autoplay muted loop class="bg-video">
          <source v-if="videoSrc" :src="videoSrc" type="video/mp4" />
        </video>
        <div class="content__wrapper">
          <div
            data-aos="fade-in"
            data-aos-duration="4000"
            class="word__wrapper"
          >
            Build <i>your</i> Goat Farms <br />
            <i>with</i> Anjali Goat Farming
          </div>
          <nuxt-link
            to="/contact"
            class="btn"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="1"
            data-aos-easing="ease-out-back"
            >Enquire</nuxt-link
          >
        </div>
      </div>
    </section>
    <section class="page__section">
      <v-container>
        <Heading title="Importance" />
        <Importance :treedata="impCardsData" class="card__grid" />
      </v-container>
    </section>
    <section id="services" class="carousel__wrapper page__section">
      <v-container>
        <Heading title="Services" dark />
        <Services />
        <!-- <Breeds
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        /> -->
      </v-container>
    </section>
    <section id="plans" class="page__section">
      <v-container>
        <Heading title="Plans" />
        <PlanCard />
      </v-container>
    </section>
    <section class="page__section">
      <div class="spacer" />
    </section>
  </div>
</template>

<script>
// import Breeds from '@/components/Breeds'
import Services from '@/components/Services'
import PlanCard from '@/components/PlanCard'
import Importance from '@/components/Importance'
import Heading from '@/components/Heading'
import { imps } from '@/assets/data/impTree.js'

export default {
  components: {
    // Breeds,
    Services,
    PlanCard,
    Importance,
    Heading,
  },
  data: () => ({
    videoSrc: undefined,
    impCardsData: imps,
  }),

  mounted() {
    if (this.isMobile()) {
      this.videoSrc = '/vidMobile.mp4'
      // debugger
    } else {
      this.videoSrc = '/vidDesktop.mp4'
      // debugger
    }
  },

  methods: {
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
  head() {
    return {
      title: 'Home - Anjali Goatfarms',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Goat Farming is a business which can be achieved with the help of less investment and also less space. In closed goat farming, the fodder required to feed the goats is given to them in the cowshed. Also, goats require less amount of food compared to other animals.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'anjalibusinessgroup, anjali goat farming, anjali business, anjali group, passplus, goat, farming, goatfarming, agro, agriculture,',
        },
        {
          hid: 'author',
          name: 'author',
          content: 'sohamtamboli',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.anjalibusinessgroup.com',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Anjali Goat Farms',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Goat Farming is a business which can be achieved with the help of less investment and also less space. In closed goat farming, the fodder required to feed the goats is given to them in the cowshed. Also, goats require less amount of food compared to other animals.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Anjali Goat Farms',
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'en_us',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@anjalibusinessgroup',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@reccemedia',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://www.anjalibusinessgroup.com/',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Anjali Goat Farms',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Goat Farming is a business which can be achieved with the help of less investment and also less space. In closed goat farming, the fodder required to feed the goats is given to them in the cowshed. Also, goats require less amount of food compared to other animals.',
        },
      ],
      link: [
        {
          rel: 'author',
          href: 'https://github.com/sohamtamboli',
        },
        {
          rel: 'canonical',
          href: '//anjalibusinessgroup.com/',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Halant&display=swap');
.carousel__wrapper {
  background: #212121;

  z-index: 1;
  position: relative;
}

.card__grid {
  width: 100%;
}
.bg__wrappper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)),
    url('@/static/banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 85vh;
  margin-top: -80px;
  display: grid;
  place-items: center;
  color: #fff;
  position: relative;
}
.content__wrapper {
  text-align: center;
  font-size: 30px;
  position: relative;
}
.title {
  font-size: 2.5em;
}
.subtitle {
  font-size: 1.5em;
  margin-bottom: 1rem;
}
.btn {
  font-size: 2rem;
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 30px;
  outline: none;
  border: none;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.btn:hover {
  background: #ff4848;
  color: white;
}
.spacer {
  height: 12px;
  margin: 6rem 0;
}
.app-wrapper {
  background-color: #fff;
  background-image: linear-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ),
    url('https://unsplash.com/photos/izzit01AX_U/download?w=2400');
  background-repeat: no-repeat;
  background-position: bottom;
  padding-bottom: 2rem;
  @media only screen and (max-width: 600px) {
    background-image: linear-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      ),
      url('https://unsplash.com/photos/QSK3gaRlq3Y/download?w=640');
    background-repeat: no-repeat;
    background-position: bottom;
    background-color: #fff;
  }
}
.btn:focus {
  outline: none;
  border: none;
}
.breeds__container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  padding: 1rem;
}
.cards__container {
  margin: 0 auto;
  display: grid;
  gap: 32px;
  padding: 1rem;
  grid-template-columns: repeat(4, 300px);
}
.bg-video {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100vw;
  height: 85vh;
  object-fit: fill;
}
.word__line {
  font-weight: 700;
}
.word__wrapper {
  padding: 2rem;
  font-size: 6rem;
  font-family: 'Halant', serif;
  font-weight: 300;
}
.page__section {
  padding: 3rem 0;
}
@media only screen and (max-width: 1200px) {
  .cards__container {
    grid-template-columns: repeat(2, 280px);
    grid-template-rows: 1fr 1fr;
  }
}
@media only screen and (max-width: 600px) {
  .cards__container {
    grid-template-columns: repeat(2, 150px);
    grid-template-rows: 1fr 1fr;
    padding: 0.5rem;
  }
  .breeds__container {
    margin: 0.8rem;
    padding: 0.5rem;
  }
  .word__wrapper {
    font-size: 32px;
  }
  .btn {
    font-size: 1rem;
  }
}
</style>
