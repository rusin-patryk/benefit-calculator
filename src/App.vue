<template>
  <v-app id="inspire">
    <v-main class="d-flex align-center">
      <v-container>
        <v-card
          elevation="6"
          shaped
        >
          <router-view />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">

@import 'styles/main.scss';

#inspire {
  background-image: url(assets/latarnia-eap24.jpg);
}

</style>
