import { createLocalVue, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'

import ProductCard from '@/components/ProductCard.vue'

describe('Product Card Component', () => {
  const localVue = createLocalVue()
  let vuetify, nuxt

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountProductCard = (options) => {
    return mount(ProductCard, {
      localVue,
      vuetify,
      ...options,
    })
  }

  it('is a Vue instance', () => {
    const wrapper = mountProductCard({
      propsData: {
        content: {
          id: 'test-id-1234',
          name: 'Bearaby Velvet Weighted Blanket - Silver Topaz',
          priceRange: {
            selling: {
              high: 299,
              low: 269,
            },
          },
          thumbnail: {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'thumbnail',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202046/0098/bearaby-velvet-weighted-blanket-silver-topaz-1-m.jpg',
            height: 363,
          },
          hero: {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'hero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202046/0098/bearaby-velvet-weighted-blanket-silver-topaz-1-m.jpg',
            height: 363,
          },
          reviews: {
            recommendationCount: 0,
            likelihood: 0,
            reviewCount: 0,
            averageRating: 0,
          },
        },
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
