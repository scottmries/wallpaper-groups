<template>
  <div>
    <div class="container">
      <div class="w-1/2">
        <h1>p3 (333)</h1>
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

        const shortSide = (imageWidth > imageHeight ? imageHeight : imageWidth) / 2
        const rhombusWidth = shortSide * Math.sqrt(3) / 2
        // const sideLength = shortSide * Math.cos(Math.PI / 3)

        for (let i = 0; i < this.ctx.canvas.width / rhombusWidth; i += 2) {
          for (let j = 0; j < this.ctx.canvas.height / shortSide; j += 2) {
            this.ctx.save()
            this.ctx.translate(i * rhombusWidth, j * shortSide)
            this.ctx.beginPath()
            this.ctx.moveTo(shortSide - rhombusWidth, shortSide / 2)
            this.ctx.lineTo(shortSide, 0)
            this.ctx.lineTo(shortSide + rhombusWidth, shortSide / 2)
            this.ctx.lineTo(shortSide, shortSide)
            this.ctx.closePath()
            this.ctx.clip()
            this.ctx.drawImage(image, 0, -shortSide / 2, shortSide * 2, shortSide * 2)
            this.ctx.restore()
          }
        }
        for (let i = 0; i < this.ctx.canvas.width / rhombusWidth; i += 2) {
          for (let j = 0; j < this.ctx.canvas.height / shortSide; j += 2) {
            this.ctx.save()
            this.ctx.translate(i * rhombusWidth + shortSide, j * shortSide)
            this.ctx.rotate(-2 * Math.PI / 3)
            this.ctx.beginPath()
            this.ctx.moveTo(0, 0)
            this.ctx.lineTo(rhombusWidth, shortSide / 2)
            this.ctx.lineTo(0, shortSide)
            this.ctx.lineTo(-rhombusWidth, shortSide / 2)
            this.ctx.closePath()
            this.ctx.clip()
            this.ctx.drawImage(image, -shortSide, -shortSide / 2, shortSide * 2, shortSide * 2)
            this.ctx.restore()
          }
        }
        for (let i = 0; i < this.ctx.canvas.width / rhombusWidth; i += 2) {
          for (let j = 0; j < this.ctx.canvas.height / shortSide; j += 2) {
            this.ctx.save()
            this.ctx.translate(i * rhombusWidth + shortSide, j * shortSide)
            this.ctx.rotate(-4 * Math.PI / 3)
            this.ctx.beginPath()
            this.ctx.moveTo(0, 0)
            this.ctx.lineTo(rhombusWidth, shortSide / 2)
            this.ctx.lineTo(0, shortSide)
            this.ctx.lineTo(-rhombusWidth, shortSide / 2)
            this.ctx.closePath()
            this.ctx.clip()
            this.ctx.drawImage(image, -shortSide, -shortSide / 2, shortSide * 2, shortSide * 2)
            this.ctx.restore()
          }
        }
      }
    })
  },
  methods: {
    drawRectangle () {
      this.ctx.save()
      // this.ctx.rotate(Math.PI / 3)
      this.ctx.beginPath()
      this.ctx.rect(0, 0, 200, 200)
      this.ctx.stroke()
      this.ctx.restore()
    }
  }

}
</script>
