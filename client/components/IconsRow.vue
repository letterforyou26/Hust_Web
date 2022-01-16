<template>
  <div class="icons-row">
    <div v-for="icon in iconsList" :key="icon.id" class="icon">
      <img :src="icon.iconSrc">

      <a href="http://bulletin.hust.edu.vn">{{ icon.text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconsList: [
        { iconSrc: 'https://www.hust.edu.vn/documents/21257/82473/covid19.jpg/f5fe76e2-858c-41cd-a4c6-1bb15e4254f4?t=1622352026263', text: 'Covid 19' },
        { iconSrc: 'https://www.hust.edu.vn/documents/21257/95940/bulletin-01.png/f14157c1-0307-47fd-8544-d366d079d0f8?t=1587434416578', text: 'Đặc san điện tử' },
        { iconSrc: 'https://www.hust.edu.vn/documents/21257/95940/WB+logo.png/987eb2d4-5520-454d-8af2-ceb1fab6551f?t=1552638070757', text: 'Dự án SAHEP' },
        { iconSrc: 'https://www.hust.edu.vn/documents/21257/279765/icon+van+ban+phap+che.png/e5e4ad17-8272-465f-807d-e2455f6b0253?t=1511404991717', text: 'Văn bản pháp luật' },
        { iconSrc: 'https://www.hust.edu.vn/documents/21257/189589/tuyen-dung.png/82577e2f-12d9-4a57-8a98-b41433d18acd?t=1503562641692', text: 'Tuyển dụng' },
        { iconSrc: 'https://www.hust.edu.vn/documents/21257/95940/thuVien.png/683b0c9e-2051-4c33-90d4-cb3dcc0df532?t=1474297276753', text: 'Thư viện' },
        { iconSrc: 'https://www.hust.edu.vn/documents/21257/48206/email.jpg/30c7bc5b-7ca7-4835-9738-4af85fb9ab4d?t=1471188334759', text: 'Thư điện tử' },
        { iconSrc: 'https://www.hust.edu.vn/documents/21257/48206/lichcongtac.jpg/ee69901e-df8b-4202-8f9f-0acde5ee41cd?t=1471188333726', text: 'Lịch công tác' },
        { iconSrc: 'https://www.hust.edu.vn/documents/21257/48206/dvtructuyen.jpg/5cbd8318-f778-4ea9-9b87-3dc22b0d7610?t=1471188334541', text: 'Dịch vụ trực tuyến' }
      ]
    }
  }
}
</script>

<style>
.icons-row {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.icons-row .icon {
  width: 75px;
}

.icons-row img {
  width: 50px;
}

.icon a {
  text-decoration: none;
  display: block;
  color: #000;
}
</style>
