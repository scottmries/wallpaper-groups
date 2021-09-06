<template>
  <div class="container">
    <h1>p2 (2222)</h1>
    <div class="wallpaper">
      <div v-for="i in 50" :key="i">
        <div
            v-for="j in 50"
            :key="j"
            :class="rotationClass(i)"
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
    rotationClass (i) {
      let degrees = 0
      if (i % 2) {
        degrees = 180
      }
      return 'rotate-' + degrees
    }
  }
}
</script>
