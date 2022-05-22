<template>
  <v-app>
    <navigation-drawer-component />
    
    <app-bar-component />

    <v-main>
      <v-container fluid>
        <time-sheet-component v-if="timeSheetCompStatus" />
        <dashboard-component v-if="dashboardCompStatus" />
        <reports-component v-if="reportsCompStatus" />
        <projects-component v-if="projectsCompStatus  " />
      </v-container>
    </v-main>

    <footer-component />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import NavigationDrawer from "./components/NavigationDrawer/NavigationDrawer";
import AppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer"
import TimeSheet from "./components/Container/TimeSheet/TimeSheet"
import Dashboard from "./components/Container/Dashboard/Dashboard"
import Reports from "./components/Container/Reports/Reports"
import Projects from "./components/Container/Projects/Projects"

export default {
  name: "App",
  components: {
    "navigation-drawer-component": NavigationDrawer,
    "app-bar-component": AppBar,
    "footer-component": Footer,
    "time-sheet-component": TimeSheet,
    "dashboard-component": Dashboard,
    "reports-component": Reports,
    "projects-component": Projects,
  },
  computed: {
    ...mapGetters(["timeSheetCompStatus", "dashboardCompStatus", "reportsCompStatus", "projectsCompStatus"])
  }
};
</script>
