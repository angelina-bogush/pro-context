<template>
    <div class="container">
        <div class="block">
            <ItemList v-for="(list, index) in lists" :key="list.id" :list="list"></ItemList>
        </div>
        <div class="block">
            <SelectedItemList v-for="(list, index) in lists" :list="list"></SelectedItemList>
        </div>
    </div>
</template>
<script>
import ItemList from '@/components/ItemList/ItemList.vue'
import SelectedItemList from '@/components/SelectedItemList/SelectedItemList.vue'
export default {
    name: 'ViewApp',
    data() {
        return {
            lists: [
                {
                    id: 1,
                    isSelected: false,
                    items: [
                        { id: 1, name: 'Item 1', quantity: 1, color: '', isSelected: false },
                        { id: 2, name: 'Item 2', quantity: 2, color: '#00ff00', isSelected: false },
                        { id: 3, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
                        { id: 4, name: 'Item 4', quantity: 3, color: '#0000ff', isSelected: false },
                        { id: 5, name: 'Item 5', quantity: 3, color: '#0000ff', isSelected: false },
                    ]
                },
                {
                    id: 2,
                    isSelected: false,
                    items: [
                        { id: 1, name: 'Item 1', quantity: 1, color: '#ff0000', isSelected: false },
                        { id: 2, name: 'Item 2', quantity: 2, color: '#00ff00', isSelected: false },
                        { id: 3, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
                        { id: 4, name: 'Item 4', quantity: 3, color: '#0000ff', isSelected: false },
                        { id: 5, name: 'Item 5', quantity: 3, color: '#0000ff', isSelected: false },
                        { id: 6, name: 'Item 6', quantity: 3, color: '#0000ff', isSelected: false },
                    ]
                },
                {
                    id: 3,
                    isSelected: false,
                    items: [
                        { id: 1, name: 'Item 1', quantity: 1, color: '#ff0000', isSelected: false },
                        { id: 2, name: 'Item 2', quantity: 2, color: '#00ff00', isSelected: false },
                        { id: 3, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
                        { id: 4, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
                    ]
                },
                {
                    id: 4,
                    isSelected: false,
                    items: [
                        { id: 1, name: 'Item 1', quantity: 1, color: '#ff0000', isSelected: false },
                        { id: 2, name: 'Item 2', quantity: 2, color: '#00ff00', isSelected: false },
                        { id: 3, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
                        { id: 4, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
                        { id: 5, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
                    ]
                },
                {
                    id: 5,
                    isSelected: false,
                    items: [
                        { id: 1, name: 'Item 1', quantity: 1, color: '#ff0000', isSelected: false },
                        { id: 2, name: 'Item 2', quantity: 2, color: '#00ff00', isSelected: false },
                        { id: 3, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
                        { id: 4, name: 'Item 4', quantity: 4, color: '#0000ff', isSelected: false },
                        { id: 5, name: 'Item 5', quantity: 5, color: '#0000ff', isSelected: false },
                        { id: 6, name: 'Item 6', quantity: 6, color: '#0000ff', isSelected: false },
                        { id: 7, name: 'Item 7', quantity: 7, color: '#0000ff', isSelected: false },
                    ]
                },

            ]
        }
    },
    computed: {
        // ...mapGetters(['getLists'])
    },
    methods: {
        selectAllItems(list) {
            list.isSelected = !list.isSelected;
            list.items.forEach(item => {
                item.isSelected = list.isSelected;
            });
        }
    },
    components: {
        ItemList,
        SelectedItemList
    }
}
</script>

<style lang="scss">
ul {
    list-style-type: disc;
}

.container {
    display: flex;
    padding: 50px;
    justify-content: space-between;

}

.block {
    width: 40%
}
</style>