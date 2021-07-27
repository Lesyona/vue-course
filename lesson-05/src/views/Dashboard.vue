<template>
    <div>
        <AddPayment @addNewPayment="addPaymentItem" />

        <PaymentsDisplay :list="currentElements"/>

        <Pagination />
    </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay";
import AddPayment from "../components/AddPayment";
import Pagination from "../components/Pagination";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
    name: "Dashboard",
    components: {
        PaymentsDisplay,
        AddPayment,
        Pagination,
    },
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
    },
}
</script>

<style scoped>

</style>