<template>
  <div class="about__container">
    <v-container class="text__container">
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

<style lang="scss" scoped>
.text__container {
  background-color: transparent;
}
.about__container {
  min-height: auto;
  margin-bottom: 2rem;

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
  }
}
.page__section {
  padding: 12rem 0;
  @media only screen and (max-width: 600px) {
    padding: 3rem 0;
  }
}
.spacer {
  height: 12px;
  margin: 6rem 0;
}
</style>
