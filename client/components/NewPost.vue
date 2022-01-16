<template>
  <div class="new-post">
    <div class="left-3">
      <img :src="postDetail.thumbnail" alt="">
    </div>
    <div class="right-7">
      <NuxtLink :to="`/tin-tuc/${postDetail._id}`">
        {{ postDetail.title }}
      </NuxtLink>
      <p class="date">
        {{ postDetail.createAt }}
      </p>
      <p>
        {{ postDetail.content.substring(0, 300) }} ...
      </p>
      <NuxtLink :to="`/tin-tuc/${postDetail._id}`">
        <p class="see-more">
          > Xem thêm
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postDetail: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.new-post {
  display: flex;
  padding: 20px 20px 10px 10px;
  border-bottom: 1px solid #ddd;
}

.left-3 {
  width: 30%;
}

.right-7 {
  width: 70%;
}

.left-3 img {
  width: 220px;
}

a {
  text-decoration: none;
  color: #9c1010;
  font-size: 18px;
}

.date {
  font-style: italic;
  font-size: 14px;
  color: #666;
  margin: 10px 0;
}

.see-more {
  font-style: italic;
  font-size: 14px;
}
</style>
