<template>
  <div class="news">
    <div class="breadcrumb">
      <NuxtLink to="/">
        Trang chủ
      </NuxtLink>
      >
      <NuxtLink to="/tin-tuc">
        Tin tức
      </NuxtLink>
    </div>
    <h2>Tin tức</h2>
    <div class="content">
      <div class="side-bar-container">
        <side-bar :links="links" />
      </div>
      <div class="post-container">
        <h3>
          {{ post.title }}
        </h3>
        <hr>
        <div class="date">
          <p>
            {{ post.createAt }}
          </p>
        </div>
        <br>
        <br>
        <div class="post-img">
          <img :src="post.thumbnail" alt="">
        </div>
        <br>
        <div class="new-content">
          <!-- eslint-disable vue/no-v-html -->
          <div v-html="post.content" />
        </div>
        <br>
        <div class="author">
          {{ post.author }}
        </div>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // props: {
  //   postDetail: {
  //     type: Object,
  //     default: () => ({})
  //   }
  // },
  data () {
    return {
      post: {},
      page: 1,
      links: [
        {
          title: 'Hoạt động chung',
          route: '/hoat-dong-chung'
        },
        {
          title: 'Công tác Đảng và Đoàn thể',
          route: '/cong-tac-dang-va-doan-the'
        },
        {
          title: 'Đào tạo',
          route: '/dao-tao'
        },
        {
          title: 'Khoa học - Công nghệ',
          route: '/khoa-hoc-cong-nghe'
        },
        {
          title: 'Hợp tác - Đối ngoại - Truyền thông',
          route: '/hop-tac-doi-ngoai-truyen-thong'
        },
        {
          title: 'Tổ chức - Nhân sự',
          route: '/to-chuc-nhan-su'
        },
        {
          title: 'Thông báo',
          route: '/thong-bao'
        },
        {
          title: 'Sự kiện sắp diễn ra',
          route: '/su-kien-sap-dien-ra'
        }
      ]
    }
  },
  created () {
    /* eslint-disable no-debugger, no-console */
    axios.get('http://localhost:8081/tin-tuc/' + this.$route.params.slug)
      .then((response) => {
        this.post = response.data
      })
      .catch((e) => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>
.news {
  align-items: center;
  width: 80%;
  margin: auto;
}

.breadcrumb {
  margin-top: 15px;
  padding: 15px 30px;
  background-image: url('https://www.hust.edu.vn/documents/21257/0/Gioithieu.png/0e3a9dc6-a75f-4038-a83d-06d32ffa0cde?t=1462790417000');
  color: #fff;
  font-size: 24px;
}

.breadcrumb a {
  color: #fff;
  text-decoration: none;
}

h2 {
  font-weight: 400;
  padding: 15px 30px;
}

h3 {
  color: #9c1010;
  font-size: 21px;
}

hr {
  margin: 5px 0;
  width: 105%;
}
.content {
  display: flex;
}

.side-bar-container {
  width: 22%;
}

.post-container {
  position: relative;
  width: 60%;
}

.date {
  position: absolute;
  right: 0;
}

.date p {
  font-style: italic;
  color: #666;
}

.post-img {
  width: 80%;
  margin: auto;
}

.post-img img {
  max-width: 100%;
}

.author {
  font-weight: bold;
  font-style: italic;
  float: right;
}
</style>
