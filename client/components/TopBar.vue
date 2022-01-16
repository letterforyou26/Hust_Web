<template>
  <div class="top-bar">
    <v-app id="inspire">
      <v-toolbar dark :color="dynamic">
        <v-spacer />
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text to="/">
            Trang chủ
          </v-btn>
          <v-menu v-for="link in links" :key="link.title" offset-y open-on-hover>
            <template #activator="{ on, attrs }">
              <v-btn
                color="transparent"
                dark
                v-bind="attrs"
                :to="link.route"
                v-on="on"
              >
                {{ link.title }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="subLink in link.subLinks"
                :key="subLink.title"
              >
                <v-list-item-title>{{ subLink.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu offset-y open-on-hover>
            <template #activator="{ on, attrs }">
              <v-btn
                color="secondary"
                dark
                v-bind="attrs"
                href="https://e.hust.edu.vn"
                v-on="on"
              >
                EHUST
              </v-btn>
            </template>
          </v-menu>
        </v-toolbar-items>
        <v-spacer />
      </v-toolbar>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    dynamic: '#9c1010',
    transparent: 'transparent',
    links: [
      {
        title: 'Giới thiệu',
        route: '/gioi-thieu',
        subLinks: [
          {
            title: 'Thông điệp của Hiệu trưởng',
            route: '/thong-diep-cua-hieu-truong'
          },
          {
            title: 'Tổng quan',
            route: '/tong-quan'
          },
          {
            title: 'Cơ cấu tổ chức',
            route: '/co-cau-to-chuc'
          },
          {
            title: 'Ba công khai',
            route: '/ba-cong-khai'
          },
          {
            title: 'Media',
            route: '/media'
          }
        ]
      },
      {
        title: 'Tin tức & sự kiện',
        route: '/tin-tuc',
        subLinks: [
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
          }
        ]
      },
      {
        title: 'Tuyển sinh',
        route: '/tuyen-sinh',
        subLinks: [
          {
            title: 'Đại học',
            route: '/hoat-dong-chung'
          },
          {
            title: 'Cao học',
            route: '/cong-tac-dang-va-doan-the'
          },
          {
            title: 'Nghiên cứu sinh',
            route: '/dao-tao'
          },
          {
            title: 'Vừa làm vừa học',
            route: '/khoa-hoc-cong-nghe'
          },
          {
            title: 'Văn bằng 2',
            route: '/hop-tac-doi-ngoai-truyen-thong'
          }
        ]
      },
      {
        title: 'Đào tạo',
        route: '/tin-tuc-su-kien',
        subLinks: [
          {
            title: 'Đào tạo chính quy',
            route: '/hoat-dong-chung'
          },
          {
            title: 'Đào tạo Elitech',
            route: '/cong-tac-dang-va-doan-the'
          },
          {
            title: 'Thạc sĩ',
            route: '/dao-tao'
          },
          {
            title: 'Tiến sĩ',
            route: '/khoa-hoc-cong-nghe'
          },
          {
            title: 'Vừa làm vừa học',
            route: '/hop-tac-doi-ngoai-truyen-thong'
          }
        ]
      },
      {
        title: 'Sinh viên',
        route: '/tin-tuc-su-kien',
        subLinks: [
          {
            title: 'Học bổng - Học phí',
            route: '/hoat-dong-chung'
          },
          {
            title: 'Hỗ trợ đời sống',
            route: '/cong-tac-dang-va-doan-the'
          },
          {
            title: 'Hướng nghiệp & Việc làm',
            route: '/dao-tao'
          },
          {
            title: 'Nghiên cứu & Sáng tạo',
            route: '/khoa-hoc-cong-nghe'
          },
          {
            title: 'Hoạt động ngoại khóa',
            route: '/hop-tac-doi-ngoai-truyen-thong'
          },
          {
            title: 'Đào tạo kĩ năng',
            route: '/hop-tac-doi-ngoai-truyen-thong'
          },
          {
            title: 'Sinh viên tương lai',
            route: '/hop-tac-doi-ngoai-truyen-thong'
          },
          {
            title: 'Cựu sinh viên',
            route: '/hop-tac-doi-ngoai-truyen-thong'
          },
          {
            title: 'Liên hệ',
            route: '/hop-tac-doi-ngoai-truyen-thong'
          }
        ]
      },
      {
        title: 'Nghiên cứu',
        route: '/tin-tuc-su-kien',
        subLinks: [
          {
            title: 'Thông tin ứng viên GS/PGS',
            route: '/hoat-dong-chung'
          },
          {
            title: 'Hoạt động nghiên cứu khoa học và sáng tạo',
            route: '/cong-tac-dang-va-doan-the'
          },
          {
            title: 'Các đơn vị nghiên cứu',
            route: '/dao-tao'
          },
          {
            title: 'Tạp chí khoa học công nghệ',
            route: '/khoa-hoc-cong-nghe'
          }
        ]
      },
      {
        title: 'Hợp tác đối ngoại',
        route: '/tin-tuc-su-kien',
        subLinks: [
          {
            title: 'Tin tức học bổng',
            route: '/hoat-dong-chung'
          },
          {
            title: 'Mạng lưới đối tác',
            route: '/cong-tac-dang-va-doan-the'
          },
          {
            title: 'Hoạt động hợp tác',
            route: '/dao-tao'
          }
        ]
      }
    ]
  })
}
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 60px;
}

.v-toolbar__content {
  background-color: #fff !important;
}
</style>
