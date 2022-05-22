<template>
  <div>
    <active-projects-component />
    
    <create-project-component class="mt-5" />
  </div>
</template>

<script>
import ActiveProjects from "./ActiveProjects"
import CreateProject from "./CreateProject"
export default {
  name: "Dashboard",
  components: {
    "active-projects-component": ActiveProjects,
    "create-project-component": CreateProject,
  },
};
</script>
