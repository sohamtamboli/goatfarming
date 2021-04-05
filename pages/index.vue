<template>
  <div class="app-wrapper">
    <section>
      <div id="banner" class="bg__wrappper">
        <div class="content__wrapper">
          <nuxt-link to="/contact" class="btn">Enquire</nuxt-link>
        </div>
      </div>
    </section>
    <section>
      <v-container>
        <Heading title="Importance" />
        <Importance />
      </v-container>
    </section>
    <section id="breeds">
      <div class="carousel__wrapper">
        <v-container>
          <Heading title="Breeds" />
          <!-- <v-card id="breeds" flat class="breeds__container">
        <div class="cards__container">
          <div v-for="i in goatData.data" :key="i.title" class="wrapper">
            <Breeds :goat="i" />
          </div>
        </div>
      </v-card> -->
          <Breeds />
        </v-container>
      </div>
    </section>
    <section>
      <v-container id="plans">
        <Heading title="Plans" />
        <PlanCard />
      </v-container>
    </section>
  </div>
</template>

<script>
import Breeds from '@/components/Breeds'
import PlanCard from '@/components/PlanCard'
import Importance from '@/components/Importance'
import Heading from '@/components/Heading'
export default {
  components: {
    Breeds,
    PlanCard,
    Importance,
    Heading,
  },
}
</script>
<style lang="css" scoped>
.carousel__wrapper {
  background: #000;
  padding: 3rem 0;
}
.bg__wrappper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('@/static/banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  margin-top: -80px;
  display: grid;
  place-items: center;
  color: #fff;
}
.content__wrapper {
  text-align: center;
  font-size: 30px;
}
.title {
  font-size: 2.5em;
}
.subtitle {
  font-size: 1.5em;
  margin-bottom: 1rem;
}
.btn {
  font-size: 2rem;
  padding: 1rem 2rem;
  background: #e77b15;
  border-radius: 30px;
  outline: none;
  border: none;
  color: #fff;
  text-decoration: none;
  transition: all 0.6s;
  letter-spacing: 1px;
}
.btn:hover {
  background: #ff7a00;
}
.app-wrapper {
  background: #dfe0dc;
}
.btn:focus {
  outline: none;
  border: none;
}
.breeds__container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  padding: 1rem;
}
.cards__container {
  margin: 0 auto;
  display: grid;
  gap: 32px;
  padding: 1rem;
  grid-template-columns: repeat(4, 300px);
}

@media only screen and (max-width: 1200px) {
  .cards__container {
    grid-template-columns: repeat(2, 280px);
    grid-template-rows: 1fr 1fr;
  }
}
@media only screen and (max-width: 600px) {
  .cards__container {
    grid-template-columns: repeat(2, 150px);
    grid-template-rows: 1fr 1fr;
    padding: 0.5rem;
  }
  .breeds__container {
    margin: 0.8rem;
    padding: 0.5rem;
  }
}
</style>
