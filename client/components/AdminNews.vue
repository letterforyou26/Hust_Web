<template>
  <v-main style="background: #f5f5f540">
    <v-container class="py-8 px-6" fluid>
      <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
          <h3>News</h3>
          <v-btn color="success">
            Write News
          </v-btn>
        </v-subheader>
        <br>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                News List
                <v-spacer />
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                />
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="tests"
                :items-per-page="5"
                class="elevation-1"
                :search="search"
              />
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios'
export default {
  // async asyncData ({ $axios }) {
  //   const posts = await $axios.$get('/tin-tuc')
  //   /* eslint-disable no-debugger, no-console */
  //   console.log('aaaaaaa')
  //   console.log(posts)
  //   return { posts }
  // },
  data () {
    return {
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title'
        },
        { text: 'Thumbnail', value: 'thumbnail' },
        { text: 'Author', value: 'author' },
        { text: 'Create At', value: 'createAt' },
        { text: 'Type', value: 'type' }
      ],
      posts: [
      ],
      tests: [
        {
          title: 'Đại học Bách khoa Hà Nội được vinh danh “Ngôi sao sáng chế IPStar 2021”',
          thumbnail: 'https://www.hust.edu.vn/documents/52727/599484/11.jpg/cd3b5107-0dbf-4718-9e2c-1578588371c1?t=1640659307161',
          author: 'Nguyễn Diệu Ngọc',
          createAt: '27/12/2021',
          type: '61c990bd8e9ac4984ac84a4a',
          createdAt: '2022-01-15T19:41:32.142Z'
        }
      ]
    }
  },
  created () {
    /* eslint-disable no-debugger, no-console */
    axios.get('http://localhost:8081/tin-tuc/')
      .then((response) => {
        /* eslint-disable no-debugger, no-console */
        console.log('aaaaaaa')
        console.log(response.data)
        this.posts = [response.data]
      })
      .catch((e) => {
        this.errors.push(e)
      })
  }
}
</script>

<style>

</style>
