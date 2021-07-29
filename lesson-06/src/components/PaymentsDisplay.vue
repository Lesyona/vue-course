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
                    <td>
                        <button class="edit-btn"></button>
                    </td>
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

.edit-btn {
    width: 10px;
    height: 20px;
    border: 0;
    padding: 0;
    background: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.96 122.88'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill-rule:evenodd;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3E3-vertical-dots%3C/title%3E%3Cpath class='cls-1' d='M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z'/%3E%3C/svg%3E") 50% 50% / contain no-repeat;
    cursor: pointer;
}
</style>