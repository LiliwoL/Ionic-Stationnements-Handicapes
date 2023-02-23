<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Emplacements handicapés</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Emplacements handicapés</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- On placera ici la carte -->
      <map-container id="mapContainer"/>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import MapContainer from '@/components/MapContainer.vue';
</script>

<style scoped>
#mapContainer {
  width: 80vw;
  height: 90vh;
}
</style>