<template>
  <div>
    <!-- <h1>About page</h1> -->
    <div class="card__container">
      <PlanCard />
    </div>
  </div>
</template>

<script>
import PlanCard from '@/components/PlanCard'
export default {
  components: {
    PlanCard,
  },
}
</script>

<style lang="css" scoped>
.card__container {
  min-height: 50vh;
  margin: 3rem 0;
  display: grid;
  place-items: center;
}
h1 {
  margin-top: 100px;
}
</style>
