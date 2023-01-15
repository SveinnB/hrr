<template>
  <v-container>

    <v-row class="mb-2">
      <p class="ma-0 text-h5 text-sm-h4 text-md-h3 font-weight-light">Persónuverndarstefna</p>
    </v-row>

    <v-row v-for="(p, i) in policys" :key="i" class="mb-1">
      <div>
        <p class="ma-0 text-body-2 font-weight-regular">{{ i+1 }}. {{ p.policy }}</p>
      </div>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      policys: [
        {
          policy: "HRR lögmannsþjónusta ehf. starfar í samræmi við lög um persónuvernd og meðferð persónuupplýsinga nr. 90/2018, sbr. reglugerð Evrópuþingsins og ráðsins nr. 2016/679."
        },
        {
          policy: "Lögð er áhersla á að tryggja trúnað, áreiðanleika og örugga meðferð persónuupplýsinga þeirra skjólstæðinga sem unnið er fyrir, sbr. ákvæði laga um lögmenn nr. 77/1998."
        },
        {
          policy: "Í upphafi vinnu fyrir einstaklinga / lögaðila er aflað umboðs til að koma fram fyrir hönd viðkomandi. Eingöngu er aflað upplýsinga vegna einstaklings / lögaðila, sem nauðsynlegar eru til að ná markmiðum þeirrar vinnu sem óskað er eftir í hverju tilviki."
        },
        {
          policy: "Þegar starfi lýkur vegna verkefna er þau gögn sem aflað hefur verið vegna þess, afhent skjólstæðingi en þeim fargað óski viðkomandi ekki eftir að fá gögn."
        },
      ],
    }
  },
}
</script>