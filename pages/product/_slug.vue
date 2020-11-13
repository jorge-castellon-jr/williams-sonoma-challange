<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in images"
          :key="i"
          :src="item.href"
          :alt="item.alt"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col>
      <h1 class="mb-4 display-2 font-weight-thin">
        {{ result.name }}
      </h1>
      <div class="display-1">
        <span v-if="result.priceRange">
          ${{ convertDecimal(result.priceRange.selling.low) }} - ${{
            convertDecimal(result.priceRange.selling.high)
          }}
        </span>

        <span v-if="result.price">
          <div
            :class="
              result.price.regular == result.price.selling
                ? ''
                : 'text-decoration-line-through'
            "
          >
            ${{ convertDecimal(result.price.regular) }}
          </div>
          <div v-if="result.price.regular != result.price.selling">
            ${{ convertDecimal(result.price.selling) }}
          </div>
        </span>
      </div>

      <v-btn to="/" text color="orange darken-2" class="mt-4">
        Back to All New Products
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SingleProduct',
  async asyncData({ params }) {
    try {
      let result = await axios
        .get(
          'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
        )
        .then((res) => res.data.groups.find((item) => item.id === params.slug))
        .catch((err) => console.error(err))
      return {
        title: result.name,
        result,
      }
    } catch (err) {
      console.error(err)
      return false
    }
  },
  head() {
    return {
      title:
        `${this.title} | Williams Sonoma Challenge` ||
        'Product Page | Williams Sonoma Challenge',
    }
  },
  methods: {
    convertDecimal(value) {
      return value.toFixed(2)
    },
  },
  computed: {
    images() {
      let images = []

      images.push(this.result.hero)

      this.result.images.forEach((image) => images.push(image))

      return images
    },
  },
}
</script>

<style lang="scss" scoped>
</style>