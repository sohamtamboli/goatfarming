<template>
  <div>
    <div class="bg__wrappper">
      <div class="content__wrapper">
        <h1 class="title">Goat Farm</h1>
        <h3 class="subtitle">sub headline</h3>
        <nuxt-link to="/contact" class="btn">Enquire</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="css" scoped>
.bg__wrappper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('@/static/bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  margin-top: -80px;
  display: grid;
  place-items: center;
  color: #fff;
}
.content__wrapper {
  text-align: center;
  font-size: 30px;
}
.title {
  font-size: 2.5em;
}
.subtitle {
  font-size: 1.5em;
  margin-bottom: 1rem;
}
.btn {
  font-size: 0.5em;
  padding: 1rem 2rem;
  background: #4a2400;
  border-radius: 30px;
  outline: none;
  border: none;
  color: #fff;
  text-decoration: none;
  transition: all 0.6s;
  letter-spacing: 1px;
}
.btn:hover {
  background: #ff7a00;
}
.btn:focus {
  outline: none;
  border: none;
}
</style>
