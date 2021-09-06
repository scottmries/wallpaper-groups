<template>
  <div class="container">
    <!-- <h1>p3 (333)</h1> -->
    <div class="wallpaper">
      <div v-for="i in 50" :key="i">
        <div
            v-for="j in 50"
            :key="j"
            :style="`
              background-image: url('${image}');
              transform: translate(${translateClass(i, j)}) rotate(${rotationClass(i, j)});
            `"
            class="hexagon">
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
    clipPath () {
      return '0px 30px, 15px 4.02px, 45px 4.02px, 60px 30px, 45px 55.98px, 15px 55.98px'
    },
    rotationClass (i, j) {
      switch ((i + j) % 3) {
        case 0:
          return '0deg'
        case 1:
          return '120deg'
        case 2:
          return '240deg'
      }
    },
    translateClass (i, j) {
      const x = -i * 15 + 'px'
      let y = -j * 8.04
      y -= (i % 6) * 24.3
      return x + ', ' + y + 'px'
    }
  }
}
</script>
