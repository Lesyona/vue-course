<template>
    <div>
        <div>
            <input
                type="number"
                placeholder="op1"
                v-model.number="operand1"
            >
            <input
                type="number"
                placeholder="op2"
                v-model.number="operand2"
            >
            = {{ result }}
        </div>
        <br>

        <div>
            <button
                v-for="operation in operations"
                :key="operation"
                @click="calculate(operation)"
            >
                {{ operation }}
            </button>
        </div>
        <br>

        <div>
            <label>
                <input type="checkbox" v-model="showKeyboard">
                Отобразить экранную клавиатуру
            </label>
        </div>
        <br>

        <div v-if="showKeyboard">
            <div>
                <button
                    v-for="number in numbers"
                    :key = number
                    @click="typeNumber(number)"
                >
                    {{ number }}
                </button>
                <button
                    @click="deleteSymbol"
                >&#8592;</button>
            </div>
            <br>

            <label>
                <input type="radio" id="operand1" value="operand1" v-model="operandRadio">
                Операнд 1
            </label>

            <label>
                <input type="radio" id="operand2" value="operand2" v-model="operandRadio">
                Операнд 2
            </label>

        </div>

    </div>
</template>

<script>
export default {
    name: "Calc",
    data:() => ({
        operand1: 0,
        operand2: 0,
        result: 0,
        operations: ['+', '-', '*', '/', '^'],
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        showKeyboard: false,
        operandRadio: 'operand1',
    }),
    methods: {
        calculate(operation = '+'){
            switch (operation) {
                case "+":
                    this.sum();
                    break;
                case "-":
                    this.subtraction();
                    break;
                case "*":
                    this.multiplication();
                    break;
                case "/":
                    this.division();
                    break;
                case "^":
                    this.pow();
                    break;
                default:
                    break;
            }
        },
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
        deleteSymbol() {
            const input = this.operandRadio === 'operand1' ? 'operand1' : 'operand2';
            this[input] = +String(this[input]).slice(0, -1);
        },
        typeNumber(number) {
            const input = this.operandRadio === 'operand1' ? 'operand1' : 'operand2';
            this[input] = +(String(this[input]) + number);
        }
    }
}
</script>

<style lang="scss" scoped>
    button,
    input {
        margin: 0 5px;
    }
    button {
        cursor: pointer;
    }
</style>