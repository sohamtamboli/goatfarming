<template>
  <v-tooltip v-model="showTip" top color="rgb(0,0,0)">
    <template v-slot:activator="{ on, attrs }">
      <span
        ref="inpTxt"
        class="tooltip__span"
        v-bind="attrs"
        v-on="on"
        @click="copyText"
        >{{ content }}</span
      >
    </template>
    <span>{{ copiedContent != '' ? 'Copied!' : 'Click to Copy' }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    content: { type: String, default: () => {} },
  },
  data: () => ({
    showTip: false,
    copiedContent: '',
  }),
  methods: {
    async copyText() {
      const inptext = await navigator.clipboard
        .writeText(this.$refs.inpTxt.innerHTML)

        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('Something went wrong', err)
        })

      this.copiedContent = inptext
    },
  },
}
</script>

<style lang="css" scoped>
.tooltip__span {
  cursor: pointer;
}
</style>
