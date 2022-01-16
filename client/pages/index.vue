<template>
  <div class="user-page">
    <div class="top-slider-container section-container">
      <top-slider />
    </div>
    <div class="icons-row-container section-container">
      <icons-row />
    </div>
    <div class="content-section-container section-container">
      <content-section />
    </div>
    <div class="img-a">
      <img src="../assets/images/section2.jpg" alt="">
    </div>
    <div class="content-section-container section-container">
      <content-section />
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

.user-page {
  display: flex;
  flex-direction: column;
}

.section-container {
  margin: 10px 0px;
}

.icons-row-container {
  margin-top: 30px;
  padding: 0 150px;
}

.content-section-container {
  padding: 0 150px;
}

.img-a {
  width: 100%;
  height: auto;
}

.img-a img {
  width: 100%;
}
</style>
