<template>
  <div class="container">
    <h1>pg (xx)</h1>
    <div class="wallpaper">
      <div v-for="i in 12" :key="i">
        <div
          v-for="j in 12"
          :key="j"
          :class="glideAndClip(i, j)"
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
    glideAndClip (i, j) {
      if (i % 2 === 1) {
        if (j === 1) {
          return 'glide-reflect bottom-half'
        }
        return 'glide-reflect'
      }
      if (j === 12) {
        return 'top-half'
      }
    }
  }
}
</script>
