<template>
  <v-navigation-drawer v-model="navDrawerStatus" app>
    navigation-drawer
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavigationDrawer",
  computed: {
    ...mapGetters(["drawerStatus"]),
    navDrawerStatus: {
      get: function () {
        return this.drawerStatus;
      },
      set: function () {},
    },
  },
};
</script>
