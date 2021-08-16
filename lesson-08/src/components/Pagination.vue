<template>
    <div class="navigation-wrap">
<!--        <v-pagination-->
<!--            v-model="page"-->
<!--            :length="6"-->
<!--        ></v-pagination>-->

        <div class="nav-btn" @click="fetchData(`page${currentPage - 1}`)">-</div>
        <div
            class="nav-btn"
            :class="{'active': index + 1 === currentPage}"
            v-for="(item, index) in pagesNumber"
            :key="item"
            @click="fetchData(`page${item}`)"
        >
            {{ item }}
        </div>
        <div class="nav-btn" @click="fetchData(`page${currentPage + 1}`)">+</div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Pagination",
    props: {
    },
    computed: {
        ...mapGetters({
            currentPage: 'getCurrentPage',
            pagesNumber: 'getPagesNumber',
        }),
    },
    methods: {
        ...mapActions([
            'fetchData',
        ]),
    }
}
</script>

<style lang="scss" scoped>
.navigation-wrap {
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;

    .nav-btn {
        padding: 5px;
        background: lightgrey;
        margin: 0 5px;
        min-width: 30px;
        text-align: center;
        cursor: pointer;

        &.active {
            background: darkgrey;
        }
    }
}
</style>