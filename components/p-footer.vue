<template>
  <v-container>
    
    <v-row>
      <v-divider></v-divider>
    </v-row>

    <v-row class="mt-7" justify="center" justify-sm="space-around" align="center">
      <v-col cols="12" sm="6" md="4">

        <v-row class="ma-0" justify="center" justify-sm="start">
          <a class="ma-0 text-body-2 text-center text-sm-left black--text" :href="`mailto:${email}`">
            Netfang: {{ email }}
          </a>
        </v-row>

        <v-row class="ma-0" justify="center" justify-sm="start">
          <a class="ma-0 text-body-2 text-center text-sm-left black--text" :href="`tel:+354 ${phone}`">
            Sími: {{ phoneString }}
          </a>
        </v-row>

        <v-row class="ma-0" justify="center" justify-sm="start">
          <p class="ma-0 text-body-2">
            Kennitala: {{ kt }}
          </p>
        </v-row>
      </v-col>
      
      <v-col cols="12" sm="6" md="4">

        <p class="ma-0 text-center text-sm-right text-md-center">
          <a class="black--text"
            target="_blank"
            rel="noopener noreferrer"
            :href="`https://www.google.com/maps/search/?api=1&query=${address}`">
            Lágmúla 7, 5. hæð
          </a>
        </p>

        <p class="ma-0 text-center text-sm-right text-md-center text-caption">
          108 Reykjavík
        </p>
      </v-col>

      <v-col cols="12" sm="12" md="4">
        <p class="ma-0 text-center text-md-right">
          Opnunartími
        </p>

        <v-row class="ma-0" justify="center" justify-md="end" align="center">
          <v-col cols="auto" class="pa-0">
            <p class="ma-0 text-caption">Mánudaga til fimmtudaga:</p>
          </v-col>
          <v-col cols="auto" class="pa-0 ml-1">
            <p class="ma-0 text-caption">09:00 - 15:00</p>
          </v-col>
        </v-row>

        <v-row class="ma-0" justify="center" justify-md="end" align="center">
          <v-col cols="auto" class="pa-0">
            <p class="ma-0 text-caption">Föstudaga:</p>
          </v-col>
          <v-col cols="auto" class="pa-0 ml-1">
            <p class="ma-0 text-caption">09:00 - 12:00</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="my-4" justify="center" justify-sm="space-between">
      <v-col>
        <p class="ma-0 text-caption text-center text-sm-left">
          © {{ year }} HRR lögmannsþjónusta ehf.
        </p>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "hulda@hrr.is",
      phone: "5164000",
      kt: "670206-0680",
      address: "Lágmúli 7, 108 Reykjavík",
      year: new Date().getFullYear(),
    }
  },
  computed: {
    phoneString() {
      return this.phone.substring(0, 3) + '-' + this.phone.substring(3)
    },
  },
}
</script>