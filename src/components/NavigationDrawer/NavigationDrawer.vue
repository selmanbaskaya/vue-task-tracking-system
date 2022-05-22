<template>
  <v-navigation-drawer v-model="navDrawerStatus" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          <v-icon color="black">mdi-archive-clock-outline</v-icon>
          TT System
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in drawerItemList"
        :key="item.title"
        link
        @click="openClickedComponent(item.title)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NavigationDrawer",
  computed: {
    ...mapGetters(["drawerStatus", "drawerItemList"]),
    navDrawerStatus: {
      get: function () {
        return this.drawerStatus;
      },
      set: function () {},
    },
  },

  methods: {
    ...mapActions([
      "updateTimeSheetCompStatus",
      "updateDashboardCompStatus",
      "updateReportsCompStatus",
      "updateProjectsCompStatus",
    ]),
    openClickedComponent: function (clickedComponentName) {
      clickedComponentName === "TIMESHEET"
        ? this.updateTimeSheetCompStatus()
        : clickedComponentName === "DASHBOARD"
        ? this.updateDashboardCompStatus()
        : clickedComponentName === "REPORTS"
        ? this.updateReportsCompStatus()
        : this.updateProjectsCompStatus();
    },
  },
};
</script>
