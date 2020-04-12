<template>
   <div>
     <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle">
   </div> 
</template>
<script>
export default {
   props:["focused","selectedImage","normalImage"],
 
}
</script>
<style scoped>
.imgstyle{
    width: 30px;height: 30px;
}
</style>