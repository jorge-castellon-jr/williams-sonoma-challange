<template>
  <div>
    <v-app-bar fixed app>
      <nuxt-link to="/">
        <v-img src="/logo.svg" contain max-width="250"></v-img>
      </nuxt-link>
      <v-toolbar-title v-text="title" hidden />
      <v-spacer />
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" right temporary fixed>
      <v-list>
        <v-list-item v-for="item in items" :key="item.to" :to="item.to">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: false,
      title: 'Williams Sonoma Challenge',
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.nav__logo {
  max-height: 100%;
}
</style>