<template>
  <v-container>
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
