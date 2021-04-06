<template>
  <v-container class="contact__grid__container">
    <!-- <h1 class="text-center mt-4 mb-6">Contact Us</h1> -->
    <Heading title="Contact Us" class="mt-4" />
    <Form />
  </v-container>
</template>

<script>
import Form from '@/components/Form'
export default {
  components: {
    Form,
  },
}
</script>

<style lang="css" scoped>
.contact__grid__container {
  display: grid;
  place-items: center;
  height: auto;
  margin-bottom: 5rem;
}
</style>
