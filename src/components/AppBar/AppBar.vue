<template>
  <v-app-bar app color="deep-dark" dense dark>
    <v-app-bar-nav-icon @click="test"></v-app-bar-nav-icon>

    <v-toolbar-title>Task Tracking System</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AppBar",
  methods: {
    ...mapActions(["updateDrawerStatus"]),
    test: function () {
      this.updateDrawerStatus();
    },
  },
};
</script>
