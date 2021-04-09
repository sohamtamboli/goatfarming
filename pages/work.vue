<template>
  <v-container class="flow__container">
    <Heading title="Work Flow" />
    <v-timeline align-top>
      <v-timeline-item
        v-for="(i, idx) in flowData"
        :key="`${i.id}-${idx}`"
        hide-dot
      >
        <template v-slot:opposite class="right__aligned">
          <span>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="500"
              max-width="300"
              class="img"
              contain
              :class="idx % 2 ? `odd` : `even`"
              :src="i.img"
            ></v-img>
          </span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline"> {{ i.title }} </v-card-title>
          <v-card-text>
            {{ i.para }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-tooltip top color="rgb(0,0,0)">
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
          <v-btn
            color="red darken-1"
            fab
            dark
            large
            fixed
            bottom
            right
            href="/Company Work Process.pdf"
            download
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <span>Download PDF</span>
    </v-tooltip>
    <section class="page__section">
      <div class="spacer" />
    </section>
  </v-container>
</template>

<script>
import { flow } from '@/assets/data/flow.json'
export default {
  data: () => ({
    flowData: flow,
  }),
  head() {
    return {
      title: 'Workflow - Anjali Goatfarms',
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
.flow__container {
  margin-bottom: 2rem;
  height: auto;
}
.right__aligned {
  display: flex !important;
  justify-content: flex-end !important;
}
.right__aligned .img {
  justify-content: flex-end !important;
}

.v-timeline-item__opposite {
  display: flex !important;
  justify-content: flex-end !important;
}
.page__section {
  padding: 3rem 0;
}
.spacer {
  height: 12px;
  margin: 6rem 0;
}
.even {
  margin-left: auto;
}
</style>
