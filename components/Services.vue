<template>
  <v-container>
    <div class="h5 font-weight-medium white--text mb-16">
      Only International Indian company to provide all the necessary services
      for goat Rearing under single roof with experience of more than 12 years
    </div>
    <v-switch
      v-model="switch1"
      :label="label"
      color="orange"
      value="orange"
      dark
      @change="check"
    ></v-switch>
    <v-timeline dense dark>
      <v-timeline-item
        v-for="service in servicesData"
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
  },
}
</script>

<style lang="scss" scoped></style>
