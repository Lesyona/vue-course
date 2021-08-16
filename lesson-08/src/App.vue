<template>
    <v-app>
        <v-container>
            <header>
                <h1 class="text-h4 text-md-h3 mb-5">My personal costs</h1>
            </header>

            <v-main>
                <router-view/>
            </v-main>
        </v-container>
    </v-app>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        //
    }),
};
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
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
