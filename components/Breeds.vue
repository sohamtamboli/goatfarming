<template>
  <div class="container__card">
    <div class="img__wrapper">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        :src="goat.src"
        width="100%"
        height="100%"
        contain
      ></v-img>
    </div>
    <h2 class="img__title">{{ goat.title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    goat: { type: Object, default: () => {} },
  },
}
</script>

<style lang="css" scoped>
.container__card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img__wrapper {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  /* background: rgb(52, 52, 52); */
  background: transparent;
}
@media only screen and (max-width: 1200px) {
  .img__wrapper {
    width: 250px;
    height: 250px;
  }
}
@media only screen and (max-width: 600px) {
  .img__wrapper {
    width: 150px;
    height: 150px;
  }
}
</style>
