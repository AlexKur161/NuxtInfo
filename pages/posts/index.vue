<template>
    <h1>Posts</h1>
    <div v-if="pending"></div>
    <div v-else>{{ posts }}</div>
</template>
<script setup>
const { data: posts, pending } = await useLazyFetch('https://jsonplaceholder.typicode.com/posts')
</script>