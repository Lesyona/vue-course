<template>
    <div class="edit-payment">
        <template v-if="editFormVisible">
            <div class="edit-form">
                <div class="form-input__wrap">
                    <CategorySelect :categories="categories" :categorySelected="category" @categorySelected = "getCategory" />
                </div>
                <div class="form-input__wrap">
                    <input class="form-input" type="number" v-model.number="value" placeholder="Payment value">
                </div>

                <button class="form-button" @click="addCost">Add</button>
            </div>
        </template>
        <template v-else>
            <button
                class="edit"
                @click="editPaymentItem()"
            >Редактировать</button>
            <button
                class="delete"
                @click="deletePaymentItem()"
            >Удалить</button>
        </template>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "ModalEditPayment",
    props: {
        settings: Object
    },
    data() {
        return {
            editFormVisible: false
        }
    },
    methods: {
        ...mapMutations([
            'removeDataFromPaymentsList',
            'editPaymentsListData'
        ]),
        editPaymentItem() {
            this.editFormVisible = true;
            //this.editPaymentsListData(this.settings.item);
            //this.$modal.hide();
        },
        deletePaymentItem() {
            this.removeDataFromPaymentsList(this.settings.item);
            this.$modal.hide();
        }
    }
}
</script>

<style lang="scss" scoped>
.edit-payment {
    position: absolute;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    top: 100%;
    right: -100%;
    padding: 5px 0;
    z-index: 1;

    &::before {
        border-bottom: 5px solid #fff;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        content: '';
        position: absolute;
        top: -5px;
        right: 15px;
    }

    button {
        padding: 5px 10px;
        background: none;
        display: block;
        border: 0;
        width: 100%;
        text-align: left;
        cursor: pointer;

        &:hover {
            background: #eee;
        }
    }

    .edit-form {
        padding: 0 15px;
        width: 200px;
    }
}
</style>