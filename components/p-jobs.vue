<template>
  <v-container>

    <v-row class="mb-2">
      <p class="ma-0 text-h5 text-sm-h4 text-md-h3 font-weight-light">Störf</p>
    </v-row>

    <v-row v-for="(job, i) in jobs" :key="i">
      <div class="mb-3">
        <p class="ma-0 text-subtitle-1 font-weight-regular">{{ job.description }}</p>
        <p class="ma-0 text-caption">{{ job.year }}</p>
      </div>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          year: "1991 - 1992",
          description: "Fasteignamarkaðurinn",
        },
        {
          year: "1992 - 2000",
          description: "Fulltrúi hjá sýslumanninum í Reykjavík",
        },
        {
          year: "2000 - 2005",
          description: "Fulltrúi á lögfræðistofu Atla Gíslasonar (LAG)",
        },
        {
          year: "2005 - 2008",
          description: "Sjálfstætt starfandi lögmaður með fleiri lögmönnum undir merkjum Borgarlögmanna",
        },
        {
          year: "2008 - 2022",
          description: "Annar eigandi Lögmanna Laugavegi 3 ehf.",
        },
        {
          year: "2022 - núverandi staða",
          description: "Starfsemi byrjuð að Lágmúla 7, 5. hæð, undir merkjum HRR lögmannsþjónustu ehf.",
        },
      ],
    }
  },
}
</script>