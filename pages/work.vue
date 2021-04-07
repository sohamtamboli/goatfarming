<template>
  <v-container class="flow__container">
    <Heading title="Work Flow" />
    <v-timeline align-top>
      <v-timeline-item v-for="i in flowData" :key="i.id" hide-dot>
        <template v-slot:opposite class="right__aligned">
          <span>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="500"
              max-width="300"
              class="img"
              contain
              src="https://picsum.photos/id/11/500/300"
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
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <span>Download PDF</span>
    </v-tooltip>
  </v-container>
</template>

<script>
import { flow } from '@/assets/data/flow.json'
export default {
  data: () => ({
    flowData: flow,
  }),
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
</style>
