<template>
    <div class="payments-list">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-subtitle-2 black--text">
                        #
                    </th>
                    <th class="text-subtitle-2 black--text">
                        Date
                    </th>
                    <th class="text-subtitle-2 black--text">
                        Category
                    </th>
                    <th class="text-subtitle-2 black--text">
                        Value
                    </th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="(item, idx) in list"
                    :key="idx"
                >
                    <td>{{ item.id }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.value }}</td>
                    <td>
                        <div class="edit-wrapper">
                            <button
                                class="edit-btn"
                                @click="showModal(item)"
                            ><v-icon>mdi-dots-vertical</v-icon></button>
                            <transition name="fade">
                                <ModalEditPayment
                                    v-if="modalSettings.item === item"
                                    :settings="modalSettings"
                                />
                            </transition>
                        </div>
                    </td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import ModalEditPayment from "./ModalEditPayment";
export default {
    name: "PaymentsDisplay",
    components: {
        ModalEditPayment,
    },
    data() {
      return {
          modalShown: false,
          modalSettings: {}
      }
    },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        editModalShow(settings) {
            this.modalSettings = settings;
        },
        editModalHide() {
            this.modalSettings = {};
        },
        showModal(item) {
            this.$modal.show(`editModal${item.id}`, { item: item });
        }
    },
    mounted() {
        this.$modal.EventBus.$on('show', this.editModalShow);
        this.$modal.EventBus.$on('hide', this.editModalHide);
    },
    beforeDestroy() {
        this.$modal.EventBus.$off('show', this.editModalShow);
        this.$modal.EventBus.$off('hide', this.editModalHide);
    }
}
</script>

<style lang="scss">

.v-data-table__wrapper {
    overflow: unset !important;
}

.payments__table {
    min-width: 100%;
    border: 0;
    white-space: nowrap;
    border-collapse: collapse;
    table-layout: fixed;

    &__row {
        border-top: 1px solid rgba(0,0,0,.12);
    }

    &__cell,
    &__header-cell {
        padding-right: 16px;
        padding-left: 16px;
    }

    &__header-cell {
        font-weight: bold;
        height: 55px;
        text-align: left;
        text-overflow: ellipsis;
    }

    &__cell {
        height: 50px;
    }
}

.edit-wrapper {
    position: relative;
}

.edit-btn {
    border: 0;
    padding: 0;
    cursor: pointer;

    .v-icon.v-icon {
        color: #000;
        font-size: 30px;
    }
}
</style>