<template>
  <v-card
    elevation="8"
    class="form__container"
    data-aos="fade-down"
    data-aos-duration="4000"
  >
    <div class="form__wrapper">
      <v-form ref="form" v-model="valid" lazy-validation>
        <h3 class="h5 mt-4">Personal Details:</h3>
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
          ref="aadhar"
          v-model="aadhar"
          :rules="aadharRules"
          label="Aadhar Card Number"
          required
          @keyup="addSpace"
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
          <v-radio label="Yes" value="yes"></v-radio>
          <v-radio label="No" value="no"></v-radio>
        </v-radio-group>
        <v-radio-group v-model="haveShed" :rules="haveShedRules" row>
          <template v-slot:label>
            <div class="radio__label">Do you have Shed area? :</div>
          </template>
          <v-radio label="Yes" value="yes"></v-radio>
          <v-radio label="No" value="no"></v-radio>
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
      (v) => !!v || 'Mobile Number is required',
      (v) =>
        /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v) || 'Mobile Number must be valid',
    ],
    email: '',
    emailRules: [(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
    aadhar: '',
    aadharRules: [
      (v) => !!v || 'Aadhar Card Number is required',
      (v) =>
        /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/.test(v) ||
        'Aadhar Card Number must be valid',
    ],
    landAreaType: null,
    landAreaTypeRules: [(v) => !!v || 'Land Area type is required'],
    landArea: '',
    landAreaRules: [(v) => !!v || 'Land Area is required'],
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
    haveTrained: null,
    haveTrainedRules: [(v) => !!v || 'This is required'],
    haveShed: null,
    haveShedRules: [(v) => !!v || 'This is required'],
    shedArea: '',
    shedAreaRules: [(v) => !!v || 'Shed Area is required'],
    invest: '',
    investRules: [
      (v) => !!v || 'This is required',
      (v) => /^[0-9]+$/.test(v) || 'This must be number',
    ],
    beneficiary: '',
    beneficiaryRules: [(v) => !!v || "Beneficiary's Name is required"],
    bankName: '',
    bankNameRules: [(v) => !!v || 'Bank Name is required'],
    bankAccNo: '',
    bankAccNoRules: [
      (v) => !!v || 'Bank Account Number is required',
      (v) => /^\d{9,18}$/.test(v) || 'Bank Account Number must be a valid',
    ],
    ifsc: '',
    ifscRules: [
      (v) => !!v || 'IFSC Code is required',
      (v) => /^[A-Z]{4}0[A-Z0-9]{6}$/.test(v) || 'IFSC Code must be a valid',
    ],
  }),
  computed: {
    checkShed() {
      if (this.haveShed === 'yes') {
        return true
      } else {
        return false
      }
    },
  },

  methods: {
    addSpace() {
      let em = this.$refs.aadhar.value
      if (em === '') {
        return
      } else {
        em = em.split(' ').join('')
      }

      const formatted = em.match(/.{1,4}/g).join(' ')
      this.$refs.aadhar.value = formatted
    },
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
        aadhar: this.aadhar,
        landAreaType: this.landAreaType,
        landArea: this.landArea,
        govValueLand: this.govValueLand,
        address: this.addressLineOne + ' ' + this.addressLineTwo,
        age: this.age,
        education: this.education,
        haveTrained: this.haveTrained,
        haveShed: this.haveShed,
        shedArea: this.shedArea,
        invest: this.invest,
        beneficiary: this.beneficiary,
        bankName: this.bankName,
        bankAccNo: this.bankAccNo,
        ifsc: this.ifsc,
      }
      try {
        // eslint-disable-next-line no-unused-vars
        // const resp = await this.$axios.$post(
        //   `https://goatfarming-backend.herokuapp.com/api/contact/`,
        //   payload
        // )
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(payload, null, 2))
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
