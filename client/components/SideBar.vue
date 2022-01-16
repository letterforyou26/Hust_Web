<template>
  <div class="side-bar">
    <ul>
      <NuxtLink v-for="(link, index) in links" :key="index" :to="link.route">
        {{ link.title }}
      </NuxtLink>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>
.side-bar {
  color: #000;
  width: fit-content;
  background-color: #fff;
  padding-bottom: 30px;
}

.side-bar a {
  width: 100%;
  padding: 7px 5px;
  text-decoration: none;
  display: block;
  color: #000;
  font-size: 14px;
  border-top: 1px solid #ddd;
}

.side-bar a:hover {
  color: #9c1010;
  background-color: #ddd;
}

ul {
  padding: 0;
}
</style>
