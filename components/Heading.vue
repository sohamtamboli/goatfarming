<template>
  <div class="title__section">
    {{ title }}
    <hr class="title-divider" />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
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
  font-family: sans-serif;
}
.title-divider {
  width: 5rem;
  margin: 0 auto 50px;
  color: #ff4040;
}
</style>
