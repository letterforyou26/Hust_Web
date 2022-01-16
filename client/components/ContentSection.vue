<template>
  <div class="section">
    <div class="col-9 section-child">
      <h1>TIN TỨC</h1>
      <div class="news">
        <div class="news-child">
          <img src="https://www.hust.edu.vn/image/journal/article?img_id=610337&t=1639886243581" alt="">
          <NuxtLink to="/tin-tuc/slug">
            Trí thức trẻ Việt Nam kết nối, chia sẻ, góp phần phát triển đất nước
          </NuxtLink>
        </div>
        <div class="news-child">
          <img src="https://www.hust.edu.vn/image/journal/article?img_id=610337&t=1639886243581" alt="">
          <NuxtLink to="/tin-tuc/slug">
            Trí thức trẻ Việt Nam kết nối, chia sẻ, góp phần phát triển đất nước
          </NuxtLink>
        </div>
        <div class="news-child">
          <img src="https://www.hust.edu.vn/image/journal/article?img_id=610337&t=1639886243581" alt="">
          <NuxtLink to="/tin-tuc/slug">
            Trí thức trẻ Việt Nam kết nối, chia sẻ, góp phần phát triển đất nước
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-3 section-child">
      <h1>TIN NỔI BẬT</h1>
      <div class="news">
        <div class="news-child">
          <img src="https://www.hust.edu.vn/image/journal/article?img_id=610337&t=1639886243581" alt="">
          <p>Trí thức trẻ Việt Nam kết nối, chia sẻ, góp phần phát triển đất nước</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.col-9 {
  width: 75%;
  margin: 0 15px;
}

.col-3 {
  width: 25%;
  margin: 0 15px;
}

.section {
  margin: 15px 0;
  display: flex;
}

.section img {
  width: 200px;
}

.section-child {
  border-top: 1px solid #666;
}

.news {
  width: 90%;
  display: flex;
  justify-content: space-between;
}

h1 {
  color: #9c1010;
}

.news-child a {
  display: block;
  max-width: 200px;
  text-decoration: none;
  color: #000;
}

.news-child a:hover {
  color: #9c1010;
}
</style>
