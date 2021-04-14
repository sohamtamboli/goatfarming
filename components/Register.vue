<template>
  <v-card
    elevation="8"
    class="form__container"
    data-aos="fade-down"
    data-aos-duration="4000"
  >
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
          v-model="aadhar"
          :rules="aadharRules"
          label="Aadhar Card Number"
          required
        />
        <v-radio-group v-model="landAreaType" :rules="landAreaTypeRules" row>
          <template v-slot:label>
            <div class="radio__label">Do you have land area? :</div>
          </template>
          <v-radio label="Owned Land" value="Owned"></v-radio>
          <v-radio label="Leased Land" value="Leased"></v-radio>
        </v-radio-group>
        <v-text-field
          v-model="landArea"
          :rules="landAreaRules"
          label="Land Area (in Acres)"
          required
        />
        <v-text-field
          v-model="govValueLand"
          :rules="govValueLandRules"
          label="Goverment valuation of land"
          required
        />
        <v-text-field
          v-model="addressLineOne"
          :rules="addressLineOneRules"
          label="Address Line 1"
          required
        />
        <v-text-field v-model="addressLineTwo" label="Address Line 2" />
        <v-text-field v-model="age" :rules="ageRules" label="Age" required />
        <v-text-field
          v-model="education"
          :rules="educationRules"
          label="Education"
          required
        />
        <v-radio-group v-model="haveTrained" :rules="haveTrainedRules" column>
          <template v-slot:label>
            <div class="radio__label">
              Have you ever attended the government training session on goat
              farming? :
            </div>
          </template>
          <v-radio label="Yes" value="true"></v-radio>
          <v-radio label="No" value="false"></v-radio>
        </v-radio-group>
        <v-radio-group v-model="haveShed" :rules="haveShedRules" row>
          <template v-slot:label>
            <div class="radio__label">Do you have Shed area? :</div>
          </template>
          <v-radio label="Yes" value="true"></v-radio>
          <v-radio label="No" value="false"></v-radio>
        </v-radio-group>
        <v-slide-y-reverse-transition>
          <v-text-field
            v-if="checkShed"
            v-model="shedArea"
            :rules="shedAreaRules"
            label="Shed Area (in Sq. meters)"
            transition="slide-y-transition"
            required
          />
        </v-slide-y-reverse-transition>
        <v-text-field
          v-model="invest"
          :rules="investRules"
          label="How much can you invest"
          required
        />
        <h3 class="h5 mt-4">Bank Details:</h3>
        <v-text-field
          v-model="beneficiary"
          :rules="beneficiaryRules"
          label="Beneficiary's Name"
          required
        />
        <v-text-field
          v-model="bankName"
          :rules="bankNameRules"
          label="Bank Name"
          required
        />
        <v-text-field
          v-model="bankAccNo"
          :rules="bankAccNoRules"
          label="Bank Account Number"
          required
        />
        <v-text-field
          v-model="ifsc"
          :rules="ifscRules"
          label="IFSC Code"
          required
        />

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4 mt-8"
          @click="validate"
        >
          Submit
        </v-btn>
      </v-form>
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
    aadhar: '',
    aadharRules: [],
    landAreaType: null,
    landAreaTypeRules: [],
    landArea: '',
    landAreaRules: [],
    govValueLand: '',
    govValueLandRules: [(v) => !!v || 'This is required'],
    addressLineOne: '',
    addressLineOneRules: [(v) => !!v || 'Address is required'],
    addressLineTwo: '',
    age: '',
    ageRules: [
      (v) => !!v || 'Age is required',
      (v) => /^[0-9]+$/.test(v) || 'Age must be a number',
    ],
    education: '',
    educationRules: [(v) => !!v || 'Education is required'],
    haveTrained: '',
    haveTrainedRules: [],
    haveShed: '',
    haveShedRules: [],
    shedArea: '',
    shedAreaRules: [],
    invest: '',
    investRules: [(v) => /^[0-9]+$/.test(v) || 'This must be number'],
    beneficiary: '',
    beneficiaryRules: [],
    bankName: '',
    bankNameRules: [],
    bankAccNo: '',
    bankAccNoRules: [],
    ifsc: '',
    ifscRules: [],
  }),
  computed: {
    checkShed() {
      if (this.haveShed === 'true') {
        return true
      } else {
        return false
      }
    },
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.submitForm()
        this.$refs.form.reset()
      }
    },
    async submitForm() {
      const payload = {
        name: this.name,
        mobile: this.mobile,
        email: this.email,
        address: this.addressLineOne + ' ' + this.addressLineTwo,
        city: this.city,
        state: this.state,
        pincode: this.pincode,
      }
      try {
        // eslint-disable-next-line no-unused-vars
        const resp = await this.$axios.$post(
          `https://goatfarming-backend.herokuapp.com/api/contact/`,
          payload
        )
        this.$nuxt.$emit('showSuccessSnackbar')
      } catch (error) {
        this.$nuxt.$emit('showErrorSnackbar')
      }
    },
  },
}
</script>

<style lang="css" scoped>
.form__container {
  display: flex;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 2rem;
}
.form__wrapper {
  flex: 1;
  padding: 2rem;
}
.radio__label {
  font-size: 18px !important;
}

@media only screen and (max-width: 768px) {
  .form__container {
    flex-direction: column;
    width: 100%;
  }
}
</style>
