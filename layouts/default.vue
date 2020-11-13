<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <SiteFooter />
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar'
import SiteFooter from '~/components/SiteFooter'

export default {
  components: {
    NavBar,
    SiteFooter,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Challange',
    }
  },
}
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

