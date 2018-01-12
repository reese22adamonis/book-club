<template>
  <Panel :title="this.book.title">

    <v-layout>
      <v-flex xs6>
        <div class="bookAuthor">
          Author:
          {{book.author}}
        </div>
        <div>
          <img class="bookImage" :src="book.bookImage" />
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


        <v-btn class="edit"
         :to="'/books/'+book.id+'/edit'">
          Edit
        </v-btn>


      </v-flex>

      <v-flex xs6>
        <div class="bookSummary">
          Summary:
          {{book.summary}}
        </div>
        <div class="bookOpinion">
          Opinion:
          {{book.opinion}}
        </div>
        <div class="bookAudio">
          Audio:
          {{book.opinion}}
        </div>
      </v-flex>

    </v-layout>
  </Panel>

</template>

<script>

import BooksService from '@/services/BooksService'
import Panel from '@/components/Panel'


export default {
  data () {
    return {
      book: {}
    }
  },

  async mounted () {
    const bookId = this.$store.state.route.params.bookId
    this.book = (await BooksService.show(bookId)).data
  },
  methods: {
    navgateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}

</script>

<style scoped>

.bookImage {
    width: 30%;
    height: 320px;
  }

.bookTitle {
    font-size: 20px;
  }

.bookAuthor {
    font-size: 40px;
}

</style>
