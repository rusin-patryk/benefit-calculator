<template>
  <div>
    <v-card-title class="d-flex flex-column align-start">
      KALKULATOR DLA HR I DECYDENTÓW
      <small>
        Czy opłaca się wspierać zdrowie psychiczne pracowników systemowo i kompleksowo?
      </small>
    </v-card-title>
    <v-divider />
    <v-card-text>
      INSTRUKCJA<br>
      Uzupełnij pola oznaczone kolorem czerwonym.<br>
      Możesz również modyfikować pola oznaczone kolorem żółtym.
    </v-card-text>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col xs="12" md="4">
          <v-text-field
            label="Ogólna liczba pracowników w firmie"
            outlined
          ></v-text-field>
          <v-text-field
            label="Procent pracowników, którzy mają problemy"
            outlined
          ></v-text-field>
          <v-text-field
            label="Szacowany procent obniżenia efektywności"
            outlined
          ></v-text-field>
        </v-col>
        <v-col xs="12" md="8">

        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style
  scoped
  lang="scss"
>
h3 {
  margin: 40px 0 0;
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
</style>
