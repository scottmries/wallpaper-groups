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
            style="background-image: url('https://www.marketplace.org/wp-content/uploads/2019/01/GettyImages-1071520964.jpg?w=600')">
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
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
