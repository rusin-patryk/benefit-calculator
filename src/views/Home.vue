<template>
  <div class="home">
    <div>
      <v-card-title class="d-flex flex-column align-start pl-7 pr-16">
        KALKULATOR DLA HR I DECYDENTÓW
        <small>
          Czy opłaca się wspierać zdrowie psychiczne pracowników systemowo i kompleksowo?
        </small>
        <a
          href="https://eap24.pl"
          title="eap24"
          class="dialog-close"
        >
          <v-btn
            color="black"
            fab
            text
          >
            <v-icon>fas fa-times</v-icon>
          </v-btn>
        </a>
      </v-card-title>
      <v-divider />
      <v-card-text class="pl-7 pr-7">
        INSTRUKCJA<br>
        Uzupełnij pola oznaczone kolorem czerwonym.<br>
        Możesz również modyfikować pola oznaczone kolorem żółtym.
      </v-card-text>
      <v-divider />
      <v-card-text class="pl-7 pr-7 bigger-input-font">
        <CalcForm />
      </v-card-text>
    </div>
  </div>
</template>

<script>
import CalcForm from '@/components/CalcForm.vue';

export default {
  name: 'Home',
  components: {
    CalcForm,
  },
};
</script>
