<template>
    <header>
        <div class="container">
            <NuxtLink to="/">Home</NuxtLink>
        </div>
    </header>
    <main class="container"><slot></slot></main>
</template>
<style setup>
.container{
    max-width: 1200px;
    margin: auto;
}
</style>