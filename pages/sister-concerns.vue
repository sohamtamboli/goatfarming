<template>
  <div class="page__wrapper">
    <section class="page__section">
      <v-container>
        <Heading
          :title="
            $store.state.language.language === `english`
              ? `Anjali Business Group`
              : `अंजली व्यवसाय ग्रुप`
          "
        />
        <v-img
          src="/anjali.webp"
          width="50%"
          height="50%"
          contain
          class="logo__img"
        >
        </v-img>
        <Heading
          :title="
            $store.state.language.language === `english`
              ? `Our Sister Concerns`
              : `आमच्या सहयोगी कंपन्या`
          "
          small
          class="mt-16 pt-16"
        />
        <Importance :treedata="companyCardsData" class="card__grid" />
      </v-container>
    </section>
    <section class="page__section">
      <div class="spacer" />
    </section>
  </div>
</template>

<script>
import Importance from '@/components/Importance'
import { companies } from '@/assets/data/companyTree.js'
import { companiesM } from '@/assets/data/marathi/companyTree.js'
export default {
  components: {
    Importance,
  },
  computed: {
    companyCardsData() {
      if (this.$store.state.language.language === `english`) {
        return companies
      }
      return companiesM
    },
  },
  head() {
    return {
      title: 'Sister Companies - Anjali Goatfarms',
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

<style lang="css" scoped>
.page__section {
  padding: 3rem 0;
}
.card__grid {
  width: 100%;
}
.spacer {
  height: 12px;
  margin: 6rem 0;
}
.logo__img {
  margin: 0 auto;
}
.page__wrapper {
  background-color: #fafafa;
  background-image: linear-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ),
    url('https://unsplash.com/photos/izzit01AX_U/download?w=2400');
  background-repeat: no-repeat;
  background-position: bottom;

  @media only screen and (max-width: 600px) {
    background-image: linear-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      ),
      url('https://unsplash.com/photos/QSK3gaRlq3Y/download?w=640');
    background-repeat: no-repeat;
    background-position: bottom;
    background-color: #fafafa;
  }
}
</style>
