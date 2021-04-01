<template>
  <Fragment>
    <v-list-item v-for="(plan, idx1) in plandata" :key="idx1">
      <v-list-item-content>{{ plan.selfInvest }}</v-list-item-content>
      <v-list-item-content class="align-end justify-center">
        {{ plan.selfInvestValue }}
      </v-list-item-content>
    </v-list-item>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  components: {
    Fragment,
  },
  props: {
    plandata: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
