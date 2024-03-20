<template>
    <h1>Posts</h1>
    <div v-if="pending">loading...</div>
    <div v-else>
        <div v-for="post in posts">
            <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
            <span v-if="marker(post.id)">★</span>
        </div>
    </div>
</template>
<script setup>
const { data: posts, pending } = await useFetchPosts();
const favorites = useFavoritesPosts();
const marker = computed(() => (id) => Boolean(favorites.value[id]));
</script>
<style setup></style>