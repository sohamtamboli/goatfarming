<template>
  <div class="about__container">
    <Preface />
    <Policy />
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
</style>
