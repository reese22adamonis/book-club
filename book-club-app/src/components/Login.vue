<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <panel title="Login">
          <v-text-field
          label="Email"
          v-model= "email"
          ></v-text-field>

            <br>

          <v-text-field
          label= "Password"
          type="password"

          v-model= "password"
          ></v-text-field>

              <br>
              <div class="error" v-html="error" />
              <br>
              <v-btn class="red"
               @click="login">
                Login
              </v-btn>
            </panel>
          </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      password: '',
      email: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}
</style>
