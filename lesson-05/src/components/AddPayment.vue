<template>
    <div>
        <button class="form-button" @click="showCostForm">Add New Cost</button>

        <div class="payment-form" v-if="isFormVisible">
            <div class="form-input__wrap">
                <input class="form-input" type="date" v-model="date" placeholder="Payment date">
            </div>
            <div class="form-input__wrap">
                <CategorySelect :categories="categories" :categorySelected="category" @categorySelected = "getCategory" />
            </div>
            <div class="form-input__wrap">
                <input class="form-input" type="number" v-model.number="value" placeholder="Payment value">
            </div>

            <button class="form-button" @click="addCost">Add</button>
        </div>
    </div>
</template>

<script>
import CategorySelect from './CategorySelect.vue';
import {mapActions, mapGetters, mapMutations} from "vuex";

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
        ...mapMutations([
            'addDataToPaymentsList'
        ]),
        ...mapActions([
            'fetchCategory',
            'fetchData',
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

                if(this.getCategoryFromRoute && this.getValueFromRoute) {
                    this.addDataToPaymentsList(data);
                    this.$router.push({
                        name: 'dashboard'
                    })
                }

                this.$emit('addNewPayment', data);
            }
        },
        getCurrentDate() {
            const today = new Date();
            const d = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
            const m = today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
            const y = today.getFullYear();
            return `${y}-${m}-${d}`;
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
        },
        getValueFromRoute() {
            return Number(this.$route.query?.value) ?? null;
        },
        getCategoryFromRoute() {
            return this.$route.params?.category ?? null;
        }
    },
    created() {
        if(!this.paymentsList.length) {
            this.fetchData('page1');
        }
        if(!this.categories.length) {
            this.fetchCategory();
        }

        if(this.getCategoryFromRoute){
            this.isFormVisible = true;
            this.date = this.getCurrentDate();
            this.category = this.getCategoryFromRoute;

            if(this.getValueFromRoute) {
                this.value = this.getValueFromRoute;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
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