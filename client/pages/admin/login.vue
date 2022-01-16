<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title class="white-text">
                  Login form
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="authenticate">
                  <div class="noti">
                    {{ message }}
                  </div>
                  <v-text-field
                    v-model="username"
                    prepend-icon="person"
                    name="username"
                    label="Username"
                    type="text"
                  />
                  <v-text-field
                    id="password"
                    v-model="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                  />
                  <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" @click="authenticate">
                      Login
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'null',
  data () {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async authenticate () {
      const response = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      this.message = response.data.message
      if (!response.data.user) {
        // this.$store.loginSuccess(this.user)
        this.$router.push('/admin/login')
      } else {
        this.$router.push('/admin/home')
      }
    }
  }
}
</script>

<style scoped>
#app {
  background: linear-gradient(to bottom left, #0099ff 0%, #ccffff 100%);
}

.v-sheet.v-card {
  margin-top: -60px;
}

.noti {
  color: red;
}

.white-text {
  color: #fff;
}
</styles>
