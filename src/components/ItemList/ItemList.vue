<template>
    <div class="list-container">
        <input type="checkbox" v-model="list.isSelected" @click="chooseAllItems(list)" v-bind="$attrs">
        <span @click="openList">List {{ list.id }}</span>
        <ul v-if="isOpened">
            <Item v-for="(item, index) in list.items" :itemList="item"></Item>
        </ul>

    </div>
</template>

<script>
import Item from '@/components/Item/Item.vue'
export default {
    name: 'ItemList',
    inheritAttrs: false,
    props: {
        list: {
            type: Object,
            default: () => { }

        }
    },
    data() {
        return {
            isOpened: false
        }
    },
    methods: {
        openList() {
            this.isOpened = !this.isOpened
        },
        chooseAllItems(list) {                  // не сделано: изменение checkbox на точку при нескольких выбранных элементах
            list.isSelected = !list.isSelected;
            list.items.forEach(item => {
                item.isSelected = list.isSelected;
            });

        },
    },
    computed: {
    },
    components: {
        Item
    },
}

</script>

<style lang="scss" scoped>
span {
    cursor: pointer;
}

ul {
    list-style-type: none
}

.list-container {
    padding: 8px
}
</style>