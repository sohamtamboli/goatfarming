<template>
  <Fragment>
    <v-card-title v-for="(title, idx) in titles" :key="idx">
      {{ title.name }}
    </v-card-title>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  components: {
    Fragment,
  },
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="css" scoped></style>
