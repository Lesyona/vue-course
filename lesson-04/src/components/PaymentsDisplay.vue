<template>
    <div class="payments-list">

        <table class="payments__table">
            <thead>
                <tr class="payments__table__header-row">
                    <th class="payments__table__header-cell">#</th>
                    <th class="payments__table__header-cell">Date</th>
                    <th class="payments__table__header-cell">Category</th>
                    <th class="payments__table__header-cell">Value</th>
                </tr>
            </thead>

            <tbody class="payments__table__content">
                <tr
                    v-for="(item, idx) in list"
                    :key="idx"
                    class="payments__table__row"
                >
                    <td class="payments__table__cell">{{ item.id }}</td>
                    <td class="payments__table__cell">{{ item.date }}</td>
                    <td class="payments__table__cell">{{ item.category }}</td>
                    <td class="payments__table__cell">{{ item.value }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    name: "PaymentsDisplay",
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
.payments-list {
    max-width: 35%;
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
</style>