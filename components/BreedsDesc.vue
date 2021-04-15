<template>
  <div class="breed__grid">
    <div
      v-for="(breed, idx) in breedData"
      :key="breed.id"
      class="breed__wrapper"
    >
      <div class="primary__img__container">
        <div
          ref="activeImg"
          class="above__img"
          :style="{ backgroundImage: `url(${breed.img1})` }"
        ></div>
        <div class="secondary__img__container">
          <div
            ref="belowImg1"
            class="below__imgs"
            :style="{
              backgroundImage: `url(${breed.img1})`,
              backgroundSize: `100% 100%;`,
            }"
            @click="changeBg(1, idx)"
          ></div>
          <div
            ref="belowImg2"
            class="below__imgs"
            :style="{
              backgroundImage: `url(${breed.img2})`,
              backgroundSize: `100% 100%;`,
            }"
            @click="changeBg(2, idx)"
          ></div>
          <div
            ref="belowImg3"
            class="below__imgs"
            :style="{
              backgroundImage: `url(${breed.img3})`,
              backgroundSize: `100% 100%;`,
            }"
            @click="changeBg(3, idx)"
          ></div>
        </div>
      </div>
      <div class="info__wrapper mt-16">
        <h2 class="info__title mb-4">{{ breed.title }}</h2>
        <v-row justify="space-between">
          <v-col cols="4">
            <b> {{ breed.origin }}: </b>
          </v-col>
          <v-col class="text-left" cols="8">
            {{ breed.originValue }}
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col cols="4">
            <b> {{ breed.specifications }}: </b>
          </v-col>
          <v-col class="text-left" cols="8">
            <div>{{ breed.specificationsValueOne }}</div>
            <div>{{ breed.specificationsValueTwo }}</div>
          </v-col>
        </v-row>
        <v-row v-if="breed.produceValue" justify="space-between">
          <v-col cols="4">
            <b> {{ breed.produce }}: </b>
          </v-col>
          <v-col class="text-left" cols="8">
            {{ breed.produceValue }}
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col cols="4">
            <b> {{ breed.milkProduce }}: </b>
          </v-col>
          <v-col class="text-left" cols="8">
            {{ breed.milkProduceValue }}
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { breeds } from '@/assets/data/breeds.json'
export default {
  data: () => ({
    breedData: breeds,
    thumb1: breeds.img1,
    thumb2: breeds.img2,
    thumb3: breeds.img3,
    background: '',
  }),
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$refs.belowImg1[0].style)
  },
  methods: {
    changeBg(n, i) {
      if (n === 1) {
        return (this.$refs.activeImg[
          i
        ].style.backgroundImage = this.$refs.belowImg1[i].style.backgroundImage)
      }
      if (n === 2) {
        return (this.$refs.activeImg[
          i
        ].style.backgroundImage = this.$refs.belowImg2[i].style.backgroundImage)
      }
      if (n === 3) {
        return (this.$refs.activeImg[
          i
        ].style.backgroundImage = this.$refs.belowImg3[i].style.backgroundImage)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.breed__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.breed__wrapper {
  display: flex;
  grid-gap: 32px;
  gap: 32px;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid #ccc; */
}
.info__title {
  text-align: center;
}
.info__para {
  text-align: justify;
}

.primary__img__container {
  width: 300px;
  height: 300px;
  object-fit: contain;
}
.above__img {
  background: red;
  width: inherit;
  height: inherit;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border: 1px solid #212121;
}
.secondary__img__container {
  width: 300px;
  height: 80px;
  display: flex;
  object-fit: contain;
}
.below__imgs {
  flex: 1;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  object-fit: contain;
  border: 1px solid #212121;
}

@media only screen and (max-width: 600px) {
  .breed__wrapper {
    gap: 16px;
  }
  .primary__img__container {
    width: 200px;
    height: 200px;
  }
  .secondary__img__container {
    width: 200px;
    height: 50px;
  }
}
</style>
