<template>
    <div>
        <AddPayment @addNewPayment="addPaymentItem" />

        <v-row>
            <v-col
                cols="12"
                md="6"
            >
                <PaymentsDisplay :list="currentElements"/>
            </v-col>

            <v-col
                cols="12"
                md="6"
            >
                <Diagram />
            </v-col>
        </v-row>

        <Pagination />
    </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay";
import AddPayment from "../components/AddPayment";
import Pagination from "../components/Pagination";
import Diagram from "../components/Diagram";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
    name: "Dashboard",
    components: {
        PaymentsDisplay,
        AddPayment,
        Pagination,
        Diagram
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