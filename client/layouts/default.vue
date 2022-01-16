<template>
  <v-app>
    <div class="layout-user">
      <div class="top-bar-container">
        <top-bar />
      </div>
      <div class="top-banner-container">
        <top-banner />
      </div>
      <Nuxt />
      <div class="layout-footer-container">
        <layout-footer />
      </div>
    </div>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.ck-editor__editable {
  min-height: 300px !important;
}

.layout-user {
  background-color: #fff;
  color: #000;
}

.top-bar-container {
  overflow: hidden;
}
</style>
