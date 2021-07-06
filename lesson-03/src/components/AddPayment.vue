<template>
    <div>
        <button class="form-button" @click="showCostForm">Add New Cost</button>

        <div class="payment-form" v-if="isFormVisible">
            <div class="form-input__wrap">
                <input class="form-input" type="text" v-model="date" placeholder="Payment date">
            </div>
            <div class="form-input__wrap">
                <input class="form-input" type="text" v-model="category" placeholder="Payment category">
            </div>
            <div class="form-input__wrap">
                <input class="form-input" type="number" v-model.number="value" placeholder="Payment value">
            </div>

            <button class="form-button" @click="addCost">Add</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddPayment",
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
        addCost() {
            const { category, value } = this
            if (category && value) {
                const data = {
                    date: this.date || this.getCurrentDate(),
                    category,
                    value
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