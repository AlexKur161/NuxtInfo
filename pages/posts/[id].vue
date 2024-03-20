<template>
    <div v-if="pending">loading...</div>
    <div v-else>
        <div class="post-wrapper">
            <h1 class="title-post">{{ post.title }}</h1>
            <button @click="toggle" v-if="marker" class="btn-post">remove from favorites</button>
            <button @click="toggle" v-else class="btn-post"> add to favorites</button>
        </div>
        <div><p>{{ post.body }}</p></div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
const marker = computed(() => Boolean(favorites.value[route.params.id]));
const route = useRoute();
const favorites = useFavoritesPosts();
const { data: post, pending } = await useFetchPost(route.params.id);
const toggle = () => favorites.value[route.params.id] = !favorites.value[route.params.id]

</script>
<style>
.title-post{
    font-size: 60px;
    margin: 0;
}
.post-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
}
.btn-post {
    background: blue;
    color: #fff;
    padding: 0 40px;
    border: none;
    height: 60px;
    cursor: pointer;
}
</style>