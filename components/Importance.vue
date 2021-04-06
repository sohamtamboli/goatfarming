<template>
  <v-container>
    <div class="imp__cards__container">
      <v-card v-for="imp in treeData" :key="imp.id" flat class="imp__card">
        <v-card-title class="imp__title text-center">
          {{ imp.name }}
        </v-card-title>
        <hr />
        <v-card-text class="text-justify">
          {{ imp.para }}
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { imps } from '@/assets/data/impTree.js'
export default {
  data: () => ({
    treeData: imps,
  }),
}
</script>

<style lang="css" scoped>
.imp__cards__container {
  display: grid;
  gap: 48px;
  padding: 1rem;
  width: 100%;
  place-content: center;
  grid-template-columns: repeat(3, 380px);
}
.imp__title {
  text-align: center !important;
}

@media only screen and (max-width: 1200px) {
  .imp__cards__container {
    grid-template-columns: repeat(3, 280px);
    grid-template-rows: 1fr 1fr;
    gap: 32px;
  }
}
@media only screen and (max-width: 600px) {
  .imp__cards__container {
    grid-template-columns: repeat(1, 90%);
    grid-template-rows: 1fr 1fr;
    padding: 0.5rem;
    gap: 16px;
  }
}
</style>
