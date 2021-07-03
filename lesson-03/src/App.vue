<template>
    <div id="app">
        <header>
            <h1>My personal costs</h1>
        </header>

        <main>
            <AddPayment @addNewPayment="addPaymentItem" />
            <PaymentsDisplay :list="paymentsList"/>
        </main>
    </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import AddPayment from './components/AddPayment.vue';

export default {
    name: 'App',
    components: {
        PaymentsDisplay,
        AddPayment
    },
    data: () => ({
        paymentsList: [],
    }),
    methods: {
        fetchData() {
            return [
                {
                    date: "28.03.2020",
                    category: "Food",
                    value: 8734
                },
                {
                    date: "12.04.2021",
                    category: "Sport",
                    value: 123
                },
                {
                    date: "05.11.2020",
                    category: "Internet",
                    value: 490
                },
            ]
        },
        addPaymentItem(data) {
            this.paymentsList.push(data);
        },
    },
    created() {
        this.paymentsList = this.fetchData();
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
