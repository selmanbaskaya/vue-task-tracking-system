<template>
  <v-app>
    <navigation-drawer-component />
    
    <app-bar-component />

    <v-main>
      <v-container fluid> container </v-container>
    </v-main>

    <v-footer app> footer </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer/NavigationDrawer";
import AppBar from "./components/AppBar/AppBar";
export default {
  name: "App",

  components: {
    "navigation-drawer-component": NavigationDrawer,
    "app-bar-component": AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
