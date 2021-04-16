<template>
  <div class="page__wrapper">
    <v-container class="contact__grid__container">
      <!-- <h1 class="text-center mt-4 mb-6">Contact Us</h1> -->
      <Heading
        :title="
          $store.state.language.language === `english`
            ? `Registration`
            : `नोंदणी`
        "
        class="mt-4"
      />
      <Register />
      <v-card elevation="8" class="mt-4">
        <v-card-title>
          {{
            $store.state.language.language === `english`
              ? `Terms and Conditions:`
              : `नियम आणि अटी:`
          }}
        </v-card-title>
        <v-card-text>
          <ol v-if="$store.state.language.language === `english`">
            <li>Free First Registration.</li>
            <li>
              Aadhar card, Pan card, 7/12 extract, 8-A extract, 6 months Bank
              Statement and Government land valuation should be submitted to the
              company first.
            </li>
            <li>
              Company has all the rights to reject any application if all the
              required procedure is not possible.
            </li>
            <li>Udyam Registration available through online portal.</li>
            <li>Open a Current Account of the firm in the bank.</li>
            <li>
              Customer should submit all the related documents required for loan
              application as per the rules.
            </li>
            <li>Customer should deposit 25% amount in the current account.</li>
            <li>
              Shed construction process should be started only after the loan
              amount is disbursed.
            </li>
            <li>
              Company will provide guidance related to the type, breed of the
              goat, deal should be done by the customer.
            </li>
            <li>
              Total initial vaccination will be provided from the company free
              of cost.
            </li>
            <li>
              Insurance will be done for all the goats as soon as the government
              veterinary officer authorised signatures.
            </li>
            <li>
              Animal feed, animal medical services, marketing,etc other services
              are available at reasonable rates as per the company contract.
            </li>
            <li>
              Guidance and real assistance will be provided to take up the
              financial profit projects for next 5 years.
            </li>
          </ol>
          <ol v-else>
            <li>प्रथम नोंदणी मोफत</li>
            <li>
              आधार कार्ड, पॅन कार्ड, सात बाराचा उतारा, ८-अ चा उतारा, ६ महिन्याचे
              बँक स्टेटमेंट आणि शासकीय जागेचे मूल्यांकन प्रथम कंपनीस सादर करावे।
            </li>
            <li>
              सर्व आवश्यक प्रक्रिया शक्य नसल्यास कोणताही अर्ज नाकारण्याचे सर्व
              अधिकार कंपनीचे आहेत।
            </li>
            <li>उद्यम आधार नोंदणी करणे जी गूगल वर केली जाते.</li>
            <li>बँक मधे चालू खाते काढणे।</li>
            <li>
              कर्जासाठी आवश्यक, सर्व कागदपत्रे बँक नियमाप्रमाणे ग्राहकाने उपलब्ध
              करून देणे।
            </li>
            <li>करंट अकाऊंट वर 25% रक्कम स्वतः जमा करणे।</li>
            <li>कंपनीकडून कर्ज जमा झाल्यानंतरच शेड बांधकामास सुरुवात करणे।</li>
            <li>
              शेळीची जात, प्रकार, बाजारा नुसार कंपनी मार्गदर्शन करेल, त्याची
              खरेदी स्वतः ग्राहकाने करायची आहे।
            </li>
            <li>प्रथम लसीकरण पूर्णपणे कंपनी कडून मोफत केल्या जाईल।</li>
            <li>
              शासकीय पशुवैद्यकीय अधिकाऱ्यांच्या सहीने सर्व पूर्तता करून त्या
              शेळ्यांचा विमा काढला जाईल।
            </li>
            <li>
              पशू, चारा, पशू खाद्य, पशु वैद्यकीय सुविधा, मार्केटिंग, इत्यादी.
              सर्व सुविधा उपलब्ध आहेत।
            </li>
            <li>
              पुढील पाच वर्षे आर्थिक नफ्यासाठी मार्गदर्शन व प्रत्यक्षात मदत केली
              जाईल।
            </li>
          </ol>
        </v-card-text>
      </v-card>
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
import Register from '@/components/Register'
export default {
  components: {
    Register,
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
  head() {
    return {
      title: 'Contact Us - Anjali Goatfarms',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Goat Farming is a business which can be achieved with the help of less investment and also less space. In closed goat farming, the fodder required to feed the goats is given to them in the cowshed. Also, goats require less amount of food compared to other animals.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'anjalibusinessgroup, anjali goat farming, anjali business, anjali group, passplus, goat, farming, goatfarming, agro, agriculture,',
        },
        {
          hid: 'author',
          name: 'author',
          content: 'sohamtamboli',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.anjalibusinessgroup.com',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Anjali Goat Farms',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Goat Farming is a business which can be achieved with the help of less investment and also less space. In closed goat farming, the fodder required to feed the goats is given to them in the cowshed. Also, goats require less amount of food compared to other animals.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Anjali Goat Farms',
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'en_us',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@anjalibusinessgroup',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@reccemedia',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://www.anjalibusinessgroup.com/',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Anjali Goat Farms',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Goat Farming is a business which can be achieved with the help of less investment and also less space. In closed goat farming, the fodder required to feed the goats is given to them in the cowshed. Also, goats require less amount of food compared to other animals.',
        },
      ],
      link: [
        {
          rel: 'author',
          href: 'https://github.com/sohamtamboli',
        },
        {
          rel: 'canonical',
          href: '//anjalibusinessgroup.com/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.contact__grid__container {
  display: grid;
  place-items: center;
  height: auto;
  margin-bottom: 1.2rem;
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

@media only screen and (max-width: 600px) {
  .contact__grid__container {
    margin-bottom: 2.1rem;
  }
}
</style>
