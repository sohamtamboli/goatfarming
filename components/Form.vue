<template>
  <v-card elevation="8" class="form__container">
    <div class="form__wrapper">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="60"
          :rules="nameRules"
          label="Name"
          required
        />
        <v-text-field
          v-model="mobile"
          :rules="mobileRules"
          label="Mobile Number"
          required
        />
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        />
        <v-text-field
          v-model="addressLineOne"
          :rules="addressLineOneRules"
          label="Address Line 1"
          required
        />
        <v-text-field v-model="addressLineTwo" label="Address Line 2" />
        <v-text-field v-model="city" :rules="cityRules" label="City" required />
        <v-text-field
          v-model="state"
          :rules="stateRules"
          label="State"
          required
        />
        <v-text-field v-model="pincode" label="pincode" />

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Submit
        </v-btn>
      </v-form>
    </div>
    <div class="img__wrapper">
      <img src="/formside.jpg" alt="" />
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 60) || 'Name must be less than 60 characters',
    ],
    mobile: '',
    mobileRules: [
      (v) => !!v || 'Mobile number is required',
      (v) =>
        /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v) || 'Mobile number must be valid',
    ],
    email: '',
    emailRules: [(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
    addressLineOne: '',
    addressLineOneRules: [(v) => !!v || 'Address is required'],
    addressLineTwo: '',
    city: '',
    cityRules: [(v) => !!v || 'City is required'],
    state: '',
    stateRules: [(v) => !!v || 'State is required'],
    pincode: '',
    checkScreen: true,
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.submitForm()
        this.$refs.form.reset()
      }
    },
    submitForm() {
      const payload = {
        name: this.name,
        mobile: this.mobile,
        email: this.email,
        address: this.addressLineOne + ' ' + this.addressLineTwo,
        city: this.city,
        state: this.state,
        pincode: this.pincode,
      }
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(payload, null, 2))
    },
  },
}
</script>

<style lang="css" scoped>
.form__container {
  display: flex;

  border-radius: 10px;
}
.form__wrapper {
  flex: 1;
  padding: 2rem;
}
.img__wrapper {
  flex: 1;
}
.img__wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 0 10px 10px 0;
}
@media only screen and (max-width: 768px) {
  .form__container {
    flex-direction: column;
    width: 100%;
  }
  .img__wrapper {
    visibility: hidden;
    display: none;
  }
}
</style>
