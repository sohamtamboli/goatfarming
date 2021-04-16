<template>
  <v-card
    elevation="8"
    class="form__container"
    data-aos="fade-down"
    data-aos-duration="4000"
  >
    <div class="form__wrapper">
      <v-form ref="form" v-model="valid" lazy-validation>
        <h3 class="h5 mt-4">
          {{
            $store.state.language.language === `english`
              ? `Personal Details:`
              : `वैयक्तिक माहिती:`
          }}
        </h3>
        <v-text-field
          v-model="name"
          :counter="60"
          :rules="nameRules"
          :label="$store.state.language.language === `english` ? `Name` : `नाव`"
          required
        />
        <v-text-field
          v-model="mobile"
          :rules="mobileRules"
          :label="
            $store.state.language.language === `english`
              ? `Mobile Number`
              : `मोबाइल नंबर`
          "
          required
        />
        <v-text-field
          v-model="email"
          :rules="emailRules"
          :label="
            $store.state.language.language === `english` ? `Email` : `ई-मेल`
          "
          required
        />
        <v-text-field
          ref="aadhar"
          v-model="aadhar"
          :rules="aadharRules"
          :label="
            $store.state.language.language === `english`
              ? `Aadhar Card Number`
              : `आधार कार्ड नंबर`
          "
          required
          @keyup="addSpace"
        />
        <v-radio-group
          v-model="landAreaType"
          :rules="landAreaTypeRules"
          :row="!isMobile"
          :column="isMobile"
        >
          <template v-slot:label>
            <div class="radio__label">
              {{
                $store.state.language.language === `english`
                  ? `Do you have land area? :
`
                  : `आपल्याकडे जमीन क्षेत्र आहे? :`
              }}
            </div>
          </template>
          <v-radio
            :label="
              $store.state.language.language === `english`
                ? `Owned Land
`
                : `मालकीची जमीन`
            "
            value="Owned"
          ></v-radio>
          <v-radio
            :label="
              $store.state.language.language === `english`
                ? `Leased Land
`
                : `भाडेतत्त्वावर जमीन`
            "
            value="Leased"
          ></v-radio>
        </v-radio-group>
        <v-text-field
          v-model="landArea"
          :rules="landAreaRules"
          :label="
            $store.state.language.language === `english`
              ? `Land Area (in Acres)
`
              : `जमीन क्षेत्र (एकरात)`
          "
          required
        />
        <v-text-field
          v-model="govValueLand"
          :rules="govValueLandRules"
          :label="
            $store.state.language.language === `english`
              ? `Government Valuation of Land
`
              : `जागेचे शासकीय मूल्यमापन`
          "
          required
        />
        <v-text-field
          v-model="addressLineOne"
          :rules="addressLineOneRules"
          :label="
            $store.state.language.language === `english`
              ? `Address Line 1
`
              : `पत्ता लाइन 1`
          "
          required
        />
        <v-text-field
          v-model="addressLineTwo"
          :label="
            $store.state.language.language === `english`
              ? `Address Line 2
`
              : `पत्ता लाइन 2`
          "
        />
        <v-text-field
          v-model="age"
          :rules="ageRules"
          :label="
            $store.state.language.language === `english`
              ? `Age
`
              : `वय`
          "
          required
        />
        <v-text-field
          v-model="education"
          :rules="educationRules"
          :label="
            $store.state.language.language === `english`
              ? `Education
`
              : `शिक्षण`
          "
          required
        />
        <v-radio-group v-model="haveTrained" :rules="haveTrainedRules" column>
          <template v-slot:label>
            <div class="radio__label">
              {{
                $store.state.language.language === `english`
                  ? `Have you ever attended the government training session on goat
              farming? :
`
                  : `तुम्ही कधी बकरी शेतीवरील शासकीय प्रशिक्षण सत्रात भाग घेतला आहे का?`
              }}
            </div>
          </template>
          <v-radio
            :label="
              $store.state.language.language === `english`
                ? `Yes
`
                : `होय`
            "
            value="yes"
          ></v-radio>
          <v-radio
            :label="
              $store.state.language.language === `english`
                ? `No
`
                : `नाही`
            "
            value="no"
          ></v-radio>
        </v-radio-group>
        <v-radio-group
          v-model="haveShed"
          :rules="haveShedRules"
          :row="!isMobile"
          :column="isMobile"
        >
          <template v-slot:label>
            <div class="radio__label">
              {{
                $store.state.language.language === `english`
                  ? `Do you have Shed area? : 
`
                  : `आपल्याकडे शेड क्षेत्र आहे?`
              }}
            </div>
          </template>
          <v-radio
            :label="
              $store.state.language.language === `english`
                ? `Yes
`
                : `होय`
            "
            value="yes"
          ></v-radio>
          <v-radio
            :label="
              $store.state.language.language === `english`
                ? `No
`
                : `नाही`
            "
            value="no"
          ></v-radio>
        </v-radio-group>
        <v-slide-y-reverse-transition>
          <v-text-field
            v-if="checkShed"
            v-model="shedArea"
            :rules="shedAreaRules"
            :label="
              $store.state.language.language === `english`
                ? `Shed Area (in Sq. meters)
`
                : `शेड क्षेत्र (चौरस मीटर मध्ये)`
            "
            transition="slide-y-transition"
            required
          />
        </v-slide-y-reverse-transition>
        <v-text-field
          v-model="invest"
          :rules="investRules"
          :label="
            $store.state.language.language === `english`
              ? `How much can you invest?
`
              : `आपण किती गुंतवणूक करू शकता?`
          "
          required
        />
        <h3 class="h5 mt-4">Bank Details:</h3>
        <v-text-field
          v-model="beneficiary"
          :rules="beneficiaryRules"
          :label="
            $store.state.language.language === `english`
              ? `Beneficiary's Name
`
              : `लाभार्थ्याचे नाव`
          "
          required
        />
        <v-text-field
          v-model="bankName"
          :rules="bankNameRules"
          :label="
            $store.state.language.language === `english`
              ? `Bank Name
`
              : `बँकेचे नाव`
          "
          required
        />
        <v-text-field
          v-model="bankAccNo"
          :rules="bankAccNoRules"
          :label="
            $store.state.language.language === `english`
              ? `Bank Account Number
`
              : `बँक खाते क्रमांक`
          "
          required
        />
        <v-text-field
          v-model="ifsc"
          :rules="ifscRules"
          :label="
            $store.state.language.language === `english`
              ? `IFSC Code
`
              : `IFSC कोड`
          "
          required
        />

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4 mt-8"
          @click="validate"
        >
          {{
            $store.state.language.language === `english`
              ? `Submit
`
              : `पाठवा`
          }}
        </v-btn>
      </v-form>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    isMobile: false,
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
  mounted() {
    if (screen.width < 786) {
      this.isMobile = true
    }
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
    async submitForm() {
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
        const resp = await this.$axios.$post(
          `https://goatfarming-backend.herokuapp.com/api/register/`,
          payload
        )
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
