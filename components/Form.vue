<template>
  <v-card elevation="8" class="form__container">
    <div class="form__wrapper">
      <form>
        <v-text-field
          v-model="payload.name"
          :error-messages="nameErrors"
          label="Name"
          required
          @input="$v.payload.name.$touch()"
          @blur="$v.payload.name.$touch()"
        />
        <v-text-field
          v-model="payload.mobile"
          :error-messages="mobileErrors"
          :counter="10"
          label="Mobile Number"
          required
          @input="$v.payload.mobile.$touch()"
          @blur="$v.payload.mobile.$touch()"
        />
        <v-text-field
          v-model="payload.email"
          :error-messages="emailErrors"
          label="E-mail"
          @input="$v.payload.email.$touch()"
          @blur="$v.payload.email.$touch()"
        />
        <v-text-field
          v-model="payload.addressLineOne"
          :error-messages="addressLineOneErrors"
          label="Address Line 1"
          required
          @input="$v.payload.addressLineOne.$touch()"
          @blur="$v.payload.addressLineOne.$touch()"
        />
        <v-text-field v-model="payload.addressLineTwo" label="Address Line 2" />
        <v-text-field
          v-model="payload.cityName"
          :error-messages="cityNameErrors"
          :counter="30"
          label="City"
          required
          @input="$v.payload.cityName.$touch()"
          @blur="$v.payload.cityName.$touch()"
        />
        <v-text-field
          v-model="payload.stateName"
          :error-messages="stateNameErrors"
          label="State"
          required
          @input="$v.payload.stateName.$touch()"
          @blur="$v.payload.stateName.$touch()"
        />
        <v-text-field v-model="payload.pincode" label="Pin Code" />

        <div class="mt-4">
          <v-btn class="mr-4" @click="submit"> submit </v-btn>
          <v-btn @click="clear"> clear </v-btn>
        </div>
      </form>
    </div>
    <div class="img__wrapper">
      <img src="/formside.jpg" alt="" />
    </div>
  </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { numeric, required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(60) },
    mobile: { numeric, required, maxLength: maxLength(10) },
    email: { email },
    addressLineOne: { required },
    cityName: { required, maxLength: maxLength(30) },
    stateName: { required, maxLength: maxLength(30) },
  },

  data: () => ({
    payload: {
      name: '',
      mobile: '',
      email: '',
      addressLineOne: '',
      addressLineTwo: '',
      cityName: '',
      stateName: '',
      pincode: '',
    },
    // payload: {
    //   name: this.name,
    //   mobile: this.mobile,
    //   email: this.email,
    //   addressLineOne: this.addressLineOne,
    //   addressLineTwo: this.addressLineTwo,
    //   cityName: this.cityName,
    //   stateName: this.stateName,
    //   pincode: this.pincode,
    // },
  }),

  computed: {
    nameErrors() {
      if (process.browser) {
        const errors = []
        if (!this.$v.payload.name.$dirty) return errors
        !this.$v.payload.name.maxLength &&
          errors.push('Name must be at most 60 characters long')
        !this.$v.payload.name.required && errors.push('Name is required.')
        return errors
      }
      return null
    },
    mobileErrors() {
      if (process.browser) {
        const errors = []
        if (!this.$v.payload.mobile.$dirty) return errors
        !this.$v.payload.mobile.numeric &&
          errors.push('Mobile number must be digits')
        !this.$v.payload.mobile.maxLength &&
          errors.push('Mobile number must be 10 digits long')
        !this.$v.payload.mobile.required &&
          errors.push('Mobile number is required.')
        return errors
      }
      return null
    },
    emailErrors() {
      if (process.browser) {
        const errors = []
        if (!this.$v.payload.email.$dirty) return errors
        !this.$v.payload.email.email && errors.push('Must be valid e-mail')
        return errors
      }
      return null
    },
    addressLineOneErrors() {
      if (process.browser) {
        const errors = []
        if (!this.$v.payload.addressLineOne.$dirty) return errors
        !this.$v.payload.addressLineOne.required &&
          errors.push('Address is required.')
        return errors
      }
      return null
    },
    cityNameErrors() {
      if (process.browser) {
        const errors = []
        if (!this.$v.payload.cityName.$dirty) return errors
        !this.$v.payload.cityName.maxLength &&
          errors.push('City name must be at most 30 characters long')
        !this.$v.payload.cityName.required &&
          errors.push('City name is required.')
        return errors
      }
      return null
    },
    stateNameErrors() {
      if (process.browser) {
        const errors = []
        if (!this.$v.payload.stateName.$dirty) return errors
        !this.$v.payload.stateName.required &&
          errors.push('State name is required.')
        return errors
      }
      return null
    },
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.payload.name)
  },

  methods: {
    submit() {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(this.payload, null, 2))
    },
    clear() {
      this.$v.$reset()
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
/* .form__container form {
  flex: 2;
}
.form__container img {
  flex: 1;
  height: 600px;
} */
</style>
