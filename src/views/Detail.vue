<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>{{ post.title }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-img :src="post.url"></ion-img>
      <ion-card-subtitle>{{ post.author }}</ion-card-subtitle>
    </ion-card-content>
  </ion-card>
</template>

<script>
export default {
  data () {
    return {
      post: this.$route.params.post
    }
  }
}
</script>
