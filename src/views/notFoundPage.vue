<template>
    <div class="Error">
        <h1>404 not found</h1>
        <h2>it seems you're in the wrong page</h2>

        <router-link to="/" class="backBtn">Back</router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style>
    .navHeader{
        display: none;
    }
    .footerContact{
        display: none;
    }

    .Error {
        text-align: center;
        margin: 5em;
    }

    .Error > h1 {
        font-size: 2.8em;
    }

    .backBtn{
        color: white;
        font-size: 3em;
    }
</style>