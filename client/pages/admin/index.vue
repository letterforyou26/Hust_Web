<template>
  <v-app>
    <div class="container">
      <div class="noti">
        <v-alert
          :value="alert"
          :type="noti.typeNoti"
        >
          {{ noti.message }}
        </v-alert>
      </div>
      <h1 class="h1-post">
        Tạo một bài đăng mới
      </h1>
      <v-row>
        <v-text-field
          v-model="title"
          label="Title"
          outlined
        />
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-file-input
            v-model="thumbnail"
            accept="image/*"
            label="Thumbnail image"
            outlined
          />
        </v-col>
        <v-col cols="4">
          <v-combobox
            v-model="type"
            label="Type"
            :items="items"
            outlined
          />
        </v-col>
      </v-row>
      <div class="my-ckeditor">
        <h3 class="h3-post">
          Nội dung
        </h3>
        <my-ckeditor v-model="content" />
      </div>
      <div class="save-btn">
        <v-btn @click="saveContent">
          Save
        </v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      title: '',
      thumbnail: '',
      content: '',
      type: '',
      items: ['Tin tức', 'Thông báo', 'Sinh viên', 'Đào tạo', 'Tuyển sinh', 'Nghiên cứu', 'Hợp tác đối ngoại'],
      noti: {
        message: '',
        typeNoti: '',
        alert: true
      }
    }
  },
  methods: {
    async saveContent ({ $axios }) {
      const response = await $axios.$post('/tin-tuc/create', {
        title: this.title,
        thumbnail: this.thumbnail,
        content: this.content,
        type: this.type
      })
      this.noti.alert = true
      this.noti.message = response.message
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0px auto;
  padding: 30px;
}
.save-btn {
  margin-top: 30px;
  float: right;
}

.h1-post {
  text-transform: uppercase;
  margin: 0px 0px 30px -20px;
}

.h3-post {
  margin-bottom: 10px;
}

#app {
  color: #000;
}
</style>
