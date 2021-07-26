<template>
    <div>
        <select v-model="selected" @change="categoryChanged">
            <option
                v-for="(option, index) in categories"
                :key="index"
                :value="option"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "CategorySelect",
    props: {
        categories: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            selected: ''
        }
    },
    methods: {
        categoryChanged() {
            this.$emit('categorySelected', this.selected);
        }
    }
}
</script>

<style lang="scss" scoped>
select {
    width: 100%;
    padding: 10px 15px;
    height: 45px;
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 5px;
    outline: none;
}
</style>