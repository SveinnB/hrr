<template>
  <v-container>

    <v-row class="mb-2">
      <p class="ma-0 text-h5 text-sm-h4 text-md-h3 font-weight-light">Helstu svið lögfræði</p>
    </v-row>

    <v-row v-for="(area, i) in areas" :key="i" class="mb-1">
      <div>
        <p class="ma-0 text-subtitle-1 font-weight-regular">{{ i+1 }}. {{ area.title }}</p>
        <p class="ma-0 text-caption">{{ area.description }}</p>
      </div>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      areas: [
        {
          title: "Barnaréttur",
          description: "Forsjármál, barnaverndarmál, lögræðismál vegna barna",
        },
        {
          title: "Erfðaréttur",
          description: "Skipti dánarbúa bæði með einkaskiptum og við opinber skipti. Mikil reynsla af skiptastjórn",
        },
        {
          title: "Sifjaréttur",
          description: "Gerð kaupmála og ýmissa samninga.",
        },
        {
          title: "Skiptaréttur",
          description: "Fjárskipti hjóna við skilnað og fjárskipti við sambúðarslit. ",
        },
        {
          title: "Vinnuréttur",
          description: "Ráðningar og uppsagnir ",
        },
        {
          title: "Skaðabótaréttur",
          description: "Slysamál",
        },
        {
          title: "Samningaréttur",
          description: "Samningagerð ",
        },
        {
          title: "Lögfræðissvipting",
          description: "Lögræði",
        },
        {
          title: "Stjórnsýsluréttur",
          description: "Kærur innan stjórnsýslunnar – samskipti borgara og stjórnvalda",
        },
      ],
    }
  },
}
</script>