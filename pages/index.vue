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
        <Importance class="card__grid" />
      </v-container>
    </section>
    <section id="breeds">
      <div class="carousel__wrapper">
        <v-container>
          <Heading title="Breeds" dark="dark" />
          <Breeds
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          />
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
  background: #212121;
  padding: 3rem 0;
}

.card__grid {
  width: 100%;
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
  font-size: 2.3rem;
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 30px;
  outline: none;
  border: none;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  text-decoration: none;
  transition: all 0.3s;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.btn:hover {
  background: #ff4040;
}
.app-wrapper {
  background: #f1f1ee;
  padding-bottom: 2rem;
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
