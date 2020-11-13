<template>
  <v-row v-if="result">
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
  async asyncData({ route, params }) {
    try {
      let result = await axios
        .get('http://williams-sonoma-challenge.castellon.dev/index.json')
        .then((res) => res.data.groups.find((item) => item.id === params.slug))
        .catch((err) => console.error(err))

      console.log(route)

      let url = 'https://th-articles.netlify.com/',
        currentProduct = url + params.slug,
        logoURL = `${url}/logo.svg`

      return {
        result,
        structuredData: {
          '@context': 'http://schema.org',
          '@graph': [
            {
              '@type': 'Product',
              url: currentProduct,
              name: result.name || 'Did not work',
              image: result.thumbnail.href,
              description: result.name || 'Did not work',
              aggregateRating: {
                ratingValue: result.reviews.averageRating,
                reviewCount: result.reviews.reviewCount,
              },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'USD',
                price: result.price ? result.price.selling : null,
                lowPrice: result.priceRange ? result.priceRange.low : null,
                highPrice: result.priceRange ? result.priceRange.high : null,
                seller: {
                  '@type': 'Organization',
                  name: 'Williams Sonoma California',
                },
              },
            },
          ],
        },
      }
    } catch (err) {
      console.error(err)
      return false
    }
  },
  head() {
    if (this.result) {
      return {
        title:
          `${this.result.name} | Williams Sonoma Challenge` ||
          'Product Page | Williams Sonoma Challenge',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.result.name || '',
          },
        ],
        __dangerouslyDisableSanitizers: ['script'],
        script: [
          {
            innerHTML: JSON.stringify(this.structuredData),
            type: 'application/ld+json',
          },
        ],
      }
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

      if (this.result) {
        images.push(this.result.hero)

        this.result.images.forEach((image) => images.push(image))
      }

      return images
    },
  },
}
</script>

<style lang="scss" scoped>
</style>