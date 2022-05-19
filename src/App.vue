<template>
  <v-app>
    <v-navigation-drawer app>
      navigation-drawer
    </v-navigation-drawer>

    <v-app-bar app>
      app-bar
    </v-app-bar>

    <v-main>
      <v-container fluid>
        container
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      footer
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
