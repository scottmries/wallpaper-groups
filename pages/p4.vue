<template>
  <div class="container">
    <h1>p4 (442)</h1>
    <div class="wallpaper">
      <div v-for="i in 50" :key="i">
        <div
          v-for="j in 50"
          :key="j"
          :class="rotationClass(i, j)"
          class="square"
          :style="`background-image: url('${image}')`">
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
  },
  methods: {
    rotationClass (i, j) {
      let degrees = 0
      if (i % 2 === 0 && j % 2 === 1) {
        degrees = 90
      }
      if (i % 2 === 1 && j % 2 === 1) {
        degrees = 180
      }
      if (i % 2 === 1 && j % 2 === 0) {
        degrees = 270
      }
      return 'rotate-' + degrees
    }
  }
}
</script>
