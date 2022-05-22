<template>
  <v-card elevation="2" outlined shaped tile>
    <v-card-title>Create New Project</v-card-title>

    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="12" md="9">
              <v-text-field
                v-model="projectName"
                :counter="20"
                :rules="projectNameRules"
                label="Project name"
                required
              >
              </v-text-field
            ></v-col>

            <v-col cols="12" md="3">
              <v-btn block color="primary" class="mt-3 white--text">
                Add Sub Task
                <v-icon right dark>
                  mdi-checkbox-marked-circle-plus-outline
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          
          <v-row>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Create Project
            </v-btn>

            <v-btn color="warning" @click="reset"> Reset All Fields </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CreateProject",
  data: () => ({
    valid: true,
    projectName: "",
    projectNameRules: [
      (v) => !!v || "Project name is required",
      (v) =>
        (v && v.length <= 10) || "Project name must be less than 20 characters",
    ],
    subTasks: [],
    subTaskRules: [
      (v) => !!v || "Project name is required",
      (v) =>
        (v && v.length <= 10) || "Project name must be less than 20 characters",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
