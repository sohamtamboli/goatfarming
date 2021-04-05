<template>
  <v-treeview
    activatable
    dense
    hoverable
    transition
    :items="treeData"
  ></v-treeview>
</template>

<script>
import { imps } from '@/assets/data/impTree.js'
export default {
  data: () => ({
    treeData: imps,
  }),
}
</script>

<style lang="css" scoped></style>
