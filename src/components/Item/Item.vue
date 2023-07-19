<template>
    <li class="item-container">
        <div>
        <input type="checkbox" v-model="itemList.isSelected">
        <span>{{ itemList.name }}</span>
      </div>
      <div class="inputs">
        <input type="number" min="0" class="input__number" v-model="itemList.quantity">
        <input type="color" class="input__color" v-model="itemList.color">
    </div>
    </li>
</template>

<script>
export default{
    name: 'Item',
    props:{
        itemList:{
            type: Object,
            default: () => {}
        }
    },
    methods:{
        handleClick(listId, itemId) {
    this.$store.dispatch('selectItem', { listId, itemId });
  }

    },
    data(){
        return{

        }
    },
   
}

</script>

<style lang="scss" scoped>
.item-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

}
.input__color{
    border: none;
  padding: 0;
  width: 20px;
  height:25px;
  outline: none;
  ::-webkit-color-swatch {
    border: 0;
}
}
.input__number{
    width: 40px;
    height: 20px;
    border: none
}
.inputs{
    display: flex;
    align-items: center;
    gap: 15px
}

</style>