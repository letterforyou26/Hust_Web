<template>
  <div class="news">
    <div class="breadcrumb">
      <NuxtLink to="/">
        Trang chủ
      </NuxtLink>
      >
      <NuxtLink to="/tin-tuc">
        Tin tức & Sự kiện
      </NuxtLink>
    </div>
    <h2>Tin tức & Sự kiện</h2>
    <div class="content">
      <div class="side-bar-container">
        <side-bar :links="links" />
      </div>
      <div class="new-post-container">
        <new-post v-for="post in posts" :key="post" :post-detail="post" />
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="15"
            :total-visible="7"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewPost from '../../components/NewPost.vue'
export default {
  components: { NewPost },
  async asyncData ({ $axios }) {
    const posts = await $axios.$get('/tin-tuc')
    return { posts }
  },

  data () {
    return {
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

.content {
  display: flex;
}

.side-bar-container {
  width: 25%;
}

.new-post-container {
  width: 73%;
}

.text-center {
  margin: 15px 0;
}
</style>
