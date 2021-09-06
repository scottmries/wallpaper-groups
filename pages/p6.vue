<template>
  <div class="container">
    <!-- <h1>p6 (636)</h1> -->
    <div class="wallpaper relative">
      <div v-for="i in 6" :key="i" class="absolute">
        <div
            v-for="j in 1"
            :key="j"
            :style="`background-image: url('${image}'); transform: translate(${translateClass(i, j)}) rotate(${rotationClass(i, j)})`"
            class="isosceles-120">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scale: 60
    }
  },
  computed: {
    image () {
      return this.$store.state.image
    }
  },
  methods: {
    rotationClass (i, j) {
      return ((i + j) % 6) * -60 + 'deg'
    },
    translateClass (i, j) {
      const x = 0
      let y = 0
      switch (j % 6) {
        case 1:
          y = -51
          break
        case 2:
          y = -34.64
          break
        case 3:
          y = -87.32
          break
        case 4:
          y = -70
          break
        case 5:
          y = -120
          break
      }
      // let y = (j % 6) * 51.96
      // y -= i * 0
      return x + ', ' + y + 'px'
    }
  }
}
</script>
