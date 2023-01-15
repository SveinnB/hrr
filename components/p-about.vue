<template>
  <v-container class="pa-0">
    <v-row class="ma-0" justify="center" align="center">
      <v-col class="pa-0 " cols="12" md="7">
        <div class="mb-10">
          <h1 class="text-h4 text-md-h3 text-center text-md-left">Hulda Rós Rúriksdóttir</h1>
          <h2 class="text-h6 text-lg-h5 text-center text-md-left font-weight-regular">Hæstaréttarlögmaður</h2>
        </div>

        <div>
          <p class="ma-0 mb-3 text-h5 text-sm-h4 text-md-h3 font-weight-light">Menntun</p>
          <v-row v-for="(e, i) in education" :key="i" class="ma-0 mb-1">
            <div>
              <p class="ma-0 text-subtitle-1 font-weight-regular">{{ e.year }} - {{ e.degree }}</p>
            </div>
          </v-row>
        </div>
      </v-col>

      <v-col class="mt-10 mt-md-0" cols="12" md="5" align-self="center">
        <v-row class="ma-0" justify="center">
          <v-avatar size="300">
            <v-img src="hulda_ros_ruriksdottir_litur_square.jpg" alt="Hulda Rós Rúriksdóttir lögmaður" />
          </v-avatar>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      education: [
        {
          year: "1991",
          degree: "Lagadeild Háskóla Íslands, cand juris",
        },
        {
          year: "1995",
          degree: "Leyfi til málflutnings fyrir héraðsdómstólum",
        },
        {
          year: "2008",
          degree: "Leyfi til málflutnings fyrir Hæstarétti",
        }
      ]
    }
  },
}
</script>