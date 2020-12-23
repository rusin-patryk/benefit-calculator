<template>
  <v-app id="inspire">
    <v-main class="d-flex align-center">
      <v-container>
        <v-row
          class="container d-flex justify-center"
        >
          <v-col lg="8">
            <v-card
              elevation="6"
              shaped
            >
              <router-view />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">

#inspire {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-image: url(assets/latarnia-eap24.jpg);
  background-size: cover;
}

.container {
  max-width: 1000px;
}

</style>
