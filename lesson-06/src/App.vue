<template>
    <div id="app">
        <header>
            <h1>My personal costs</h1>
        </header>

        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
    }),
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    margin: 0 50px;
    padding: 0;
    font-family: Verdana, Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
