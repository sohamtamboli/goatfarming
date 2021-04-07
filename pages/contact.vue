<template>
  <v-container class="contact__grid__container">
    <!-- <h1 class="text-center mt-4 mb-6">Contact Us</h1> -->
    <Heading title="Contact Us" class="mt-4" />
    <Form />
    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
      :timeout="timeout"
      :color="color"
      light
      bottom
      elevation="3"
      style="padding-bottom: 10px"
    >
      <span class="white--text">{{ text }}</span>

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import Form from '@/components/Form'
export default {
  components: {
    Form,
  },
  data: () => ({
    multiLine: true,
    snackbar: false,
    color: '',
    text: '',
    timeout: 2000,
  }),

  created() {
    this.$nuxt.$on('showErrorSnackbar', () => {
      this.snackbar = true
      this.text = `Something went wrong! :(`
      this.color = 'red darken-1'
    })
    this.$nuxt.$on('showSuccessSnackbar', () => {
      this.snackbar = true
      this.text = `Your response has been recorded. We'll get to you shortly! :)`
      this.color = 'success'
    })
  },
}
</script>

<style lang="css" scoped>
.contact__grid__container {
  display: grid;
  place-items: center;
  height: auto;
  margin-bottom: 5rem;
  position: relative;
}
</style>
