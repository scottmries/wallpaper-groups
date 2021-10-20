<template>
  <div>
    <div class="container">
      <div class="w-1/2">
        <h1>pm (**)</h1>
      </div>
      <div class="w-1/2">
        <div id="source-image-container">
          <img id="image" ref="image" :src="image.path">
        </div>
        <canvas id="canvas" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ctx: null
    }
  },
  computed: {
    image () {
      return this.$store.state.images[this.$store.state.imageIndex]
    },
    scale () {
      return this.$store.state.scale
    }
  },
  mounted () {
    this.$nextTick(() => {
      const c = document.getElementById('canvas')
      const ctx = c.getContext('2d')
      this.ctx = ctx

      const image = document.getElementById('image')

      image.onload = () => {
        this.ctx.canvas.width = window.innerWidth
        this.ctx.canvas.height = window.innerHeight

        const imageWidth = this.image.width * this.scale
        const imageHeight = this.image.height * this.scale

        for (let i = 0; i < this.ctx.canvas.width / imageWidth; i += 1) {
          for (let j = 0; j < this.ctx.canvas.height / imageHeight; j += 2) {
            this.ctx.drawImage(image, i * imageWidth, j * imageHeight, imageWidth, imageHeight)
          }
        }
        for (let i = 0; i < this.ctx.canvas.width / imageWidth; i += 1) {
          for (let j = 0; j < this.ctx.canvas.height / imageHeight; j += 2) {
            this.ctx.save()
            this.ctx.translate(i * imageWidth, j * imageHeight)
            this.ctx.scale(1, -1)
            this.ctx.drawImage(image, 0, 0, imageWidth, imageHeight)
            this.ctx.restore()
          }
        }
      }
    })
  }
}
</script>
