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
    dark: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
  },
  computed: {
    checkProp() {
      if (this.dark) {
        return 'color-white'
      }
      if (!this.dark && this.small) {
        return 'color-black'
      }
      if (this.small) {
        return 'size-small'
      }
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.title__section {
  font-size: 3rem;

  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 300;
  width: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  cursor: default;
}
.title-divider {
  width: 5rem;
  height: 3px;
  margin: 0 auto 50px;
  color: #ff4040;
  background: #ff4040;
  outline: none;
  border: none;
}
.color-black {
  color: #000 !important;
  font-size: 1.5rem !important;
}

.color-white {
  color: #fff !important;
}

.size-small {
  font-size: 1.5rem !important;
}

@media only screen and (max-width: 600px) {
  .title__section {
    font-size: 2.2rem;
  }
  .color-black {
    color: #000 !important;
    font-size: 1.1rem !important;
  }
  .size-small {
    font-size: 1.1rem !important;
  }
}
</style>
