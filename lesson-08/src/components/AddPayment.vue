<template>
    <div>
        <v-btn
            color="teal"
            dark
            class="mb-5"
            @click="showCostForm"
        >
            Add New Cost <v-icon>mdi-plus</v-icon>
        </v-btn>

        <div class="payment-form" v-if="isFormVisible">
            <v-form>
                <v-text-field
                    v-model="date"
                    type="date"
                    label="Payment date"
                    solo
                ></v-text-field>

                <div class="form-input__wrap">
                    <CategorySelect :categories="categories" :categorySelected="category" @categorySelected = "getCategory" />
                </div>

                <v-text-field
                    v-model.number="value"
                    type="number"
                    label="Payment value"
                    solo
                ></v-text-field>

                <v-btn
                    color="teal"
                    dark
                    @click="addCost"
                >
                    Add
                </v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>
import CategorySelect from './CategorySelect.vue';
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AddPayment",
    components: {
        CategorySelect
    },
    data: () => ({
        date: "",
        category: "",
        value: null,
        isFormVisible: false,
    }),
    methods: {
        showCostForm() {
            this.isFormVisible = !this.isFormVisible;
        },
        ...mapActions([
            'fetchCategory'
        ]),
        getCategory(category) {
            this.category = category;
        },
        addCost() {
            if (this.category && this.value) {
                const data = {
                    id: this.newPostId,
                    date: this.date || this.getCurrentDate(),
                    category: this.category,
                    value: this.value
                }
                this.$emit('addNewPayment', data);
            }
        },
        getCurrentDate() {
            const today = new Date();
            const d = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
            const m = today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth();
            const y = today.getFullYear();
            return `${d}.${m}.${y}`;
        }
    },
    computed: {
        ...mapGetters({
            paymentsList: 'getPaymentsList',
            categories: 'getCategoryList',
            currentPage: 'getCurrentPage',
        }),
        newPostId() {
            return this.paymentsList[`page${this.currentPage}`].length + 1;
        }
    },
    created() {
        if(!this.categories.length) {
            this.fetchCategory();
        }

        if(window.location.pathname.includes('/add/payment/')) {
            this.isFormVisible = true;
            const pathName = window.location.pathname.split('/add/payment/');
            this.category = pathName[1];
            this.date = this.getCurrentDate();

            if(window.location.search) {
                const params = window.location.search.split('?value=');
                this.value = params[1];
            }
        }
    },
}
</script>

<style lang="scss">
.payment-form {
    max-width: 25%;
    min-width: 250px;
    margin-bottom: 40px;
}

.form-input__wrap {
    margin-bottom: 10px;
}

.form-input {
    width: 100%;
    background: #fff;
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 5px;
    height: 45px;
    padding: 10px 15px;
    font-family: Verdana, Arial, sans-serif;
}

.form-button {
    border-radius: 5px;
    background: #6200ee;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    height: 36px;
    padding: 0 16px;
    font-family: Verdana, Arial, sans-serif;
    margin-bottom: 20px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
</style>