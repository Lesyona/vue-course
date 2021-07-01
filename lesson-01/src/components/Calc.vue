<template>
    <div>
        <div>
            <input type="number" placeholder="op1" v-model.number="operand1">
            <input type="number" placeholder="op2" v-model.number="operand2">
        </div>
        <br>

        <div>
            <button @click="sum">+</button>
            <button @click="subtraction">-</button>
            <button @click="multiplication">*</button>
            <button @click="division">/</button>
            <button @click="pow">^</button>
        </div>
        <br>

        result : {{ result }}
    </div>
</template>

<script>
export default {
    name: "Calc",
    data:() => ({
        operand1: 0,
        operand2: 0,
        result: 0,
    }),
    methods: {
        sum() {
            return this.result = this.operand1 + this.operand2;
        },
        subtraction() {
            return this.result = this.operand1 - this.operand2;
        },
        multiplication() {
            return this.result = this.operand1 * this.operand2;
        },
        division() {
            if (this.operand2)
                return this.result = this.operand1 / this.operand2;
            else
                return this.result = "На ноль делить нельзя!";
        },
        pow() {
            return this.result = Math.pow(this.operand1, this.operand2);
        },
    }
}
</script>

<style lang="scss" scoped>
    button {
        margin: 0 5px;
    }
</style>