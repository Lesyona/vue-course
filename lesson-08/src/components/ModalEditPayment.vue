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

                <button class="form-button" @click="saveEditedPayment">Save</button>
            </div>
        </template>
        <template v-else>
            <button
                class="edit-btn edit"
                @click="editPaymentItem()"
            >Редактировать</button>
            <button
                class="edit-btn delete"
                @click="deletePaymentItem()"
            >Удалить</button>
        </template>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import CategorySelect from "./CategorySelect";

export default {
    name: "ModalEditPayment",
    props: {
        settings: Object
    },
    components: {
        CategorySelect
    },
    data() {
        return {
            editFormVisible: false,
            category: this.settings.item.category,
            value: this.settings.item.value,
        }
    },
    computed: {
        ...mapGetters({
            categories: 'getCategoryList',
        }),
    },
    methods: {
        ...mapMutations([
            'removeDataFromPaymentsList',
            'editPaymentsListData'
        ]),
        ...mapActions([
            'fetchCategory'
        ]),
        getCategory(category) {
            this.category = category;
        },
        editPaymentItem() {
            this.editFormVisible = true;
        },
        deletePaymentItem() {
            this.removeDataFromPaymentsList(this.settings.item);
            this.$modal.hide();
        },
        saveEditedPayment() {
            this.editPaymentsListData({item: this.settings.item, category: this.category, value: this.value});
            this.$modal.hide();
        }
    },
    created() {
        if (!this.categories.length) {
            this.fetchCategory();
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
        left: 50%;
        margin-left: -2px;
    }

    .edit-btn {
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