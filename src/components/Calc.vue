<template>
  <div>
    <v-card-title class="d-flex flex-column align-start pl-7 pr-7">
      KALKULATOR DLA HR I DECYDENTÓW
      <small>
        Czy opłaca się wspierać zdrowie psychiczne pracowników systemowo i kompleksowo?
      </small>
    </v-card-title>
    <v-divider />
    <v-card-text class="pl-7 pr-7">
      INSTRUKCJA<br>
      Uzupełnij pola oznaczone kolorem czerwonym.<br>
      Możesz również modyfikować pola oznaczone kolorem żółtym.
    </v-card-text>
    <v-divider />
    <v-card-text class="pl-7 pr-7 bigger-input-font">
      <v-row>
        <v-col
          cols="12"
          xs="12"
          md="4"
          class="pr-md-7"
        >
          <h4 class="pb-2">Ogólna liczba pracowników w firmie</h4>
          <v-text-field
            color="red darken-2"
            background-color="red lighten-4"
            outlined
            type="number"
            autocomplete="off"
            dense
            v-model="formData.employees"
          />
          <h4 class="pb-2">Procent pracowników, którzy mają problemy</h4>
          <v-text-field
            color="yellow darken-4"
            background-color="yellow lighten-3"
            outlined
            type="number"
            autocomplete="off"
            dense
            v-model="formData.employeesWithProblems"
          >
            <template v-slot:append>
              <span class="append">%</span>
            </template>
          </v-text-field>
          <h4 class="pb-2">Szacowany procent obniżenia efektywności</h4>
          <v-text-field
            color="yellow darken-4"
            background-color="yellow lighten-3"
            outlined
            type="number"
            autocomplete="off"
            dense
            v-model="formData.reducedEfficiency"
          >
            <template v-slot:append>
              <span class="append">%</span>
            </template>
          </v-text-field>
        </v-col>

        <v-col
          cols="12"
          xs="12"
          md="8"
          class="pt-0 pl-md-7"
        >
          <v-row>
            <v-col
              cols="12"
              xs="12"
              sm="6"
            >
              <h4 class="pb-2">Średnie miesięczne wynagrodzenie brutto pracownika w firmie</h4>
              <v-text-field
                color="red darken-2"
                background-color="red lighten-4"
                outlined
                type="number"
                autocomplete="off"
                dense
                v-model="formData.averageSalary"
              >
                <template v-slot:append>
                  <span class="append">zł</span>
                </template>
              </v-text-field>
              <h4 class="pb-2">Budżet miesięcznych wynagrodzeń pracowników, którzy mają problemy wpływające na ich
                               efektywność w pracy</h4>
              <v-text-field
                outlined
                autocomplete="off"
                dense
                readonly
                :value="monthlySalariesBudget() | separator"
              >
                <template v-slot:append>
                  <span class="append">zł</span>
                </template>
              </v-text-field>
              <h4 class="pb-2">Miesięczne koszty pracodawcy z powodu obniżonej efektywności pracowników</h4>
              <v-text-field
                outlined
                autocomplete="off"
                dense
                readonly
                :value="monthlyEmployerCosts() | separator"
                class="font-weight-bold"
              >
                <template v-slot:append>
                  <span class="append">zł</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col
              cols="12"
              xs="12"
              sm="6"
            >
              <h4 class="pb-2">Całkowity koszt średniego miesięcznego wynagrodzenia pracownika dla pracodawcy
                               (x1,2)</h4>
              <v-text-field
                outlined
                autocomplete="off"
                dense
                readonly
                :value="employerCosts() | separator"
              >
                <template v-slot:append>
                  <span class="append">zł</span>
                </template>
              </v-text-field>
              <h4 class="pb-2">Budżet rocznych wynagrodzeń pracowników, którzy mają problemy wpływające na ich
                               efektywność w pracy</h4>
              <v-text-field
                outlined
                autocomplete="off"
                dense
                readonly
                :value="yearlySalariesBudget() | separator"
              >
                <template v-slot:append>
                  <span class="append">zł</span>
                </template>
              </v-text-field>
              <h4 class="pb-2">Roczne koszty pracodawcy z powodu obniżonej efektywności pracowników</h4>
              <v-text-field
                outlined
                autocomplete="off"
                dense
                readonly
                :value="yearlyEmployerCosts() | separator"
                class="font-weight-bold"
              >
                <template v-slot:append>
                  <span class="append">zł</span>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data() {
    return {
      formData: {
        employees: 1000,
        employeesWithProblems: 5,
        reducedEfficiency: 20,
        averageSalary: 5227,
      },
    };
  },

  methods: {
    monthlySalariesBudget() {
      return Math.round(this.formData.employees * (this.formData.employeesWithProblems / 100) * this.employerCosts());
    },

    monthlyEmployerCosts() {
      return Math.round(this.monthlySalariesBudget() * (this.formData.reducedEfficiency / 100));
    },

    employerCosts() {
      return Math.round(this.formData.averageSalary * 1.2);
    },

    yearlySalariesBudget() {
      return Math.round(this.monthlySalariesBudget() * 12);
    },

    yearlyEmployerCosts() {
      return Math.round(this.monthlyEmployerCosts() * 12);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style
  lang="scss"
>
h3 {
  margin: 40px 0 0;
}

h4 {
  min-height: 74px;
  display: flex;
  align-items: flex-end;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.bigger-input-font input, .bigger-input-font .append {
  font-size: 20px !important;
}
</style>
