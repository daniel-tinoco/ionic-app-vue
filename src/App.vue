<template>
  <ion-app>
    <ion-toolbar color="light">
      <ion-buttons slot="secondary">
        <ion-button>
          <router-link :to="{name: 'home'}">Inicio</router-link>
        </ion-button>
      </ion-buttons>
      <ion-title>
        MeMéxico
      </ion-title>
    </ion-toolbar>
    <ion-content>
      <router-view/>
    </ion-content>
  </ion-app>
</template>

<script>
export default {}
</script>
