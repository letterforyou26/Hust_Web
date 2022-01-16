<template>
  <div class="top-slider">
    <v-carousel
      cycle
      delimiter-icon="mdi-minus"
      height="400"
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      />
    </v-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://www.hust.edu.vn/documents/59786/537140/6-01.jpg/483590ed-32ba-4d20-83c1-e3d7aea78daa?t=1604017042000'
        },
        {
          src: 'https://thithptquocgia.org/wp-content/uploads/2021/06/bkhn-c1.jpg'
        },
        {
          src: 'https://www.hust.edu.vn/documents/21257/47292/Gi%E1%BB%9Bi-thi%E1%BB%87u_2.jpg/813e3aa1-bcb9-47e0-8559-db53a888d223?t=1467713886000'
        }
      ]
    }
  }
}
</script>

<style scoped>
.v-window {
  box-shadow: 0 0 20px #333;
}

.top-slider {
  background-image: url("https://www.hust.edu.vn/hust-theme/images/bg-baner.png");
  padding: 0 130px;
  overflow: hidden;
}
</style>
