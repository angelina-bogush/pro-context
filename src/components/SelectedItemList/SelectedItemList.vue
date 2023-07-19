<template>
    <div class="list-container">
        <div class="item-container">
         <span @click="openList">List {{list.id}}</span>
         <div>
         <button @click="sortItems(list)">Сортировать</button>
         <button @click="shuffleItems(list)">Перемешать</button>
         </div>
        </div>
         <ul v-if="isOpened">
       <SelectedItem v-for="(item, index) in list.items" :itemList="item"/>
       </ul>

    </div>
</template>

<script>
import SelectedItem from '@/components/SelectedItem/SelectedItem.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
export default{
    name: 'SelectedItemList',
    props:{
        list:{
            type: Object,
            default: () => {}

        }
    },
    data(){
        return{
        isOpened: false,
        isItemSelected: false
        }
    },
    methods:{
        openList(){
            this.isOpened = !this.isOpened
        },
        sortItems(list){
            list.items.sort((a, b) => a.name.localeCompare(b.name));
        },
        shuffleItems(list){
            for (let i = list.items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list.items[i], list.items[j]] = [list.items[j], list.items[i]];
      }

        },
    },
    computed:{

    },
    components:{
        SelectedItem,
        SvgIcon
    },

}


</script>

<style lang="scss" scoped>
ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex-wrap: wrap;
}
.list-container{
    padding: 5px;
    border: 1px solid grey
}
.item-container{
    display: flex;
    justify-content: space-between;
}
button{
    background-color: rgb(195, 235, 235);
    border: black;
    padding: 4px;
    border-radius: 3px;
    margin-left: 3px;
    &:hover{
        background-color: rgb(4, 104, 104);
        color: white
    }
}

</style>