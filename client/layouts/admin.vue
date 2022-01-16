<template>
  <v-app id="inspire">
    <admin-side-bar :drawer="drawer" />
    <admin-top-bar @drawerEvent="drawer = !drawer" />
    <div class="admin-home">
      <Nuxt />
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      cards: ['Today', 'Yesterday'],
      drawer: null
    }
  },
  methods: {
  }

}
</script>

<style scoped>
    .overlap-icon {
        position: absolute;
        top: -33px;
        text-align: center;
        padding-top: 12px;
    }
</style>
