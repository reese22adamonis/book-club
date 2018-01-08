<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Books">
          <v-btn to="books/add"
           class="red"
           slot="action"
           absolute
            right
            middle
            small>
            <v-icon>+</v-icon>
          </v-btn>


        <div v-for="book in books" :key="book.id">
<!-- 
          <v-layout>
            <v-flex xs6>
              <div>
                {{book.title}}
              </div>

              <div>
                {{book.author}}
              </div>

              <div>
                {{book.genre}}
              </div>
            </v-flex>

            <v-flex xs6>

            </v-flex>
          </v-layout> -->


          {{book.title}}
          |
          {{book.author}}
          |
          {{book.genre}}
          |
          {{book.publisher}}
          |
          {{book.releaseDate}}
          |
          {{book.bookImage}}
          |
          {{book.audioBook}}
          |
          {{book.summary}}
          |
          {{book.description}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import BooksService from '@/services/BooksService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      books: null
      //   [
      // {
      //   title: 'Harry Potter',
      //   author: 'J.K. Rowling',
      //   genre: 'Fantasy Fiction',
      //   publisher: 'Scholastic'
      // }
      //   ]
    }
  },
  // methods: {
  //   navigateTo (route) {
  //     this.$router.push(route)
  //   }
  // },
    async mounted () {
      this.books = (await BooksService.getBooks()).data
    }
  }


</script>

<style scoped>
</style>
