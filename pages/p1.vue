<template>
  <div>
    <div class="container">
      <h1>p1 (o)</h1>
      <div class="wallpaper">
        <div v-for="i in 50" :key="i">
          <div
            v-for="j in 50"
            :key="j"
            class="square"
            :style="`background-image: url('${image}');`">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    image () {
      return this.$store.state.image
    }
  }
}
</script>
