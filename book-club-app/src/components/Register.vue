<template>
  <div>
    <h1>Sign Up</h1>

    <input
      type= "email"
      name= "email"
      v-model= "email"
      placeholder= "email"
      />
      <br>
      <input
        type= "password"
        name= "password"
        v-model= "password"
        placeholder= "password"
        />
        <br>
        <button
         @click="register">
          Sign Up
        </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      password: '',
      email: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
