<template>
  <div>
    <ion-card v-for="post in posts" :key="post.data.id">
      <img :src="post.data.thumbnail" alt="thumbnail" :width="post.data.thumbnail_width" :height="(post.data.thumbnail_height * 1.5)">
      <ion-card-header>
        <ion-card-subtitle>{{ post.data.author }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <ion-label>{{ post.data.title }}</ion-label>
      </ion-card-content>
      <ion-item>
        <ion-badge slot="start" color="primary">{{ post.data.ups }}</ion-badge>
        <ion-button fill="outline" slot="end" @click="seeMore(post.data)">Ver más</ion-button>
      </ion-item>
    </ion-card>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsService from '@/services/Posts'

export default {
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    getPosts  () {
      PostsService.all()
        .then(({ data }) => {
          this.posts = data.data.children
        })
        .catch(err => console.error(err))
    },
    seeMore (post) {
      this.$router.push({ name: 'detail', params: { post } })
    }
  }
}
</script>
