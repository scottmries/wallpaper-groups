<template>
  <div>
    <div class="container">
      <h1>p1 (o)</h1>
      <div class="wallpaper">
        <div v-for="i in 12" :key="i">
          <div
            v-for="j in 12"
            :key="j"
            class="square"
            style="background-image: url('https://www.marketplace.org/wp-content/uploads/2019/01/GettyImages-1071520964.jpg?w=600')">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
