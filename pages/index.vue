<template>
  <v-row justify="center" align="center">
    <v-col cols="12" lg="10" v-if="result">
      <h1 class="text-h2">Category: {{ result.name }}</h1>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="item in result.groups"
          :key="item.id"
        >
          <ProductCard :content="item" />
        </v-col>
      </v-row>

      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="result.totalPages"
          color="orange darken-2"
          :total-visible="5"
          circle
        ></v-pagination>
        <!-- TODO: create the funtional process for changing pages -->
      </div>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
import ProductCard from '~/components/ProductCard'

export default {
  name: 'Home',
  head: () => ({
    title: 'Williams Sonoma Challenge',
  }),
  components: {
    ProductCard,
  },
  async asyncData({ redirect }) {
    // console.log(document.URL)
    return await axios
      .get('http://williams-sonoma-challenge.castellon.dev/index.json')
      .then((res) => ({ result: res.data, page: 1 }))
      .catch((err) => redirect(404, '/404'))
  },
}
</script>
