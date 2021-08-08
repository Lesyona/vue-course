<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

      <header>
          <h1>My personal costs</h1>
      </header>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    margin: 0 50px;
    padding: 0;
    font-family: Verdana, Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
