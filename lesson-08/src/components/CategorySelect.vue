<template>
    <div>
        <v-select
            v-model="selected"
            :items="categories"
            label="Choose category"
            @change="categoryChanged"
            solo
        ></v-select>
    </div>
</template>

<script>
export default {
    name: "CategorySelect",
    props: {
        categories: {
            type: Array,
            default: () => []
        },
        categorySelected: {
            type: String,
            default: ''
        },
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
    },
    mounted() {
        if(this.categorySelected) {
            this.selected = this.categorySelected;
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