<template>
  <div class="title__section" :class="checkProp">
    {{ title }}
    <hr class="title-divider" />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    dark: { type: String, default: '' },
  },
  computed: {
    checkProp() {
      if (this.dark) {
        return 'color-white'
      } else {
        return 'color-black'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.title__section {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 800;
  width: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  cursor: default;
}
.title-divider {
  width: 5rem;
  height: 5px;
  margin: 0 auto 50px;
  color: #ff4040;
  background: #ff4040;
  outline: none;
  border: none;
}
.color-black {
  color: #000 !important;
}

.color-white {
  color: #fff !important;
}

@media only screen and (max-width: 600px) {
  .title__section {
    font-size: 2.2rem;
  }
}
</style>
