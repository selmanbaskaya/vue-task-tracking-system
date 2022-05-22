<template>
  <v-card elevation="2" outlined shaped tile>
    <v-card-title>Active Projects</v-card-title>

    <v-card-text>
      <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th v-for="column in columns" :key="column" class="text-center">
                {{ column }}
              </th>
            </tr>
          </thead>

          <tbody class="text-center">
            <tr v-for="row in rows" :key="row.name">
              <td>{{ row.project }}</td>
              <td>
                <v-chip color="orange" dark>
                  {{ row.numberOfSubtask }}
                </v-chip>
              </td>
              <td>
                <v-btn class="mx-2" fab dark small color="primary">
                  <v-icon dark> mdi-eye </v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="green">
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="red">
                  <v-icon dark> mdi-delete </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ActiveProjects",
  data() {
    return {
      columns: ["Project", "Number of sub task", "Operations"],
      rows: [
        {
          project: "Project 1",
          numberOfSubtask: 2,
        },
        {
          project: "Project 2",
          numberOfSubtask: 3,
        },
        {
          project: "Project 3",
          numberOfSubtask: 1,
        },
      ],
    };
  },
};
</script>
