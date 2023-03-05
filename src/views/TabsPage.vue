<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/carte">
          <ion-icon :icon="map" />
          <ion-label>Carte</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/liste">
          <ion-icon :icon="ellipse" />
          <ion-label>Liste</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/aide">
          <ion-icon :icon="square" />
          <ion-label>Aide</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { ellipse, square, map } from 'ionicons/icons';
</script>
