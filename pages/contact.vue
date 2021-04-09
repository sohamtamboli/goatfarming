<template>
  <div class="page__wrapper">
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
      <section class="page__section">
        <div class="spacer" />
      </section>
    </v-container>
  </div>
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

<style lang="scss" scoped>
.contact__grid__container {
  display: grid;
  place-items: center;
  height: auto;
  margin-bottom: 4rem;
  position: relative;
}
.page__section {
  padding: 3rem 0;
}
.spacer {
  height: 12px;
  margin: 6rem 0;
}
.page__wrapper {
  background-color: #fafafa;
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
    background-color: #fafafa;
  }
}
</style>
