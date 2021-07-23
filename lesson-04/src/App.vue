<template>
    <div id="app">
        <header>
            <h1>My personal costs</h1>
        </header>

        <main>
            <AddPayment @addNewPayment="addPaymentItem" />

            <PaymentsDisplay :list="currentElements"/>

            <Pagination />
        </main>
    </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import AddPayment from './components/AddPayment.vue';
import Pagination from './components/Pagination.vue';
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
    name: 'App',
    components: {
        PaymentsDisplay,
        AddPayment,
        Pagination,
    },
    data: () => ({
    }),
    methods: {
        ...mapMutations([
            'setPaymentListData',
            'addDataToPaymentsList'
        ]),
        ...mapActions([
            'fetchData',
        ]),
        addPaymentItem(data) {
            this.addDataToPaymentsList(data);
        },
    },
    computed: {
        ...mapGetters({
            paymentsList: 'getPaymentsList',
            currentPage: 'getCurrentPage',
        }),
        currentElements() {
            return this.paymentsList[`page${this.currentPage}`];
        }
    },
    created() {
        this.fetchData('page1');
    }
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
</style>
