<template>
  <div class="layout-footer">
    <div class="col-3">
      <h3>Bản đồ chỉ dẫn</h3>
      <p>Trường đại học Bách khoa Hà Nội</p>
      <a href="https://www.google.com/maps/place/Trường+Đại+học+Bách+khoa+Hà+Nội/@21.0070516,105.840707,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac76ccab6dd7:0x55e92a5b07a97d03!8m2!3d21.0070516!4d105.8428957">
        <img src="https://www.hust.edu.vn/hust-theme/images/bk-hn.png" alt="">
      </a>
    </div>
    <div class="col-3 social">
      <h3>Mạng xã hội</h3>
      <v-icon large>
        mdi-facebook
      </v-icon>
      <v-icon large>
        mdi-youtube
      </v-icon>
      <v-icon large>
        mdi-instagram
      </v-icon>
      <v-icon large>
        mdi-twitter
      </v-icon>
      <v-icon large>
        mdi-telegram
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.layout-footer {
  width: 100%;
  height: 370px;
  display: flex;
  background-image: url("https://www.hust.edu.vn/hust-theme/images/footer.png");
  padding: 20px 150px;
  color: #fff;
}

.col-3 {
  width: 25%;
}

img {
  max-height: 150px;
}

h3 {
  font-weight: 400;
  text-transform: uppercase;
}

.v-icon {
  color: #fff;
}
</style>
