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
            style="background-image: url('https://www.marketplace.org/wp-content/uploads/2019/01/GettyImages-1071520964.jpg?w=600')">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
