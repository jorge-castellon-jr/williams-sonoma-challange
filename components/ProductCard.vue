<template>
  <v-hover v-slot="{ hover }">
    <v-card
      v-if="content"
      class="product__card"
      :to="`/product/${content.id}`"
      hover
    >
      <v-img
        :height="content.thumbnail.height"
        :src="content.thumbnail.href"
        :alt="content.thumbnail.alt"
        :rel="content.thumbnail.rel"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex justify-center align-center text-center transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%"
          >
            <span v-if="content.priceRange">
              ${{ convertDecimal(content.priceRange.selling.low) }} - ${{
                convertDecimal(content.priceRange.selling.high)
              }}
            </span>

            <span v-if="content.price">
              <div
                :class="
                  content.price.regular == content.price.selling
                    ? ''
                    : 'text-decoration-line-through'
                "
              >
                ${{ convertDecimal(content.price.regular) }}
              </div>
              <div v-if="content.price.regular != content.price.selling">
                ${{ convertDecimal(content.price.selling) }}
              </div>
            </span>
          </div>
        </v-expand-transition>
      </v-img>

      <v-card-title>{{ content.name }}</v-card-title>

      <v-card-text class="align-self-end">
        <v-row align="center" class="mx-0">
          <v-rating
            :value="content.averageRating"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">{{ displayReviews }}</div>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertDecimal(value) {
      return value.toFixed(2)
    },
  },
  computed: {
    displayReviews() {
      return this.content.reviewCount > 0
        ? `${this.content.averageCount} (${this.content.reviewCount})`
        : 'No Reviews'
    },
  },
}
</script>

<style lang="scss" scoped>
.product {
  &__card {
    transition: box-shadow 0.3s ease;
    height: 100%;
    padding-bottom: 38px;
    position: relative;
  }
}

.v-card {
  &__title {
    word-break: keep-all;
  }
  &__text {
    position: absolute;
    bottom: 0;
  }
}
</style>