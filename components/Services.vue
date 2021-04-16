<template>
  <v-container>
    <div class="h5 font-weight-medium white--text mb-16">
      {{
        this.$store.state.language.language === `english`
          ? `Only International Indian company to provide all the necessary services
      for goat Rearing under single roof with experience of more than 12 years`
          : `
केवळ एका आंतरराष्ट्रीय छताखाली शेळी पालन-पोषण करण्यासाठी सर्व आवश्यक सेवा पुरविणारी फक्त आंतरराष्ट्रीय भारतीय कंपनी आहे, ज्याचा अनुभव १२ वर्षांहून अधिक आहे`
      }}
    </div>
    <v-switch
      v-model="switch1"
      :label="
        this.$store.state.language.language === `english`
          ? `मराठी मध्ये पहा`
          : `SEE IN ENGLISH`
      "
      color="orange"
      dark
      @change="switchLang"
    ></v-switch>
    <v-timeline dense dark>
      <v-timeline-item
        v-for="service in getServiceData"
        :key="service.id"
        class="white--text mb-6"
        color="orange"
        small
        fill-dot
      >
        <template v-slot:icon>
          <span>{{ service.id }}</span>
        </template>
        <div>
          <v-row>
            <v-col cols="12" v-text="service.title"></v-col>
          </v-row>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import { services } from '@/assets/data/servicesdata.json'
export default {
  data: () => ({
    switch1: true,
    servicesData: services.english,
    label: 'मराठी मध्ये पहा',
  }),
  computed: {
    getServiceData() {
      if (this.$store.state.language.language === `english`) {
        return services.english
      }
      return services.marathi
    },
    getLangBool() {
      if (this.$store.state.language.language === `english`) {
        return false
      }
      return true
    },
  },
  methods: {
    check() {
      if (this.switch1) {
        this.servicesData = services.marathi
        this.label = 'SEE IN ENGLISH'
      } else {
        this.servicesData = services.english
        this.label = 'मराठी मध्ये पहा'
      }
    },
    switchLang() {
      if (this.$store.state.language.language === `english`) {
        this.$store.commit('language/change', 'marathi')
        localStorage.setItem('language', 'marathi')
      } else {
        this.$store.commit('language/change', 'english')
        localStorage.setItem('language', 'english')
      }
    },
  },
  mounted() {
    if (this.$store.state.language.language === `marathi`) {
      this.switch1 = false
    } else {
      this.switch1 = true
    }
  },
}
</script>

<style lang="scss" scoped></style>
