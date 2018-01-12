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

          <v-layout>
            <v-flex xs2>
              <div class="bookTitle">
                {{book.title}}
              </div>

              <v-btn class="navigateToSong"
               :to="'books/'+book.id">
                Show
              </v-btn>


            </v-flex>
            <v-flex xs6>
              <div class="bookAuthor">
                {{book.author}}
              </div>

              <div class="bookGenre">
                {{book.genre}}
              </div>

              <div class="bookPublisher">
                {{book.publisher}}
              </div>

              <div class="bookReleaseDate">
                {{book.releaseDate}}
              </div>
            </v-flex>

            <v-flex xs6>
              <img class="bookImage" :src="book.bookImage" />
            </v-flex>
          </v-layout>

          <!-- {{book.title}}
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
          {{book.description}} -->
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
      this.books = (await BooksService.index()).data
    }
  }


</script>

<style scoped>

.bookImage {
    width: 65%;
    height: 275px;
  }

.bookTitle {
    font-size: 20px;
  }


</style>
