<template>
  <div class="container">
    <!-- <h1>p6 (636)</h1> -->
    <div class="wallpaper">
      <div v-for="i in 50" :key="i">
        <div
            v-for="j in 50"
            :key="j"
            :style="'transform: translate(' + translateClass(i, j) + ') rotate(' + rotationClass(i, j) + ')'"
            class="hexagon"
            style="background-image: url('https://www.marketplace.org/wp-content/uploads/2019/01/GettyImages-1071520964.jpg?w=600')">
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
  methods: {
    clipPath () {
      return '0px 30px, 15px 4.02px, 45px 4.02px, 60px 30px, 45px 55.98px, 15px 55.98px'
    },
    rotationClass (i, j) {
      return ((i + j) % 6) * 60 + 'deg'
    },
    translateClass (i, j) {
      const x = -i * 15 + 'px'
      let y = -j * 8.04
      y -= (i % 12) * 24.1
      return x + ', ' + y + 'px'
    }
  }
}
</script>
