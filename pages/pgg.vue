<template>
  <div class="container">
    <h1>pgg (22x)</h1>
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
      let transformClass = ''
      if (i % 2 === 1) {
        if (j === 1) {
          transformClass += 'bottom-half '
        }
        transformClass += 'glide-reflect '
      } else if (j === 12) {
        transformClass += 'bottom-half '
      }
      if (j % 2 === 0) {
        transformClass += 'rotate-180 '
      }
      return transformClass
    }
  }
}
</script>
