<template>
  <v-layout>
    <v-flex md3>
      <panel title = "Enter Book Info">
        <v-text-field
        required
        :rules="[required]"
        label= "Title"
        v-model= "book.title"
        ></v-text-field>

        <v-text-field
        required
        :rules="[required]"
        label= "Author"
        v-model= "book.author"
        ></v-text-field>

        <v-text-field
        required
        :rules="[required]"
        label= "Genre"
        v-model= "book.genre"
        ></v-text-field>

        <v-text-field
        required
        :rules="[required]"
        label= "Publisher"
        v-model= "book.publisher"
        ></v-text-field>

        <v-text-field
        required
        :rules="[required]"
        label= "Release Date"
        v-model= "book.releaseDate"
        ></v-text-field>

        <v-text-field
        required
        :rules="[required]"
        label= "Book Cover"
        v-model= "book.bookImage"
        ></v-text-field>

        <v-text-field
        required
        :rules="[required]"
        label= "Video/Audio Book"
        v-model= "book.audioBook"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex md9>
      <panel title="About The Book" class=ml-3>
      <v-text-field
      required
      label= "Opinion of Book"
      multi-line
      v-model= "book.description"
      ></v-text-field>

      <v-text-field
      required
      label= "Summary"
      multi-line
      v-model= "book.summary"
      ></v-text-field>
    </panel>
    <v-btn class="red"
     @click="create">
      Put Book Together
    </v-btn>
    </v-flex>

  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import BooksService from '@/services/BooksService'

export default {
  data () {
    return {
      book: {
        title: null,
        author: null,
        genre: null,
        publisher: null,
        releaseDate: null,
        bookImage: null,
        audioBook: null,
        summary: null,
        description: null
      },
        required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      try {
        await BooksService.post(this.book)
        this.$router.push({
          name: 'books'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
