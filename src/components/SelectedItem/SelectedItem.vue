<template>
    <div v-if="itemList.isSelected">
    <div class="item" v-for="itemIndex in itemList.quantity" :key="itemIndex" :style="{ backgroundColor: itemList.color }"
    @click="removeItem"></div>
   </div>
</template>

<script>
export default{
    name: 'SelectedItem',
    props:{
        itemList:{
            type: Object,
            default: () => {}
        }
    },
    data(){
        return{

        }
    },
    methods:{
    removeItem(){
        this.itemList.quantity--
    }
    }
   
}

</script>

<style lang="scss" scoped>
.item{
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-left: 3px;
}

</style>