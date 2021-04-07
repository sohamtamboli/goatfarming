<template>
  <no-ssr>
    <carousel
      :autoplay="true"
      :nav="true"
      :dots="false"
      :responsive="{ 0: { items: 1 }, 600: { items: 3 }, 800: { items: 5 } }"
      :stage-padding="20"
      loop
    >
      <div
        v-for="goat in goatData.data"
        :key="goat.title"
        class="breed__card__wrapper"
      >
        <div class="img__wrapper">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            :src="goat.src"
            width="100%"
            height="100%"
            contain
            class="breed__img"
          >
          </v-img>
        </div>
        <h2 class="img__title text-center">{{ goat.title }}</h2>
      </div>
    </carousel>
  </no-ssr>
</template>

<script>
import goatBreedData from '@/assets/data/breeds.json'
export default {
  data: () => ({
    goatData: goatBreedData,
  }),
}
</script>

<style lang="css" scoped>
.container__card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img__title {
  font-weight: 300;
  padding: 12px 0;
}
.breed__card__wrapper {
  background: #fff;
  margin: 0 1rem;
  padding: 10px 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: auto 12px;
}
.breed__img {
  border-radius: 20px 20px 0 0;
}
.img__wrapper {
  /* width: 300px;
  height: 300px; */
  width: 100%;
  height: 100%;
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
    width: 250px;
    height: 300px;
  }
  .breed__card__wrapper {
    margin: 0 0.5rem;
  }
}
</style>
