<template>
  <v-toolbar fixed class="red">
    <v-toolbar-title class="mr-4">
      <v-btn
        flat
        @click="navigateTo({name: '/'})">
        Book Club
      </v-btn>
    </v-toolbar-title>

      <v-toolbar-items>
        <v-btn flat
          @click="navigateTo({name: 'books'})">
          Browse Books
        </v-btn>
      </v-toolbar-items>

      <v-spacer>
      </v-spacer>

      <v-toolbar-items>

        <v-btn flat
          @click="navigateTo({name: 'register'})">
            Sign Up
        </v-btn>

          <v-btn flat
            @click="navigateTo({name: 'login'})">
              Login
          </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>
