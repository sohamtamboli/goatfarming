<template>
  <div class="about__container">
    <v-container>
      <Preface />
      <Policy />
    </v-container>
    <section class="page__section">
      <div class="spacer" />
    </section>
  </div>
</template>

<script>
import Policy from '@/components/Policy'
import Preface from '@/components/Preface'
export default {
  components: {
    Policy,
    Preface,
  },
}
</script>

<style lang="css" scoped>
.about__container {
  min-height: auto;
  margin-bottom: 2rem;
}
.page__section {
  padding: 3rem 0;
}
.spacer {
  height: 12px;
  margin: 6rem 0;
}
</style>
