<template>
  <v-app>
    <v-main class="content">
      <nuxt/>
    </v-main>
    <p-footer class="footer" />
  </v-app>
</template>

<style>
.content {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}
</style>